document.addEventListener('DOMContentLoaded', () => {
    const agentModal = document.getElementById('agentModal');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const closeChatBtn = document.getElementById('closeChat');
    const chatAgentName = document.getElementById('chatAgentName');
    const chatAgentIcon = document.getElementById('chatAgentIcon');

    let currentAgent = null;
    let conversationHistory = [];

    // Agent configurations
    const agents = {
        hint: {
            name: 'Hint Agent',
            icon: 'fa-lightbulb',
            welcome: "I'll help you get hints for the current problem without spoiling the solution. What hint level would you like? (1-3, where 3 gives the most detail)",
            responses: {
                1: "Level 1 Hint: Think about what data structure could help you look up values quickly. Consider using a hash map to store values you've seen.",
                2: "Level 2 Hint: Iterate through the array once. For each element, calculate its complement (target - current element). Check if this complement exists in your hash map.",
                3: "Level 3 Hint: Create an empty hash map. Loop through the array: if the complement exists in the map, return both indices. Otherwise, add the current element and its index to the map.",
                default: "I can provide hints at levels 1, 2, or 3. Level 1 is the subtlest, Level 3 is the most detailed. Which would you like?"
            }
        },
        review: {
            name: 'Code Review Agent',
            icon: 'fa-search',
            welcome: "I'll review your code and provide optimization suggestions. Please paste your code and I'll analyze it for you.",
            responses: {
                default: "I'd be happy to review your code! Please paste it in the chat. I'll check for:\n- Time & Space complexity\n- Code readability\n- Edge cases\n- Potential optimizations\n- Best practices"
            }
        },
        explain: {
            name: 'Explain Agent',
            icon: 'fa-book',
            welcome: "I can explain any algorithm or concept step by step. What would you like to understand better?",
            responses: {
                default: "I can explain:\n- Algorithm concepts (sorting, searching, DP, etc.)\n- Data structures (arrays, trees, graphs, etc.)\n- Problem-solving approaches\n- Code patterns\n\nWhat topic interests you?"
            }
        },
        debug: {
            name: 'Debug Agent',
            icon: 'fa-bug',
            welcome: "I'll help you find and fix bugs in your code. Share your code and any error messages you're seeing.",
            responses: {
                default: "To help debug your code, please share:\n1. Your code\n2. The expected vs actual output\n3. Any error messages\n\nI'll analyze it and suggest fixes!"
            }
        },
        complexity: {
            name: 'Complexity Agent',
            icon: 'fa-chart-line',
            welcome: "I'll analyze the time and space complexity of your solution. Share your code for analysis.",
            responses: {
                default: "I can analyze:\n- Time Complexity (Big O)\n- Space Complexity\n- Best/Average/Worst cases\n- Optimization opportunities\n\nPaste your code to get started!"
            }
        },
        alternative: {
            name: 'Alternative Agent',
            icon: 'fa-code-branch',
            welcome: "I can suggest alternative approaches to solve a problem. What problem are you working on?",
            responses: {
                default: "I can suggest:\n- Different algorithms\n- Various data structures\n- Iterative vs Recursive approaches\n- Optimized solutions\n\nDescribe the problem or share your current approach!"
            }
        }
    };

    // Open agent chat
    window.openAgent = function(agentType) {
        currentAgent = agents[agentType];
        conversationHistory = [];
        
        chatAgentName.textContent = currentAgent.name;
        chatAgentIcon.innerHTML = `<i class="fas ${currentAgent.icon}"></i>`;
        
        chatMessages.innerHTML = `
            <div class="message agent">
                <div class="message-content">
                    <p>${currentAgent.welcome}</p>
                </div>
            </div>
        `;
        
        agentModal.classList.add('active');
        chatInput.focus();
    };

    // Close chat
    closeChatBtn.addEventListener('click', () => {
        agentModal.classList.remove('active');
        currentAgent = null;
    });

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message || !currentAgent) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Simulate AI response
        setTimeout(() => {
            const response = getAgentResponse(message);
            addMessage(response, 'agent');
        }, 800);
    }

    // Add message to chat
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${content.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Get agent response
    function getAgentResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for specific keywords
        if (currentAgent.responses[message]) {
            return currentAgent.responses[message];
        }

        if (lowerMessage.includes('hint') || lowerMessage.includes('help')) {
            if (currentAgent.name === 'Hint Agent') {
                if (lowerMessage.includes('1') || lowerMessage.includes('one') || lowerMessage.includes('subtle')) {
                    return currentAgent.responses[1];
                } else if (lowerMessage.includes('2') || lowerMessage.includes('two') || lowerMessage.includes('medium')) {
                    return currentAgent.responses[2];
                } else if (lowerMessage.includes('3') || lowerMessage.includes('three') || lowerMessage.includes('detail')) {
                    return currentAgent.responses[3];
                }
            }
        }

        if (lowerMessage.includes('time') || lowerMessage.includes('complexity') || lowerMessage.includes('big o')) {
            return "Time complexity measures how the runtime grows with input size. Common complexities:\n- O(1) - Constant\n- O(log n) - Logarithmic\n- O(n) - Linear\n- O(n log n) - Linearithmic\n- O(n²) - Quadratic\n\nShare your code for specific analysis!";
        }

        if (lowerMessage.includes('space') || lowerMessage.includes('memory')) {
            return "Space complexity measures memory usage. Consider:\n- Extra data structures used\n- Recursion stack depth\n- In-place vs out-of-place algorithms\n\nI can analyze your specific code if you share it!";
        }

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return `Hello! I'm ${currentAgent.name}. ${currentAgent.welcome}`;
        }

        if (lowerMessage.includes('thank')) {
            return "You're welcome! Feel free to ask if you need more help. Happy coding!";
        }

        if (lowerMessage.includes('bye') || lowerMessage.includes('exit')) {
            return "Goodbye! Good luck with your coding journey!";
        }

        // Default responses based on agent type
        const defaultResponses = {
            hint: "I can provide hints at levels 1, 2, or 3. Just tell me which level you'd like!",
            review: "Please paste the code you'd like me to review, and I'll provide detailed feedback.",
            explain: "What specific concept or algorithm would you like me to explain?",
            debug: "Share your code and describe the issue you're facing, and I'll help you fix it.",
            complexity: "Paste your code and I'll analyze its time and space complexity.",
            alternative: "Describe the problem or share your current approach, and I'll suggest alternatives."
        };

        return defaultResponses[currentAgent.name.split(' ')[0].toLowerCase()] || 
               "I'm here to help! Please provide more details about what you need.";
    }

    // Event listeners
    sendMessageBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Close modal on outside click
    agentModal.addEventListener('click', (e) => {
        if (e.target === agentModal) {
            agentModal.classList.remove('active');
            currentAgent = null;
        }
    });
});
