const { getOne, runInsert, saveDatabase } = require('./database');

const problemsData = [
  {
    id: 1, slug: 'two-sum', title: 'Two Sum', difficulty: 'Easy', acceptance: 49.2,
    description: '<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>',
    input_format: 'An array of integers and a target integer.',
    output_format: 'An array of two indices.',
    constraints: '["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","-10^9 <= target <= 10^9","Only one valid answer exists."]',
    topics: '["Array","Hash Table"]', companies: '["Google","Amazon","Meta"]',
    estimated_time: 15, interview_frequency: 'Very High',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: '' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]', explanation: '' }
    ],
    templates: {
      javascript: 'function twoSum(nums, target) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[2,7,11,15],9]', expected: '[0,1]', hidden: false },
      { input: '[[3,2,4],6]', expected: '[1,2]', hidden: false },
      { input: '[[3,3],6]', expected: '[0,1]', hidden: false },
      { input: '[[1,4,6,8,10],10]', expected: '[1,2]', hidden: true },
      { input: '[[5,7,9,11,13],20]', expected: '[2,3]', hidden: true }
    ]
  },
  {
    id: 2, slug: 'best-time-to-buy-and-sell-stock', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', acceptance: 54.2,
    description: '<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p><p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p><p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>',
    input_format: 'An array of integers representing stock prices.',
    output_format: 'An integer representing maximum profit.',
    constraints: '["1 <= prices.length <= 10^5","0 <= prices[i] <= 10^4"]',
    topics: '["Array","Dynamic Programming"]', companies: '["Amazon","Goldman Sachs","Google"]',
    estimated_time: 15, interview_frequency: 'Very High',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.' },
      { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'In this case, no transactions are done and the max profit = 0.' }
    ],
    templates: {
      javascript: 'function maxProfit(prices) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int maxProfit(int* prices, int pricesSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[7,1,5,3,6,4]]', expected: '5', hidden: false },
      { input: '[[7,6,4,3,1]]', expected: '0', hidden: false },
      { input: '[[2,4,1]]', expected: '2', hidden: true },
      { input: '[[3,3,5,0,0,3,1,4]]', expected: '4', hidden: true }
    ]
  },
  {
    id: 3, slug: 'contains-duplicate', title: 'Contains Duplicate', difficulty: 'Easy', acceptance: 61.2,
    description: '<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>',
    input_format: 'An array of integers.',
    output_format: 'A boolean.',
    constraints: '["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"]',
    topics: '["Array","Hash Table","Sorting"]', companies: '["Amazon","Apple","Google"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true', explanation: '' },
      { input: 'nums = [1,2,3,4]', output: 'false', explanation: '' },
      { input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true', explanation: '' }
    ],
    templates: {
      javascript: 'function containsDuplicate(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool containsDuplicate(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,3,1]]', expected: 'true', hidden: false },
      { input: '[[1,2,3,4]]', expected: 'false', hidden: false },
      { input: '[[1,1,1,3,3,4,3,2,4,2]]', expected: 'true', hidden: true }
    ]
  },
  {
    id: 4, slug: 'maximum-subarray', title: 'Maximum Subarray', difficulty: 'Medium', acceptance: 50.1,
    description: '<p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.</p>',
    input_format: 'An array of integers.',
    output_format: 'An integer representing the maximum subarray sum.',
    constraints: '["1 <= nums.length <= 10^5","-10^4 <= nums[i] <= 10^4"]',
    topics: '["Array","Dynamic Programming","Divide and Conquer"]', companies: '["Google","Amazon","Microsoft"]',
    estimated_time: 20, interview_frequency: 'Very High',
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'The subarray [4,-1,2,1] has the largest sum 6.' },
      { input: 'nums = [1]', output: '1', explanation: '' },
      { input: 'nums = [5,4,-1,7,8]', output: '23', explanation: '' }
    ],
    templates: {
      javascript: 'function maxSubArray(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int maxSubArray(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[-2,1,-3,4,-1,2,1,-5,4]]', expected: '6', hidden: false },
      { input: '[[1]]', expected: '1', hidden: false },
      { input: '[[5,4,-1,7,8]]', expected: '23', hidden: true },
      { input: '[[-1]]', expected: '-1', hidden: true }
    ]
  },
  {
    id: 5, slug: 'valid-parentheses', title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.8,
    description: '<p>Given a string <code>s</code> containing just the characters <code>\'(\'</code>, <code>\')\'</code>, <code>\'{\'</code>, <code>\'}\'</code>, <code>\'[\'</code> and <code>\']\'</code>, determine if the input string is valid.</p><p>An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol>',
    input_format: 'A string of brackets.',
    output_format: 'A boolean.',
    constraints: '["1 <= s.length <= 10^4","s consists of parentheses only \'()[]{}\'"]',
    topics: '["String","Stack"]', companies: '["Amazon","Meta","Google"]',
    estimated_time: 10, interview_frequency: 'Very High',
    examples: [
      { input: 's = "()"', output: 'true', explanation: '' },
      { input: 's = "()[]{}"', output: 'true', explanation: '' },
      { input: 's = "(]"', output: 'false', explanation: '' }
    ],
    templates: {
      javascript: 'function isValid(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isValid(self, s: str) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isValid(char* s) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["()"]', expected: 'true', hidden: false },
      { input: '["()[]{}"]', expected: 'true', hidden: false },
      { input: '["(]"]', expected: 'false', hidden: false },
      { input: '["{[]}"]', expected: 'true', hidden: true },
      { input: '["([)]"]', expected: 'false', hidden: true }
    ]
  },
  {
    id: 6, slug: 'reverse-linked-list', title: 'Reverse Linked List', difficulty: 'Easy', acceptance: 72.8,
    description: '<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>',
    input_format: 'The head of a singly linked list.',
    output_format: 'The head of the reversed linked list.',
    constraints: '["The number of nodes is in the range [0, 5000]","-5000 <= Node.val <= 5000"]',
    topics: '["Linked List","Recursion"]', companies: '["Microsoft","Apple","Amazon"]',
    estimated_time: 15, interview_frequency: 'Very High',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]', explanation: '' },
      { input: 'head = [1,2]', output: '[2,1]', explanation: '' },
      { input: 'head = []', output: '[]', explanation: '' }
    ],
    templates: {
      javascript: 'function reverseList(head) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // Write your solution here\n        \n    }\n};',
      c: 'struct ListNode* reverseList(struct ListNode* head) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,3,4,5]]', expected: '[5,4,3,2,1]', hidden: false },
      { input: '[[1,2]]', expected: '[2,1]', hidden: false },
      { input: '[[]]', expected: '[]', hidden: true }
    ]
  },
  {
    id: 7, slug: 'merge-two-sorted-lists', title: 'Merge Two Sorted Lists', difficulty: 'Easy', acceptance: 61.8,
    description: '<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p><p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p><p>Return <em>the head of the merged linked list</em>.</p>',
    input_format: 'Two sorted linked lists.',
    output_format: 'The merged sorted linked list.',
    constraints: '["Both lists are sorted in non-decreasing order","The number of nodes in both lists is in [0, 50]"]',
    topics: '["Linked List","Recursion"]', companies: '["Amazon","Microsoft","Google"]',
    estimated_time: 15, interview_frequency: 'High',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]', explanation: '' }
    ],
    templates: {
      javascript: 'function mergeTwoLists(list1, list2) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Write your solution here\n        \n    }\n};',
      c: 'struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,4],[1,3,4]]', expected: '[1,1,2,3,4,4]', hidden: false },
      { input: '[[],[]]', expected: '[]', hidden: false },
      { input: '[[],[0]]', expected: '[0]', hidden: true }
    ]
  },
  {
    id: 8, slug: 'binary-search', title: 'Binary Search', difficulty: 'Easy', acceptance: 55.8,
    description: '<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>',
    input_format: 'A sorted array and a target integer.',
    output_format: 'Index of target or -1.',
    constraints: '["1 <= nums.length <= 10^4","All the integers in nums are unique","nums is sorted in ascending order"]',
    topics: '["Array","Binary Search"]', companies: '["Facebook","Amazon"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '' }
    ],
    templates: {
      javascript: 'function search(nums, target) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int search(int* nums, int numsSize, int target) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[-1,0,3,5,9,12],9]', expected: '4', hidden: false },
      { input: '[[-1,0,3,5,9,12],2]', expected: '-1', hidden: false },
      { input: '[[5],5]', expected: '0', hidden: true }
    ]
  },
  {
    id: 9, slug: 'climbing-stairs', title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 51.5,
    description: '<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p><p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>',
    input_format: 'An integer n.',
    output_format: 'Number of distinct ways.',
    constraints: '["1 <= n <= 45"]',
    topics: '["Math","Dynamic Programming","Memoization"]', companies: '["Amazon","Apple","Google"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'n = 2', output: '2', explanation: '1. 1 step + 1 step, 2. 2 steps' },
      { input: 'n = 3', output: '3', explanation: '1. 1+1+1, 2. 1+2, 3. 2+1' }
    ],
    templates: {
      javascript: 'function climbStairs(n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def climbStairs(self, n: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int climbStairs(int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int climbStairs(int n) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[2]', expected: '2', hidden: false },
      { input: '[3]', expected: '3', hidden: false },
      { input: '[5]', expected: '8', hidden: true },
      { input: '[10]', expected: '89', hidden: true }
    ]
  },
  {
    id: 10, slug: 'palindrome-number', title: 'Palindrome Number', difficulty: 'Easy', acceptance: 52.4,
    description: '<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome integer.</p><p>An integer is a palindrome when it reads the same backward as forward. For example, <code>121</code> is a palindrome while <code>123</code> is not.</p>',
    input_format: 'An integer.',
    output_format: 'A boolean.',
    constraints: '["-2^31 <= x <= 2^31 - 1"]',
    topics: '["Math"]', companies: '["Amazon"]',
    estimated_time: 10, interview_frequency: 'Medium',
    examples: [
      { input: 'x = 121', output: 'true', explanation: '121 reads as 121 from left to right and from right to left.' },
      { input: 'x = -121', output: 'false', explanation: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.' },
      { input: 'x = 10', output: 'false', explanation: 'Reads 01 from right to left. Therefore it is not a palindrome.' }
    ],
    templates: {
      javascript: 'function isPalindrome(x) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isPalindrome(int x) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[121]', expected: 'true', hidden: false },
      { input: '[-121]', expected: 'false', hidden: false },
      { input: '[10]', expected: 'false', hidden: false },
      { input: '[0]', expected: 'true', hidden: true }
    ]
  },
  {
    id: 11, slug: 'reverse-string', title: 'Reverse String', difficulty: 'Easy', acceptance: 77.5,
    description: '<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p><p>You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with <code>O(1)</code> extra memory.</p>',
    input_format: 'An array of characters.',
    output_format: 'The reversed array (in-place).',
    constraints: '["1 <= s.length <= 10^5","s[i] is a printable ascii character."]',
    topics: '["Two Pointers","String"]', companies: '["Microsoft","Amazon"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]', explanation: '' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]', explanation: '' }
    ],
    templates: {
      javascript: 'function reverseString(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def reverseString(self, s: list[str]) -> None:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public void reverseString(char[] s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'void reverseString(char* s, int sSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[["h","e","l","l","o"]]', expected: '["o","l","l","e","h"]', hidden: false },
      { input: '[["H","a","n","n","a","h"]]', expected: '["h","a","n","n","a","H"]', hidden: false }
    ]
  },
  {
    id: 12, slug: 'valid-anagram', title: 'Valid Anagram', difficulty: 'Easy', acceptance: 58.3,
    description: '<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>',
    input_format: 'Two strings.',
    output_format: 'A boolean.',
    constraints: '["1 <= s.length, t.length <= 5 * 10^4","s and t consist of lowercase English letters."]',
    topics: '["Hash Table","String","Sorting"]', companies: '["Amazon","Google","Microsoft"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true', explanation: '' },
      { input: 's = "rat", t = "car"', output: 'false', explanation: '' }
    ],
    templates: {
      javascript: 'function isAnagram(s, t) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isAnagram(char* s, char* t) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["anagram","nagaram"]', expected: 'true', hidden: false },
      { input: '["rat","car"]', expected: 'false', hidden: false }
    ]
  },
  {
    id: 13, slug: 'valid-palindrome', title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 46.5,
    description: '<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.</p><p>Given a string <code>s</code>, return <code>true</code> if it is a palindrome, or <code>false</code> otherwise.</p>',
    input_format: 'A string.',
    output_format: 'A boolean.',
    constraints: '["1 <= s.length <= 2 * 10^5","s consists only of printable ASCII characters."]',
    topics: '["Two Pointers","String"]', companies: '["Meta","Amazon"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' }
    ],
    templates: {
      javascript: 'function isPalindrome(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isPalindrome(char* s) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["A man, a plan, a canal: Panama"]', expected: 'true', hidden: false },
      { input: '["race a car"]', expected: 'false', hidden: false },
      { input: '[" "]', expected: 'true', hidden: true }
    ]
  },
  {
    id: 14, slug: 'single-number', title: 'Single Number', difficulty: 'Easy', acceptance: 67.5,
    description: '<p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears twice except for one. Find that single one.</p><p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p>',
    input_format: 'An array of integers.',
    output_format: 'The single number.',
    constraints: '["1 <= nums.length <= 3 * 10^4","-3 * 10^4 <= nums[i] <= 3 * 10^4","Each element in the array appears twice except for one element which appears only once."]',
    topics: '["Array","Bit Manipulation"]', companies: '["Google","Amazon"]',
    estimated_time: 10, interview_frequency: 'Medium',
    examples: [
      { input: 'nums = [2,2,1]', output: '1', explanation: '' },
      { input: 'nums = [4,1,2,1,2]', output: '4', explanation: '' },
      { input: 'nums = [1]', output: '1', explanation: '' }
    ],
    templates: {
      javascript: 'function singleNumber(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def singleNumber(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int singleNumber(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[2,2,1]]', expected: '1', hidden: false },
      { input: '[[4,1,2,1,2]]', expected: '4', hidden: false },
      { input: '[[1]]', expected: '1', hidden: true }
    ]
  },
  {
    id: 15, slug: 'majority-element', title: 'Majority Element', difficulty: 'Easy', acceptance: 63.8,
    description: '<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p><p>The majority element is the element that appears more than <code>\u230An / 2\u230B</code> times. You may assume that the majority element always exists in the array.</p>',
    input_format: 'An array of integers.',
    output_format: 'The majority element.',
    constraints: '["n == nums.length","1 <= n <= 5 * 10^4","-2^31 <= nums[i] <= 2^31 - 1"]',
    topics: '["Array","Hash Table","Divide and Conquer","Sorting","Counting"]', companies: '["Amazon","Google"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'nums = [3,2,3]', output: '3', explanation: '' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2', explanation: '' }
    ],
    templates: {
      javascript: 'function majorityElement(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def majorityElement(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int majorityElement(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[3,2,3]]', expected: '3', hidden: false },
      { input: '[[2,2,1,1,1,2,2]]', expected: '2', hidden: false }
    ]
  },
  {
    id: 16, slug: 'merge-intervals', title: 'Merge Intervals', difficulty: 'Medium', acceptance: 46.2,
    description: '<p>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>',
    input_format: 'An array of intervals.',
    output_format: 'An array of merged intervals.',
    constraints: '["1 <= intervals.length <= 10^4","intervals[i].length == 2"]',
    topics: '["Array","Sorting"]', companies: '["Google","Meta","Amazon"]',
    estimated_time: 20, interview_frequency: 'Very High',
    examples: [
      { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].' },
      { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]', explanation: 'Intervals [1,4] and [4,5] are considered overlapping.' }
    ],
    templates: {
      javascript: 'function merge(intervals) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[[1,3],[2,6],[8,10],[15,18]]]', expected: '[[1,6],[8,10],[15,18]]', hidden: false },
      { input: '[[[1,4],[4,5]]]', expected: '[[1,5]]', hidden: false },
      { input: '[[[1,4],[0,4]]]', expected: '[[0,4]]', hidden: true }
    ]
  },
  {
    id: 17, slug: '3sum', title: '3Sum', difficulty: 'Medium', acceptance: 32.8,
    description: '<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p><p>Notice that the solution set must not contain duplicate triplets.</p>',
    input_format: 'An array of integers.',
    output_format: 'A list of unique triplets.',
    constraints: '["3 <= nums.length <= 3000","-10^5 <= nums[i] <= 10^5"]',
    topics: '["Array","Two Pointers","Sorting"]', companies: '["Amazon","Meta","Google"]',
    estimated_time: 30, interview_frequency: 'Very High',
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]', explanation: '' },
      { input: 'nums = [0,1,1]', output: '[]', explanation: '' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]', explanation: '' }
    ],
    templates: {
      javascript: 'function threeSum(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[-1,0,1,2,-1,-4]]', expected: '[[-1,-1,2],[-1,0,1]]', hidden: false },
      { input: '[[0,1,1]]', expected: '[]', hidden: false },
      { input: '[[0,0,0]]', expected: '[[0,0,0]]', hidden: true }
    ]
  },
  {
    id: 18, slug: 'container-with-most-water', title: 'Container With Most Water', difficulty: 'Medium', acceptance: 54.1,
    description: '<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p><p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p><p>Return <em>the maximum amount of water a container can store</em>.</p>',
    input_format: 'An array of heights.',
    output_format: 'Maximum water area.',
    constraints: '["n == height.length","2 <= n <= 10^5","0 <= height[i] <= 10^4"]',
    topics: '["Array","Two Pointers","Greedy"]', companies: '["Amazon","Google","Microsoft"]',
    estimated_time: 20, interview_frequency: 'High',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: '' },
      { input: 'height = [1,1]', output: '1', explanation: '' }
    ],
    templates: {
      javascript: 'function maxArea(height) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int maxArea(int* height, int heightSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,8,6,2,5,4,8,3,7]]', expected: '49', hidden: false },
      { input: '[[1,1]]', expected: '1', hidden: false },
      { input: '[[4,3,2,1,4]]', expected: '16', hidden: true }
    ]
  },
  {
    id: 19, slug: 'coin-change', title: 'Coin Change', difficulty: 'Medium', acceptance: 40.5,
    description: '<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p><p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p><p>You may assume that you have an infinite number of each kind of coin.</p>',
    input_format: 'An array of coin denominations and a target amount.',
    output_format: 'Minimum number of coins or -1.',
    constraints: '["1 <= coins.length <= 12","1 <= coins[i] <= 2^31 - 1","0 <= amount <= 10^4"]',
    topics: '["Array","Dynamic Programming","BFS"]', companies: '["Amazon","Google","Microsoft"]',
    estimated_time: 25, interview_frequency: 'Very High',
    examples: [
      { input: 'coins = [1,2,5], amount = 11', output: '3', explanation: '11 = 5 + 5 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1', explanation: '' },
      { input: 'coins = [1], amount = 0', output: '0', explanation: '' }
    ],
    templates: {
      javascript: 'function coinChange(coins, amount) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def coinChange(self, coins: list[int], amount: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int coinChange(int* coins, int coinsSize, int amount) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,5],11]', expected: '3', hidden: false },
      { input: '[[2],3]', expected: '-1', hidden: false },
      { input: '[[1],0]', expected: '0', hidden: true }
    ]
  },
  {
    id: 20, slug: 'number-of-islands', title: 'Number of Islands', difficulty: 'Medium', acceptance: 57.2,
    description: '<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>\'1\'</code>s (land) and <code>\'0\'</code>s (water), return <em>the number of islands</em>.</p><p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.</p>',
    input_format: 'A 2D grid of 1s and 0s.',
    output_format: 'Number of islands.',
    constraints: '["m == grid.length","n == grid[i].length","1 <= m, n <= 300","grid[i][j] is \'0\' or \'1\'."]',
    topics: '["Array","DFS","BFS","Union Find","Matrix"]', companies: '["Amazon","Google","Meta"]',
    estimated_time: 25, interview_frequency: 'Very High',
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1', explanation: '' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3', explanation: '' }
    ],
    templates: {
      javascript: 'function numIslands(grid) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int numIslands(char** grid, int gridSize, int* gridColSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]]', expected: '1', hidden: false },
      { input: '[[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]]', expected: '3', hidden: false }
    ]
  },
  {
    id: 21, slug: 'longest-common-subsequence', title: 'Longest Common Subsequence', difficulty: 'Medium', acceptance: 57.8,
    description: '<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. If there is no common subsequence, return <code>0</code></em>.</p><p>A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>',
    input_format: 'Two strings.',
    output_format: 'Length of LCS.',
    constraints: '["1 <= text1.length, text2.length <= 1000","text1 and text2 consist of only lowercase English characters."]',
    topics: '["String","Dynamic Programming"]', companies: '["Google","Amazon"]',
    estimated_time: 25, interview_frequency: 'High',
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'The longest common subsequence is "ace" and its length is 3.' },
      { input: 'text1 = "abc", text2 = "def"', output: '0', explanation: 'There is no common subsequence, so the result is 0.' }
    ],
    templates: {
      javascript: 'function longestCommonSubsequence(text1, text2) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int longestCommonSubsequence(char* text1, char* text2) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["abcde","ace"]', expected: '3', hidden: false },
      { input: '["abc","def"]', expected: '0', hidden: false },
      { input: '["abc","abc"]', expected: '3', hidden: true }
    ]
  },
  {
    id: 22, slug: 'house-robber', title: 'House Robber', difficulty: 'Medium', acceptance: 49.8,
    description: '<p>You are a robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.</p><p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight without alerting the police</em>.</p>',
    input_format: 'An array of non-negative integers.',
    output_format: 'Maximum money that can be robbed.',
    constraints: '["1 <= nums.length <= 100","0 <= nums[i] <= 400"]',
    topics: '["Array","Dynamic Programming"]', companies: '["Google","Amazon","Microsoft"]',
    estimated_time: 20, interview_frequency: 'High',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explanation: 'Rob house 1 (money = 1) and then house 3 (money = 3). Total = 1 + 3 = 4.' },
      { input: 'nums = [2,7,9,3,1]', output: '12', explanation: 'Rob house 1 (money = 2), house 3 (money = 9) and house 5 (money = 1). Total = 2 + 9 + 1 = 12.' }
    ],
    templates: {
      javascript: 'function rob(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def rob(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int rob(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int rob(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,3,1]]', expected: '4', hidden: false },
      { input: '[[2,7,9,3,1]]', expected: '12', hidden: false },
      { input: '[[2,1,1,2]]', expected: '4', hidden: true }
    ]
  },
  {
    id: 23, slug: 'unique-paths', title: 'Unique Paths', difficulty: 'Medium', acceptance: 62.5,
    description: '<p>A robot is located at the top-left corner of a <code>m x n</code> grid (<code>grid[m-1][n-1]</code> = 0).</p><p>The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.</p><p>How many possible unique paths are there?</p>',
    input_format: 'Two integers m and n.',
    output_format: 'Number of unique paths.',
    constraints: '["1 <= m, n <= 100"]',
    topics: '["Math","Dynamic Programming","Combinatorics"]', companies: '["Amazon","Google"]',
    estimated_time: 20, interview_frequency: 'Medium',
    examples: [
      { input: 'm = 3, n = 7', output: '28', explanation: '' },
      { input: 'm = 3, n = 2', output: '3', explanation: '' }
    ],
    templates: {
      javascript: 'function uniquePaths(m, n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int uniquePaths(int m, int n) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[3,7]', expected: '28', hidden: false },
      { input: '[3,2]', expected: '3', hidden: false },
      { input: '[7,3]', expected: '28', hidden: true }
    ]
  },
  {
    id: 24, slug: 'longest-substring-without-repeating-characters', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: 33.8,
    description: '<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>',
    input_format: 'A string.',
    output_format: 'Length of longest substring.',
    constraints: '["0 <= s.length <= 5 * 10^4","s consists of English letters, digits, symbols and spaces."]',
    topics: '["Hash Table","String","Sliding Window"]', companies: '["Amazon","Google","Meta"]',
    estimated_time: 25, interview_frequency: 'Very High',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc", with the length of 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: 'The answer is "b", with the length of 1.' },
      { input: 's = "pwwkew"', output: '3', explanation: 'The answer is "wke", with the length of 3.' }
    ],
    templates: {
      javascript: 'function lengthOfLongestSubstring(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int lengthOfLongestSubstring(char* s) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["abcabcbb"]', expected: '3', hidden: false },
      { input: '["bbbbb"]', expected: '1', hidden: false },
      { input: '["pwwkew"]', expected: '3', hidden: false },
      { input: '[" "]', expected: '1', hidden: true }
    ]
  },
  {
    id: 25, slug: 'sort-colors', title: 'Sort Colors', difficulty: 'Medium', acceptance: 59.5,
    description: '<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong>in-place</strong> so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p><p>We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.</p>',
    input_format: 'An array of integers (0, 1, 2).',
    output_format: 'Sorted array in-place.',
    constraints: '["n == nums.length","1 <= n <= 300","nums[i] is either 0, 1, or 2."]',
    topics: '["Array","Two Pointers","Sorting"]', companies: '["Amazon","Microsoft"]',
    estimated_time: 20, interview_frequency: 'Medium',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]', explanation: '' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]', explanation: '' }
    ],
    templates: {
      javascript: 'function sortColors(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def sortColors(self, nums: list[int]) -> None:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public void sortColors(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'void sortColors(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[2,0,2,1,1,0]]', expected: '[0,0,1,1,2,2]', hidden: false },
      { input: '[[2,0,1]]', expected: '[0,1,2]', hidden: false }
    ]
  },
  {
    id: 26, slug: 'maximum-depth-of-binary-tree', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', acceptance: 73.5,
    description: '<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p><p>A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>',
    input_format: 'Root of a binary tree.',
    output_format: 'Maximum depth (integer).',
    constraints: '["The number of nodes is in range [0, 10^4]","-100 <= Node.val <= 100"]',
    topics: '["Tree","DFS","BFS","Binary Tree"]', companies: '["Amazon","Google"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3', explanation: '' },
      { input: 'root = [1,null,2]', output: '2', explanation: '' }
    ],
    templates: {
      javascript: 'function maxDepth(root) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int maxDepth(struct TreeNode* root) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[3,9,20,null,null,15,7]]', expected: '3', hidden: false },
      { input: '[[1,null,2]]', expected: '2', hidden: false },
      { input: '[[]]', expected: '0', hidden: true }
    ]
  },
  {
    id: 27, slug: 'same-tree', title: 'Same Tree', difficulty: 'Easy', acceptance: 57.8,
    description: '<p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p>',
    input_format: 'Roots of two binary trees.',
    output_format: 'A boolean.',
    constraints: '["The number of nodes in both trees is in range [0, 100]","-10^4 <= Node.val <= 10^4"]',
    topics: '["Tree","DFS","BFS","Binary Tree"]', companies: '["Amazon","Microsoft"]',
    estimated_time: 10, interview_frequency: 'Medium',
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true', explanation: '' },
      { input: 'p = [1,2], q = [1,null,2]', output: 'false', explanation: '' },
      { input: 'p = [1,2,1], q = [1,1,2]', output: 'false', explanation: '' }
    ],
    templates: {
      javascript: 'function isSameTree(p, q) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isSameTree(struct TreeNode* p, struct TreeNode* q) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,2,3],[1,2,3]]', expected: 'true', hidden: false },
      { input: '[[1,2],[1,null,2]]', expected: 'false', hidden: false }
    ]
  },
  {
    id: 28, slug: 'invert-binary-tree', title: 'Invert Binary Tree', difficulty: 'Easy', acceptance: 74.2,
    description: '<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>',
    input_format: 'Root of a binary tree.',
    output_format: 'Root of the inverted tree.',
    constraints: '["The number of nodes in the tree is in [0, 100]","-100 <= Node.val <= 100"]',
    topics: '["Tree","DFS","BFS","Binary Tree"]', companies: '["Google","Amazon"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]', explanation: '' },
      { input: 'root = [2,1,3]', output: '[2,3,1]', explanation: '' },
      { input: 'root = []', output: '[]', explanation: '' }
    ],
    templates: {
      javascript: 'function invertTree(root) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // Write your solution here\n        \n    }\n};',
      c: 'struct TreeNode* invertTree(struct TreeNode* root) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[4,2,7,1,3,6,9]]', expected: '[4,7,2,9,6,3,1]', hidden: false },
      { input: '[[2,1,3]]', expected: '[2,3,1]', hidden: false }
    ]
  },
  {
    id: 29, slug: 'lowest-common-ancestor-of-a-binary-search-tree', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', acceptance: 60.5,
    description: '<p>Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.</p><p>According to the definition of LCA on Wikipedia: The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in T that has both <code>p</code> and <code>q</code> as descendants (where we allow a node to be a descendant of itself).</p>',
    input_format: 'Root of BST, nodes p and q.',
    output_format: 'The LCA node.',
    constraints: '["All node values are unique.","p != q","p and q will exist in the BST."]',
    topics: '["Tree","DFS","Binary Search Tree","Binary Tree"]', companies: '["Amazon","Google"]',
    estimated_time: 15, interview_frequency: 'High',
    examples: [
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', output: '6', explanation: '' },
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', output: '2', explanation: '' }
    ],
    templates: {
      javascript: 'function lowestCommonAncestor(root, p, q) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        // Write your solution here\n        \n    }\n};',
      c: 'struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[6,2,8,0,4,7,9,null,null,3,5],2,8]', expected: '6', hidden: false },
      { input: '[[6,2,8,0,4,7,9,null,null,3,5],2,4]', expected: '2', hidden: false }
    ]
  },
  {
    id: 30, slug: 'missing-number', title: 'Missing Number', difficulty: 'Easy', acceptance: 64.5,
    description: '<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.</p>',
    input_format: 'An array of n distinct numbers in [0, n].',
    output_format: 'The missing number.',
    constraints: '["n == nums.length","1 <= n <= 10^4","0 <= nums[i] <= n","All the numbers of nums are unique."]',
    topics: '["Array","Hash Table","Math","Binary Search","Bit Manipulation","Sorting"]', companies: '["Amazon","Microsoft"]',
    estimated_time: 10, interview_frequency: 'High',
    examples: [
      { input: 'nums = [3,0,1]', output: '2', explanation: 'n = 3, so 3 is missing.' },
      { input: 'nums = [0,1]', output: '2', explanation: 'n = 2, so 2 is missing.' },
      { input: 'nums = [9,6,4,2,3,5,7,0,1]', output: '8', explanation: '' }
    ],
    templates: {
      javascript: 'function missingNumber(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int missingNumber(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[3,0,1]]', expected: '2', hidden: false },
      { input: '[[0,1]]', expected: '2', hidden: false },
      { input: '[[9,6,4,2,3,5,7,0,1]]', expected: '8', hidden: true }
    ]
  },
  {
    id: 31, slug: 'counting-bits', title: 'Counting Bits', difficulty: 'Easy', acceptance: 75.8,
    description: '<p>Given an integer <code>n</code>, return <em>an array</em> <code>ans</code> of length <code>n + 1</code> such that for each <code>i</code> (<strong>0 &lt;= i &lt;= n</strong>), <code>ans[i]</code> is the <strong>number of 1\'s</strong> in the binary representation of <code>i</code>.</p>',
    input_format: 'A non-negative integer.',
    output_format: 'An array of integers.',
    constraints: '["0 <= n <= 10^5"]',
    topics: '["Dynamic Programming","Bit Manipulation"]', companies: '["Amazon"]',
    estimated_time: 15, interview_frequency: 'Medium',
    examples: [
      { input: 'n = 2', output: '[0,1,1]', explanation: '0 --> 0, 1 --> 1, 2 --> 10' },
      { input: 'n = 5', output: '[0,1,1,2,1,2]', explanation: '' }
    ],
    templates: {
      javascript: 'function countBits(n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def countBits(self, n: int) -> list[int]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int[] countBits(int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    vector<int> countBits(int n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int* countBits(int n, int* returnSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[2]', expected: '[0,1,1]', hidden: false },
      { input: '[5]', expected: '[0,1,1,2,1,2]', hidden: false }
    ]
  },
  {
    id: 32, slug: 'happy-number', title: 'Happy Number', difficulty: 'Easy', acceptance: 54.8,
    description: '<p>Write an algorithm to determine if a number <code>n</code> is happy.</p><p>A <strong>happy number</strong> is a number defined by the following process:</p><ul><li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li><li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li></ul><p>Return <code>true</code> if <code>n</code> is a happy number, and <code>false</code> if not.</p>',
    input_format: 'A positive integer.',
    output_format: 'A boolean.',
    constraints: '["1 <= n <= 2^31 - 1"]',
    topics: '["Hash Table","Math","Two Pointers"]', companies: '["Amazon"]',
    estimated_time: 15, interview_frequency: 'Medium',
    examples: [
      { input: 'n = 19', output: 'true', explanation: '1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1' },
      { input: 'n = 2', output: 'false', explanation: '' }
    ],
    templates: {
      javascript: 'function isHappy(n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isHappy(self, n: int) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isHappy(int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isHappy(int n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isHappy(int n) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[19]', expected: 'true', hidden: false },
      { input: '[2]', expected: 'false', hidden: false }
    ]
  },
  {
    id: 33, slug: 'valid-palindrome-ii', title: 'Valid Palindrome II', difficulty: 'Easy', acceptance: 44.5,
    description: '<p>Given a string <code>s</code>, return <code>true</code> if the <code>s</code> can be palindrome after deleting <strong>at most one</strong> character from it.</p>',
    input_format: 'A string.',
    output_format: 'A boolean.',
    constraints: '["1 <= s.length <= 10^5","s consists of only lowercase English letters."]',
    topics: '["Two Pointers","String","Greedy"]', companies: '["Amazon"]',
    estimated_time: 15, interview_frequency: 'High',
    examples: [
      { input: 's = "aba"', output: 'true', explanation: '' },
      { input: 's = "abca"', output: 'true', explanation: 'Delete the character \'b\'.' }
    ],
    templates: {
      javascript: 'function validPalindrome(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean validPalindrome(String s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool validPalindrome(string s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool validPalindrome(char* s) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["aba"]', expected: 'true', hidden: false },
      { input: '["abca"]', expected: 'true', hidden: false },
      { input: '["abc"]', expected: 'false', hidden: true }
    ]
  },
  {
    id: 34, slug: 'squares-of-a-sorted-array', title: 'Squares of a Sorted Array', difficulty: 'Easy', acceptance: 71.5,
    description: '<p>Given an integer array <code>nums</code> sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.</p>',
    input_format: 'A sorted array of integers.',
    output_format: 'An array of squares sorted in non-decreasing order.',
    constraints: '["1 <= nums.length <= 10^4","-10^4 <= nums[i] <= 10^4","nums is sorted in non-decreasing order."]',
    topics: '["Array","Two Pointers","Sorting"]', companies: '["Amazon"]',
    estimated_time: 10, interview_frequency: 'Medium',
    examples: [
      { input: 'nums = [-4,-1,0,3,10]', output: '[0,1,9,16,100]', explanation: '' },
      { input: 'nums = [-7,-3,2,3,11]', output: '[4,9,9,49,121]', explanation: '' }
    ],
    templates: {
      javascript: 'function sortedSquares(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def sortedSquares(self, nums: list[int]) -> list[int]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int* sortedSquares(int* nums, int numsSize, int* returnSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[-4,-1,0,3,10]]', expected: '[0,1,9,16,100]', hidden: false },
      { input: '[[-7,-3,2,3,11]]', expected: '[4,9,9,49,121]', hidden: false }
    ]
  },
  {
    id: 35, slug: 'power-of-three', title: 'Power of Three', difficulty: 'Easy', acceptance: 48.2,
    description: '<p>Given an integer <code>n</code>, return <code>true</code> if it is a power of three. An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3<sup>x</sup></code>.</p>',
    input_format: 'An integer.',
    output_format: 'A boolean.',
    constraints: '["-2^31 <= n <= 2^31 - 1"]',
    topics: '["Math","Recursion"]', companies: '["Amazon"]',
    estimated_time: 10, interview_frequency: 'Low',
    examples: [
      { input: 'n = 27', output: 'true', explanation: '27 = 3^3' },
      { input: 'n = 0', output: 'false', explanation: '' },
      { input: 'n = 9', output: 'true', explanation: '9 = 3^2' }
    ],
    templates: {
      javascript: 'function isPowerOfThree(n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isPowerOfThree(self, n: int) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isPowerOfThree(int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isPowerOfThree(int n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isPowerOfThree(int n) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[27]', expected: 'true', hidden: false },
      { input: '[0]', expected: 'false', hidden: false },
      { input: '[9]', expected: 'true', hidden: false }
    ]
  },
  {
    id: 36, slug: 'number-of-1-bits', title: 'Number of 1 Bits', difficulty: 'Easy', acceptance: 68.2,
    description: '<p>Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the <a href="http://en.wikipedia.org/wiki/Hamming_weight" target="_blank">Hamming weight</a>).</p>',
    input_format: 'A 32-bit unsigned integer.',
    output_format: 'Number of 1 bits.',
    constraints: '["1 <= n <= 2^31 - 1"]',
    topics: '["Bit Manipulation","Dynamic Programming"]', companies: '["Amazon"]',
    estimated_time: 10, interview_frequency: 'Medium',
    examples: [
      { input: 'n = 11', output: '3', explanation: 'Input: 11 = 00000000000000000000000000001011, so 3 set bits.' },
      { input: 'n = 128', output: '1', explanation: 'Input: 128 = 00000000000000000000000010000000, so 1 set bit.' }
    ],
    templates: {
      javascript: 'function hammingWeight(n) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def hammingWeight(self, n: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int hammingWeight(int n) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int hammingWeight(uint32_t n) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[11]', expected: '3', hidden: false },
      { input: '[128]', expected: '1', hidden: false },
      { input: '[2147483645]', expected: '30', hidden: true }
    ]
  },
  {
    id: 37, slug: 'minimum-size-subarray-sum', title: 'Minimum Size Subarray Sum', difficulty: 'Medium', acceptance: 49.5,
    description: '<p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return the <em>minimal length</em> of a subarray whose sum is greater than or equal to <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p>',
    input_format: 'A target integer and an array of positive integers.',
    output_format: 'Minimal length of subarray.',
    constraints: '["1 <= target <= 10^9","1 <= nums.length <= 10^5","1 <= nums[i] <= 10^4"]',
    topics: '["Array","Binary Search","Sliding Window","Prefix Sum"]', companies: '["Amazon"]',
    estimated_time: 20, interview_frequency: 'Medium',
    examples: [
      { input: 'target = 7, nums = [2,3,1,2,4,3]', output: '2', explanation: 'The subarray [4,3] has minimal length 2 under the constraint.' },
      { input: 'target = 4, nums = [1,4,4]', output: '1', explanation: '' },
      { input: 'target = 11, nums = [1,1,1,1,1,1,1,1]', output: '0', explanation: '' }
    ],
    templates: {
      javascript: 'function minSubArrayLen(target, nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def minSubArrayLen(self, target: int, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int minSubArrayLen(int target, int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[7,[2,3,1,2,4,3]]', expected: '2', hidden: false },
      { input: '[4,[1,4,4]]', expected: '1', hidden: false },
      { input: '[11,[1,1,1,1,1,1,1,1]]', expected: '0', hidden: true }
    ]
  },
  {
    id: 38, slug: 'longest-increasing-subsequence', title: 'Longest Increasing Subsequence', difficulty: 'Medium', acceptance: 52.2,
    description: '<p>Given an integer array <code>nums</code>, return the length of the longest <strong>strictly increasing</strong> subsequence.</p>',
    input_format: 'An array of integers.',
    output_format: 'Length of LIS.',
    constraints: '["1 <= nums.length <= 2500","-10^4 <= nums[i] <= 10^4"]',
    topics: '["Array","Binary Search","Dynamic Programming"]', companies: '["Amazon","Google","Microsoft"]',
    estimated_time: 25, interview_frequency: 'Very High',
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: 'The LIS is [2,3,7,101] and its length is 4.' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4', explanation: '' },
      { input: 'nums = [7,7,7,7,7,7,7]', output: '1', explanation: '' }
    ],
    templates: {
      javascript: 'function lengthOfLIS(nums) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def lengthOfLIS(self, nums: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int lengthOfLIS(int* nums, int numsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[10,9,2,5,3,7,101,18]]', expected: '4', hidden: false },
      { input: '[[0,1,0,3,2,3]]', expected: '4', hidden: false },
      { input: '[[7,7,7,7,7,7,7]]', expected: '1', hidden: true }
    ]
  },
  {
    id: 39, slug: 'reverse-integer', title: 'Reverse Integer', difficulty: 'Medium', acceptance: 27.5,
    description: '<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code>0</code>.</p>',
    input_format: 'A signed 32-bit integer.',
    output_format: 'Reversed integer or 0.',
    constraints: '["-2^31 <= x <= 2^31 - 1"]',
    topics: '["Math"]', companies: '["Amazon","Microsoft"]',
    estimated_time: 15, interview_frequency: 'High',
    examples: [
      { input: 'x = 123', output: '321', explanation: '' },
      { input: 'x = -123', output: '-321', explanation: '' },
      { input: 'x = 120', output: '21', explanation: '' }
    ],
    templates: {
      javascript: 'function reverse(x) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def reverse(self, x: int) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int reverse(int x) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int reverse(int x) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int reverse(int x) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[123]', expected: '321', hidden: false },
      { input: '[-123]', expected: '-321', hidden: false },
      { input: '[120]', expected: '21', hidden: false }
    ]
  },
  {
    id: 40, slug: 'median-of-two-sorted-arrays', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 35.8,
    description: '<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p><p>The overall run time complexity should be O(log (m+n)).</p>',
    constraints: '["nums1.length == m","nums2.length == n","0 <= m <= 1000","0 <= n <= 1000","1 <= m + n <= 2000","-10^6 <= nums1[i], nums2[i] <= 10^6"]',
    topics: '["Array","Binary Search","Divide and Conquer"]', companies: '["Google","Amazon","Microsoft","Apple"]',
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0', explanation: 'merged array = [1,2,3] and median is 2.' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5', explanation: 'merged array = [1,2,3,4] and median is (2+3)/2 = 2.5.' }
    ],
    templates: {
      javascript: 'function findMedianSortedArrays(nums1, nums2) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your solution here\n        \n    }\n};',
      c: 'double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,3],[2]]', expected: '2.0', hidden: false },
      { input: '[[1,2],[3,4]]', expected: '2.5', hidden: false },
      { input: '[[0,0],[0,0]]', expected: '0.0', hidden: true },
      { input: '[[],[1]]', expected: '1.0', hidden: true }
    ]
  },
  {
    id: 41, slug: 'regular-expression-matching', title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 28.5,
    description: '<p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>\'.\'</code> and <code>\'*\'</code> where:</p><ul><li><code>\'\'.\'</code> matches any single character.</li><li><code>\'*\'</code> matches zero or more of the preceding element.</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p>',
    constraints: '["1 <= s.length <= 20","1 <= p.length <= 20","s contains only lowercase English letters.","p contains only lowercase English letters, \'.\', and \'*\'.","It is guaranteed for each appearance of the character \'*\', there will be a previous valid character to match."]',
    topics: '["String","Dynamic Programming","Recursion"]', companies: '["Google","Amazon","Meta","Microsoft"]',
    examples: [
      { input: 's = "aa", p = "a"', output: 'false', explanation: '"a" does not match the entire string "aa".' },
      { input: 's = "aa", p = "a*"', output: 'true', explanation: '"*" means zero or more of the preceding element "a".' },
      { input: 's = "ab", p = ".*"', output: 'true', explanation: '".*" means "zero or more of any element".' }
    ],
    templates: {
      javascript: 'function isMatch(s, p) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        // Write your solution here\n        \n    }\n};',
      c: 'bool isMatch(char* s, char* p) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["aa","a"]', expected: 'false', hidden: false },
      { input: '["aa","a*"]', expected: 'true', hidden: false },
      { input: '["ab",".*"]', expected: 'true', hidden: false },
      { input: '["mississippi","mis*is*p*."]', expected: 'false', hidden: true }
    ]
  },
  {
    id: 42, slug: 'merge-k-sorted-lists', title: 'Merge k Sorted Lists', difficulty: 'Hard', acceptance: 48.2,
    description: '<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p><p>Merge all the linked-lists into one sorted linked-list and return it.</p>',
    constraints: '["k == lists.length","0 <= k <= 10^4","0 <= lists[i].length <= 500","-10^4 <= lists[i][j] <= 10^4","lists[i] is sorted in ascending order.","The total number of nodes across all lists will not exceed 10^4."]',
    topics: '["Linked List","Heap (Priority Queue)","Divide and Conquer"]', companies: '["Amazon","Google","Meta","Microsoft"]',
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]', explanation: '' },
      { input: 'lists = []', output: '[]', explanation: '' },
      { input: 'lists = [[]]', output: '[]', explanation: '' }
    ],
    templates: {
      javascript: 'function mergeKLists(lists) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def mergeKLists(self, lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        // Write your solution here\n        \n    }\n};',
      c: 'struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[1,4,5],[1,3,4],[2,6]]', expected: '[1,1,2,3,4,4,5,6]', hidden: false },
      { input: '[[]]', expected: '[]', hidden: false },
      { input: '[[1]]', expected: '[1]', hidden: true }
    ]
  },
  {
    id: 43, slug: 'trapping-rain-water', title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 58.5,
    description: '<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>',
    constraints: '["n == height.length","1 <= n <= 2 * 10^4","0 <= height[i] <= 10^5"]',
    topics: '["Array","Two Pointers","Stack","Dynamic Programming"]', companies: '["Amazon","Google","Goldman Sachs","Microsoft"]',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '' },
      { input: 'height = [4,2,0,3,2,5]', output: '9', explanation: '' }
    ],
    templates: {
      javascript: 'function trap(height) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def trap(self, height: list[int]) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int trap(int* height, int heightSize) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '[[0,1,0,2,1,0,1,3,2,1,2,1]]', expected: '6', hidden: false },
      { input: '[[4,2,0,3,2,5]]', expected: '9', hidden: false },
      { input: '[[1,0,1]]', expected: '1', hidden: true }
    ]
  },
  {
    id: 44, slug: 'edit-distance', title: 'Edit Distance', difficulty: 'Hard', acceptance: 52.3,
    description: '<p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em>.</p><p>You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.</p>',
    constraints: '["0 <= word1.length, word2.length <= 500","word1 and word2 consist of only lowercase English letters."]',
    topics: '["String","Dynamic Programming"]', companies: '["Google","Amazon","Microsoft","Meta"]',
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3', explanation: 'horse -> rorse (replace h with r) -> rose (remove r) -> ros (remove e)' },
      { input: 'word1 = "intention", word2 = "execution"', output: '5', explanation: '' }
    ],
    templates: {
      javascript: 'function minDistance(word1, word2) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int minDistance(char* word1, char* word2) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["horse","ros"]', expected: '3', hidden: false },
      { input: '["intention","execution"]', expected: '5', hidden: false },
      { input: '["","a"]', expected: '1', hidden: true }
    ]
  },
  {
    id: 45, slug: 'longest-valid-parentheses', title: 'Longest Valid Parentheses', difficulty: 'Hard', acceptance: 33.2,
    description: '<p>Given a string containing just the characters <code>\'(\'</code> and <code>\')\'</code>, find the length of the longest valid (well-formed) parentheses substring.</p>',
    constraints: '["0 <= s.length <= 3 * 10^4","s[i] is \'(\' or \')\'."]',
    topics: '["String","Dynamic Programming","Stack"]', companies: '["Amazon","Google","Meta"]',
    examples: [
      { input: 's = "(()"', output: '2', explanation: 'The longest valid parentheses substring is "()".' },
      { input: 's = ")()())"', output: '4', explanation: 'The longest valid parentheses substring is "()()".' },
      { input: 's = ""', output: '0', explanation: '' }
    ],
    templates: {
      javascript: 'function longestValidParentheses(s) {\n    // Write your solution here\n}',
      python: 'class Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        # Write your solution here\n        pass',
      java: 'class Solution {\n    public int longestValidParentheses(String s) {\n        // Write your solution here\n        \n    }\n}',
      cpp: 'class Solution {\npublic:\n    int longestValidParentheses(string s) {\n        // Write your solution here\n        \n    }\n};',
      c: 'int longestValidParentheses(char* s) {\n    // Write your solution here\n    \n}'
    },
    testCases: [
      { input: '["(()"]', expected: '2', hidden: false },
      { input: '["()()"]', expected: '4', hidden: false },
      { input: '[""]', expected: '0', hidden: false },
      { input: '["()(())"]', expected: '6', hidden: true }
    ]
  }
];

