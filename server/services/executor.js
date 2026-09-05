const vm = require('vm');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

function normalizeOutput(str) {
  if (typeof str === 'string') return str.trim().replace(/\r\n/g, '\n');
  return JSON.stringify(str);
}

function parseArgs(inputStr) {
  try {
    const cleaned = inputStr.trim();
    if (cleaned.startsWith('[')) return JSON.parse(cleaned);
    if (cleaned.includes('=')) {
      const parts = cleaned.split(',').map(s => { const [, val] = s.split('=').map(x => x.trim()); return val; });
      return parts.map(p => { try { return JSON.parse(p); } catch { return p; } });
    }
    try { return JSON.parse(cleaned); } catch { return [cleaned]; }
  } catch { return [inputStr]; }
}

async function executeJavaScript(code, input, expected) {
  const startTime = Date.now();
  try {
    const args = parseArgs(input);
    const fnMatch = code.match(/function\s+(\w+)\s*\(([^)]*)\)\s*\{/);
    const methodName = fnMatch ? fnMatch[1] : 'solution';

    const wrappedCode = `
      ${code}
      const __args = ${JSON.stringify(args)};
      let __result;
      try {
        if (typeof ${methodName} === 'function') {
          __result = Array.isArray(__args[0]) && __args.length > 1 ? ${methodName}(...__args) : ${methodName}(...__args);
        } else {
          __result = "Error: Function ${methodName} not found";
        }
      } catch(e) {
        __result = "RuntimeError: " + e.message;
      }
      __result;
    `;

    const sandbox = {};
    const context = vm.createContext(sandbox);
    const script = new vm.Script(wrappedCode);
    let output = script.runInContext(context, { timeout: 5000 });
    const runtimeMs = Date.now() - startTime;

    if (typeof output === 'string' && output.startsWith('RuntimeError:')) {
      return { output: null, passed: false, runtime_ms: runtimeMs, error: output.replace('RuntimeError: ', '') };
    }

    output = typeof output === 'undefined' ? 'undefined' : JSON.stringify(output);
    const passed = normalizeOutput(output) === normalizeOutput(expected);
    return { output: normalizeOutput(output), passed, runtime_ms: runtimeMs, error: null };
  } catch (err) {
    return { output: null, passed: false, runtime_ms: Date.now() - startTime, error: err.message };
  }
}

async function executePython(code, input, expected) {
  const startTime = Date.now();
  const filePath = path.join(os.tmpdir(), `solution_${Date.now()}.py`);
  try {
    const args = parseArgs(input);
    const wrappedCode = `
import json, sys
${code}
try:
    args = json.loads('${JSON.stringify(args)}')
    if isinstance(args, list):
        result = solution(*args) if len(args) > 1 else solution(args[0])
    else:
        result = solution(args)
    print(json.dumps(result))
except Exception as e:
    print(json.dumps({"error": str(e)}), file=sys.stderr)
    sys.exit(1)
`;
    fs.writeFileSync(filePath, wrappedCode);
    const output = await new Promise((resolve, reject) => {
      const proc = spawn('python', [filePath], { timeout: 10000 });
      let stdout = '', stderr = '';
      proc.stdout.on('data', d => stdout += d);
      proc.stderr.on('data', d => stderr += d);
      proc.on('close', code => { code !== 0 ? reject(new Error(stderr || 'Python failed')) : resolve(stdout.trim()); });
      proc.on('error', reject);
    });
    const runtimeMs = Date.now() - startTime;
    const passed = normalizeOutput(output) === normalizeOutput(expected);
    return { output: normalizeOutput(output), passed, runtime_ms: runtimeMs, error: null };
  } catch (err) {
    return { output: null, passed: false, runtime_ms: Date.now() - startTime, error: err.message };
  } finally {
    try { fs.unlinkSync(filePath); } catch {}
  }
}

async function executeCode(language, code, input, expected) {
  switch (language) {
    case 'javascript': return executeJavaScript(code, input, expected);
    case 'python': return executePython(code, input, expected);
    case 'java': return { output: null, passed: false, runtime_ms: 0, error: 'Java execution requires JDK installation.' };
    case 'cpp': return { output: null, passed: false, runtime_ms: 0, error: 'C++ execution requires g++ compiler.' };
    case 'c': return { output: null, passed: false, runtime_ms: 0, error: 'C execution requires gcc compiler.' };
    default: throw new Error(`Unsupported language: ${language}`);
  }
}

module.exports = { executeCode };
