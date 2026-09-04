document.addEventListener('DOMContentLoaded', () => {
    // Get problem ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const problemId = parseInt(urlParams.get('id')) || 1;
    
    // Find the problem
    const problem = problems.find(p => p.id === problemId) || problems[0];
    
    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: true,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        autofocus: true
    });

    // DOM Elements
    const problemTitle = document.getElementById('problemTitle');
    const problemDifficulty = document.getElementById('problemDifficulty');
    const problemDescription = document.getElementById('problemDescription');
    const problemExamples = document.getElementById('problemExamples');
    const problemConstraints = document.getElementById('problemConstraints');
    const languageSelect = document.getElementById('languageSelect');
    const runCodeBtn = document.getElementById('runCode');
    const submitCodeBtn = document.getElementById('submitCode');
    const resetCodeBtn = document.getElementById('resetCode');
    const outputContent = document.getElementById('outputContent');
    const clearOutputBtn = document.getElementById('clearOutput');

    // Load saved code or use template
    let savedCode = localStorage.getItem(`problem_${problemId}_code`);
    
    // Display problem
    function displayProblem() {
        problemTitle.textContent = `${problem.id}. ${problem.title}`;
        problemDifficulty.textContent = problem.difficulty;
        problemDifficulty.className = `difficulty-badge ${problem.difficulty.toLowerCase()}`;
        problemDescription.innerHTML = problem.description;
        
        // Display examples
        problemExamples.innerHTML = '<h3>Examples</h3>';
        problem.examples.forEach((example, index) => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example';
            exampleDiv.innerHTML = `
                <h4>Example ${index + 1}:</h4>
                <p><strong>Input:</strong> ${example.input}</p>
                <p><strong>Output:</strong> ${example.output}</p>
                ${example.explanation ? `<p><strong>Explanation:</strong> ${example.explanation}</p>` : ''}
            `;
            problemExamples.appendChild(exampleDiv);
        });
        
        // Display constraints
        problemConstraints.innerHTML = '<h3>Constraints</h3><ul>';
        problem.constraints.forEach(constraint => {
            problemConstraints.innerHTML += `<li>${constraint}</li>`;
        });
        problemConstraints.innerHTML += '</ul>';
        
        // Set initial code
        const lang = languageSelect.value;
        const code = savedCode || problem.templates[lang] || '';
        editor.setValue(code);
    }

    // Change language
    languageSelect.addEventListener('change', () => {
        const lang = languageSelect.value;
        const modeMap = {
            'javascript': 'javascript',
            'python': 'python',
            'java': 'text/x-java',
            'cpp': 'text/x-c++src'
        };
        editor.setOption('mode', modeMap[lang]);
        
        // Load saved code for this language or use template
        savedCode = localStorage.getItem(`problem_${problemId}_${lang}_code`);
        const code = savedCode || problem.templates[lang] || '';
        editor.setValue(code);
    });

    // Simple code runner (simulated)
    function runCode(code, language) {
        outputContent.innerHTML = '';
        
        try {
            if (language === 'javascript') {
                // Simple test execution
                const testResults = [];
                problem.testCases.forEach((testCase, index) => {
                    try {
                        // Create function from code
                        const funcMatch = code.match(/function\s+\w+\s*\([^)]*\)\s*\{([\s\S]*)\}/);
                        if (funcMatch) {
                            const funcBody = funcMatch[1];
                            const func = new Function('nums', 'target', funcBody);
                            const result = func(...testCase.input);
                            const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
                            testResults.push({
                                index: index + 1,
                                passed,
                                input: JSON.stringify(testCase.input),
                                expected: JSON.stringify(testCase.expected),
                                actual: JSON.stringify(result)
                            });
                        }
                    } catch (e) {
                        testResults.push({
                            index: index + 1,
                            passed: false,
                            error: e.message
                        });
                    }
                });
                
                displayResults(testResults);
            } else {
                outputContent.innerHTML = '<p class="placeholder">Code execution is simulated for JavaScript only. Try running JavaScript code!</p>';
            }
        } catch (error) {
            outputContent.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        }
    }

    // Display test results
    function displayResults(results) {
        const passed = results.filter(r => r.passed).length;
        const total = results.length;
        
        let html = `<div class="test-summary"><strong>${passed}/${total} test cases passed</strong></div>`;
        
        results.forEach(result => {
            const statusClass = result.passed ? 'pass' : 'fail';
            const statusIcon = result.passed ? '✓' : '✗';
            
            html += `
                <div class="test-result ${statusClass}">
                    <strong>Test ${result.index}: ${statusIcon}</strong>
                    ${result.error ? 
                        `<p class="error">Runtime Error: ${result.error}</p>` :
                        `<p>Input: ${result.input}</p>
                         <p>Expected: ${result.expected}</p>
                         ${!result.passed ? `<p>Actual: ${result.actual}</p>` : ''}`
                    }
                </div>
            `;
        });
        
        outputContent.innerHTML = html;
        
        // Update progress
        if (passed === total) {
            updateProgress(problem.id, 'solved');
        } else if (passed > 0) {
            updateProgress(problem.id, 'attempted');
        }
    }

    // Update progress in localStorage
    function updateProgress(problemId, status) {
        let progress = JSON.parse(localStorage.getItem('leetcodeProgress')) || {};
        progress[problemId] = status;
        localStorage.setItem('leetcodeProgress', JSON.stringify(progress));
    }

    // Run code
    runCodeBtn.addEventListener('click', () => {
        const code = editor.getValue();
        const language = languageSelect.value;
        
        // Save code
        localStorage.setItem(`problem_${problemId}_${language}_code`, code);
        
        runCode(code, language);
    });

    // Submit code
    submitCodeBtn.addEventListener('click', () => {
        const code = editor.getValue();
        const language = languageSelect.value;
        
        // Save code
        localStorage.setItem(`problem_${problemId}_${language}_code`, code);
        
        outputContent.innerHTML = '<p class="placeholder">Running all test cases...</p>';
        
        setTimeout(() => {
            runCode(code, language);
        }, 500);
    });

    // Reset code
    resetCodeBtn.addEventListener('click', () => {
        const lang = languageSelect.value;
        const code = problem.templates[lang] || '';
        editor.setValue(code);
        localStorage.removeItem(`problem_${problemId}_${lang}_code`);
        outputContent.innerHTML = '<p class="placeholder">Code reset to template</p>';
    });

    // Clear output
    clearOutputBtn.addEventListener('click', () => {
        outputContent.innerHTML = '<p class="placeholder">Run your code to see output here</p>';
    });

    // Initialize
    displayProblem();
});
