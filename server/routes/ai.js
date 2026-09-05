const express = require('express');
const { getOne } = require('../database');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/chat', authMiddleware, async (req, res) => {
  try {
    const { agent, message } = req.body;
    if (!agent || !message) return res.status(400).json({ error: 'Agent and message are required' });

    let response = '';
    switch (agent) {
      case 'hint': response = generateHintResponse(message); break;
      case 'review': response = generateReviewResponse(message); break;
      case 'debug': response = generateDebugResponse(message); break;
      case 'explain': response = generateExplainResponse(message); break;
      case 'complexity': response = generateComplexityResponse(message); break;
      case 'interview': response = generateInterviewResponse(message); break;
      default: response = "I'm here to help! Please ask about a problem or share your code.";
    }

    res.json({ response, agent });
  } catch (err) {
    console.error('AI chat error:', err);
    res.status(500).json({ error: 'AI service error' });
  }
});

function generateHintResponse(message) {
  const lower = message.toLowerCase();
  if (lower.match(/\b(level|hint)\s*(1|one|first)\b/) || lower === '1' || lower === 'hint') {
    return "**Hint Level 1:** Start by understanding the problem constraints. Consider which data structures or algorithms are commonly used for this type of problem. Think about the time complexity requirements.";
  }
  if (lower.match(/\b(level|hint)\s*(2|two|medium)\b/) || lower === '2') {
    return "**Hint Level 2:** Break the problem into smaller subproblems. Identify the pattern or relationship between elements. Consider using a hash map, two pointers, or dynamic programming depending on the constraints.";
  }
  if (lower.match(/\b(level|hint)\s*(3|three|detailed)\b/) || lower === '3') {
    return "**Hint Level 3:** Here's the approach: 1) Identify the core operation needed. 2) Choose the right data structure based on access patterns. 3) Handle edge cases (empty input, single element, etc.). 4) Optimize for the given constraints.";
  }
  return "I can provide hints at levels 1, 2, or 3.\n\n**Level 1:** Subtle conceptual nudge\n**Level 2:** Directional guidance\n**Level 3:** Detailed approach without the full answer\n\nTell me which level you'd like!";
}

function generateReviewResponse(message) {
  if (message.length > 20) {
    let response = "## Code Review\n\n";
    const issues = [];
    if (message.includes('var ')) issues.push("Using `var` instead of `let`/`const`");
    if (message.includes('==') && !message.includes('===')) issues.push("Using loose equality `==` - prefer strict `===`");
    if (message.includes('eval(')) issues.push("Using `eval()` is a security risk");

    if (issues.length > 0) response += "**Issues Found:**\n" + issues.map(i => "- " + i).join('\n') + "\n\n";
    else response += "**No major issues found**\n\n";
    response += "**Tips:** Check edge cases, consider time/space complexity, and ensure proper error handling.";
    return response;
  }
  return "Share your code and I'll review it for correctness, bugs, edge cases, complexity, and optimization opportunities.";
}

function generateDebugResponse(message) {
  if (message.includes('error') || message.includes('Error')) {
    let response = "## Debug Analysis\n\n";
    if (message.includes('TypeError')) response += "**Type Error:** Check for null/undefined values and type mismatches.\n";
    else if (message.includes('ReferenceError')) response += "**Reference Error:** A variable is being used before declaration.\n";
    else if (message.includes('IndexError') || message.includes('out of range')) response += "**Index Error:** Array/string index out of bounds.\n";
    else response += "**Common Steps:** 1) Add console.log to trace values 2) Check edge cases 3) Verify loop conditions\n";
    return response;
  }
  return "What error are you seeing? Share the error message and the input that causes it, and I'll help debug it!";
}

function generateExplainResponse(message) {
  return "## Concept Explanation\n\nI can explain:\n- **Intuition** behind the approach\n- **Step-by-step** algorithm walkthrough\n- **Time & space** complexity analysis\n- **Edge cases** to consider\n- **Alternative approaches**\n\nAsk me about a specific concept or algorithm!";
}

function generateComplexityResponse(message) {
  if (message.length > 20) {
    let response = "## Complexity Analysis\n\n";
    const hasNested = /for.*for|while.*while/.test(message);
    const hasLoop = /for|while/.test(message);
    const hasMap = /Map|dict|\{}/.test(message);

    if (hasNested) response += "**Time:** O(n^2) - Nested loops detected\n";
    else if (hasLoop) response += "**Time:** O(n) - Single loop\n";
    else response += "**Time:** O(1) - No loops\n";

    if (hasMap) response += "**Space:** O(n) - Hash map storage\n";
    else response += "**Space:** O(1) - Constant extra space\n";

    return response;
  }
  return "Share your code and I'll analyze its time and space complexity!";
}

function generateInterviewResponse(message) {
  return "## Interview Follow-up Questions\n\n1. What if the input size doubles? How does your solution scale?\n2. Can you solve it with O(1) space?\n3. What if the input is a stream?\n4. What are the edge cases?\n5. Can you explain your approach to a non-technical person?";
}

module.exports = router;