const contestsData = [
  {
    title: 'Weekly Contest 350',
    description: 'Weekly coding contest with 4 problems.',
    start_time: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    duration_minutes: 90,
    status: 'upcoming',
    participants: 0
  },
  {
    title: 'Biweekly Contest 120',
    description: 'Biweekly coding contest with 4 problems.',
    start_time: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    duration_minutes: 90,
    status: 'upcoming',
    participants: 0
  },
  {
    title: 'Weekly Contest 349',
    description: 'Weekly coding contest with 4 problems.',
    start_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    duration_minutes: 90,
    status: 'ended',
    participants: 150
  }
];

const insertProblemSql = `
  INSERT INTO problems (id, title, slug, description, difficulty, acceptance, tags, topics, companies, examples, constraints, follow_up, hints, templates, starter_code, test_cases, visible_test_cases, created_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
`;

const insertContestSql = `
  INSERT INTO contests (id, title, description, start_time, duration_minutes, status, participants, created_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
`;

function seedDatabase() {
  const existingProblems = getOne('SELECT id FROM problems LIMIT 1');
  if (existingProblems) {
    console.log('Database already seeded.');
    return;
  }

  console.log('Seeding database...');

  for (const p of problemsData) {
    runInsert(insertProblemSql, [
      p.id,
      p.title,
      p.slug,
      p.description,
      p.difficulty,
      p.acceptance,
      p.tags || null,
      p.topics,
      p.companies,
      JSON.stringify(p.examples),
      p.constraints,
      p.follow_up || null,
      p.hints ? JSON.stringify(p.hints) : null,
      JSON.stringify(p.templates),
      p.starter_code || null,
      JSON.stringify(p.testCases),
      JSON.stringify(p.testCases.filter(tc => !tc.hidden)),
    ]);
  }

  for (const c of contestsData) {
    runInsert(insertContestSql, [
      null,
      c.title,
      c.description,
      c.start_time,
      c.duration_minutes,
      c.status,
      c.participants,
    ]);
  }

  saveDatabase();
  console.log(`Seeded ${problemsData.length} problems and ${contestsData.length} contests.`);
}

if (require.main === module) {
  const { initDatabase } = require('./database');
  initDatabase().then(() => {
    seedDatabase();
    process.exit(0);
  });
}

module.exports = { seedDatabase };
