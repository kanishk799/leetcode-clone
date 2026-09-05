const problems = [
    // ==================== ARRAYS ====================
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        acceptance: "49.2%",
        category: "Array",
        description: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>`,
        examples: [
            { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
            { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
        ],
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
        templates: {
            javascript: `function twoSum(nums, target) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def twoSum(self, nums, target):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[2,7,11,15], 9], expected: [0,1] },
            { input: [[3,2,4], 6], expected: [1,2] }
        ]
    },
    {
        id: 2,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        acceptance: "54.2%",
        category: "Array",
        description: `<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>`,
        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5" },
            { input: "prices = [7,6,4,3,1]", output: "0" }
        ],
        constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
        templates: {
            javascript: `function maxProfit(prices) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def maxProfit(self, prices):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[7,1,5,3,6,4]], expected: 5 },
            { input: [[7,6,4,3,1]], expected: 0 }
        ]
    },
    {
        id: 3,
        title: "Contains Duplicate",
        difficulty: "Easy",
        acceptance: "61.2%",
        category: "Array",
        description: `<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>`,
        examples: [
            { input: "nums = [1,2,3,1]", output: "true" },
            { input: "nums = [1,2,3,4]", output: "false" }
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
        templates: {
            javascript: `function containsDuplicate(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def containsDuplicate(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3,1]], expected: true },
            { input: [[1,2,3,4]], expected: false }
        ]
    },
    {
        id: 4,
        title: "Maximum Subarray",
        difficulty: "Medium",
        acceptance: "50.1%",
        category: "Array",
        description: `<p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.</p>`,
        examples: [
            { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "[4,-1,2,1] has the largest sum 6" },
            { input: "nums = [1]", output: "1" }
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
        templates: {
            javascript: `function maxSubArray(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def maxSubArray(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
            { input: [[1]], expected: 1 }
        ]
    },
    {
        id: 5,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        acceptance: "49.8%",
        category: "Array",
        description: `<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in non-decreasing order, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively. Merge <code>nums1</code> and <code>nums2</code> into a single array sorted in non-decreasing order.</p>`,
        examples: [
            { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }
        ],
        constraints: ["nums1.length == m + n", "nums2.length == n"],
        templates: {
            javascript: `function merge(nums1, m, nums2, n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def merge(self, nums1, m, nums2, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3,0,0,0], 3, [2,5,6], 3], expected: [1,2,2,3,5,6] }
        ]
    },
    {
        id: 6,
        title: "Move Zeroes",
        difficulty: "Easy",
        acceptance: "61.0%",
        category: "Array",
        description: `<p>Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.</p>`,
        examples: [
            { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }
        ],
        constraints: ["1 <= nums.length <= 10^4"],
        templates: {
            javascript: `function moveZeroes(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def moveZeroes(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[0,1,0,3,12]], expected: [1,3,12,0,0] }
        ]
    },
    {
        id: 7,
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        acceptance: "68.5%",
        category: "Array",
        description: `<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must be unique.</p>`,
        examples: [
            { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
            { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output: "[4,9]" }
        ],
        constraints: ["1 <= nums1.length, nums2.length <= 1000"],
        templates: {
            javascript: `function intersection(nums1, nums2) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def intersection(self, nums1, nums2):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,2,1], [2,2]], expected: [2] },
            { input: [[4,9,5], [9,4,9,8,4]], expected: [4,9] }
        ]
    },
    {
        id: 8,
        title: "Plus One",
        difficulty: "Easy",
        acceptance: "43.7%",
        category: "Array",
        description: `<p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. Increment the large integer by one and return <em>the resulting array of digits</em>.</p>`,
        examples: [
            { input: "digits = [1,2,3]", output: "[1,2,4]" },
            { input: "digits = [4,3,2,1]", output: "[4,3,2,2]" },
            { input: "digits = [9]", output: "[1,0]" }
        ],
        constraints: ["1 <= digits.length <= 100", "0 <= digits[i] <= 9"],
        templates: {
            javascript: `function plusOne(digits) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def plusOne(self, digits):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3]], expected: [1,2,4] },
            { input: [[9]], expected: [1,0] }
        ]
    },
    {
        id: 9,
        title: "Single Number",
        difficulty: "Easy",
        acceptance: "67.5%",
        category: "Array",
        description: `<p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears twice except for one. Find that single one.</p>`,
        examples: [
            { input: "nums = [2,2,1]", output: "1" },
            { input: "nums = [4,1,2,1,2]", output: "4" }
        ],
        constraints: ["1 <= nums.length <= 3 * 10^4"],
        templates: {
            javascript: `function singleNumber(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def singleNumber(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[2,2,1]], expected: 1 },
            { input: [[4,1,2,1,2]], expected: 4 }
        ]
    },
    {
        id: 10,
        title: "Majority Element",
        difficulty: "Easy",
        acceptance: "63.8%",
        category: "Array",
        description: `<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>. The majority element is the element that appears more than <code>⌊n / 2⌋</code> times.</p>`,
        examples: [
            { input: "nums = [3,2,3]", output: "3" },
            { input: "nums = [2,2,1,1,1,2,2]", output: "2" }
        ],
        constraints: ["n == nums.length", "1 <= n <= 5 * 10^4"],
        templates: {
            javascript: `function majorityElement(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def majorityElement(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,2,3]], expected: 3 },
            { input: [[2,2,1,1,1,2,2]], expected: 2 }
        ]
    },

    // ==================== STRINGS ====================
    {
        id: 11,
        title: "Reverse String",
        difficulty: "Easy",
        acceptance: "77.5%",
        category: "String",
        description: `<p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p>`,
        examples: [
            { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
            { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' }
        ],
        constraints: ["1 <= s.length <= 10^5"],
        templates: {
            javascript: `function reverseString(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def reverseString(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public void reverseString(char[] s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"] }
        ]
    },
    {
        id: 12,
        title: "Valid Anagram",
        difficulty: "Easy",
        acceptance: "58.3%",
        category: "String",
        description: `<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>`,
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" }
        ],
        constraints: ["1 <= s.length, t.length <= 5 * 10^4"],
        templates: {
            javascript: `function isAnagram(s, t) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isAnagram(self, s, t):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["anagram", "nagaram"], expected: true },
            { input: ["rat", "car"], expected: false }
        ]
    },
    {
        id: 13,
        title: "Valid Palindrome",
        difficulty: "Easy",
        acceptance: "46.5%",
        category: "String",
        description: `<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.</p>`,
        examples: [
            { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
            { input: 's = "race a car"', output: "false" }
        ],
        constraints: ["1 <= s.length <= 2 * 10^5"],
        templates: {
            javascript: `function isPalindrome(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isPalindrome(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["A man, a plan, a canal: Panama"], expected: true },
            { input: ["race a car"], expected: false }
        ]
    },
    {
        id: 14,
        title: "First Unique Character in a String",
        difficulty: "Easy",
        acceptance: "58.2%",
        category: "String",
        description: `<p>Given a string <code>s</code>, find the first non-repeating character in it and return its index. If it does not exist, return <code>-1</code>.</p>`,
        examples: [
            { input: 's = "leetcode"', output: "0" },
            { input: 's = "loveleetcode"', output: "2" }
        ],
        constraints: ["1 <= s.length <= 10^5"],
        templates: {
            javascript: `function firstUniqChar(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def firstUniqChar(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int firstUniqChar(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int firstUniqChar(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["leetcode"], expected: 0 },
            { input: ["loveleetcode"], expected: 2 }
        ]
    },
    {
        id: 15,
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        acceptance: "18.3%",
        category: "String",
        description: `<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.</p>`,
        examples: [
            { input: 's = "42"', output: "42" },
            { input: 's = "   -42"', output: "-42" }
        ],
        constraints: ["0 <= s.length <= 200"],
        templates: {
            javascript: `function myAtoi(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def myAtoi(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int myAtoi(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int myAtoi(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["42"], expected: 42 },
            { input: ["   -42"], expected: -42 }
        ]
    },

    // ==================== LINKED LIST ====================
    {
        id: 16,
        title: "Reverse Linked List",
        difficulty: "Easy",
        acceptance: "72.8%",
        category: "Linked List",
        description: `<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>`,
        examples: [
            { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" },
            { input: "head = [1,2]", output: "[2,1]" }
        ],
        constraints: ["The number of nodes is in range [0, 5000]"],
        templates: {
            javascript: `function reverseList(head) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def reverseList(self, head):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3,4,5]], expected: [5,4,3,2,1] },
            { input: [[1,2]], expected: [2,1] }
        ]
    },
    {
        id: 17,
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        acceptance: "61.8%",
        category: "Linked List",
        description: `<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>. Merge the two lists into one <strong>sorted</strong> list.</p>`,
        examples: [
            { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }
        ],
        constraints: ["The number of nodes in both lists is in [0, 50]"],
        templates: {
            javascript: `function mergeTwoLists(list1, list2) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def mergeTwoLists(self, list1, list2):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] }
        ]
    },
    {
        id: 18,
        title: "Linked List Cycle",
        difficulty: "Easy",
        acceptance: "47.8%",
        category: "Linked List",
        description: `<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>`,
        examples: [
            { input: "head = [3,2,0,-4], pos = 1", output: "true" },
            { input: "head = [1], pos = -1", output: "false" }
        ],
        constraints: ["The number of nodes is in range [0, 10^4]"],
        templates: {
            javascript: `function hasCycle(head) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def hasCycle(self, head):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean hasCycle(ListNode head) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,2,0,-4], 1], expected: true },
            { input: [[1], -1], expected: false }
        ]
    },
    {
        id: 19,
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        acceptance: "42.5%",
        category: "Linked List",
        description: `<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>`,
        examples: [
            { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
            { input: "head = [1], n = 1", output: "[]" }
        ],
        constraints: ["The number of nodes is in range [1, 30]"],
        templates: {
            javascript: `function removeNthFromEnd(head, n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def removeNthFromEnd(self, head, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3,4,5], 2], expected: [1,2,3,5] },
            { input: [[1], 1], expected: [] }
        ]
    },
    {
        id: 20,
        title: "Add Two Numbers",
        difficulty: "Medium",
        acceptance: "40.7%",
        category: "Linked List",
        description: `<p>You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.</p>`,
        examples: [
            { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" }
        ],
        constraints: ["Each node contains a single digit"],
        templates: {
            javascript: `function addTwoNumbers(l1, l2) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def addTwoNumbers(self, l1, l2):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[2,4,3], [5,6,4]], expected: [7,0,8] }
        ]
    },

    // ==================== STACK & QUEUE ====================
    {
        id: 21,
        title: "Valid Parentheses",
        difficulty: "Easy",
        acceptance: "40.8%",
        category: "Stack",
        description: `<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>`,
        examples: [
            { input: 's = "()"', output: "true" },
            { input: 's = "()[]{}"', output: "true" },
            { input: 's = "(]"', output: "false" }
        ],
        constraints: ["1 <= s.length <= 10^4"],
        templates: {
            javascript: `function isValid(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isValid(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isValid(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["()"], expected: true },
            { input: ["()[]{}"], expected: true },
            { input: ["(]"], expected: false }
        ]
    },
    {
        id: 22,
        title: "Min Stack",
        difficulty: "Medium",
        acceptance: "51.2%",
        category: "Stack",
        description: `<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>`,
        examples: [
            { input: "MinStack stack = new MinStack(); stack.push(-2); stack.push(0); stack.push(-3); stack.getMin(); // returns -3", output: "-3" }
        ],
        constraints: ["Methods pop, top and getMin operations will always be called on non-empty stacks"],
        templates: {
            javascript: `class MinStack {\n    constructor() {\n        // Initialize your data structure here\n    }\n    \n    push(val) {\n        // Push element onto stack\n    }\n    \n    pop() {\n        // Remove the element on top\n    }\n    \n    top() {\n        // Get the top element\n    }\n    \n    getMin() {\n        // Retrieve the minimum element\n    }\n}`,
            python: `class MinStack:\n    def __init__(self):\n        # Initialize your data structure here\n        pass\n    \n    def push(self, val):\n        # Push element onto stack\n        pass\n    \n    def pop(self):\n        # Remove the element on top\n        pass\n    \n    def top(self):\n        # Get the top element\n        pass\n    \n    def getMin(self):\n        # Retrieve the minimum element\n        pass`,
            java: `class MinStack {\n    public MinStack() {\n        // Initialize your data structure here\n    }\n    \n    public void push(int val) {\n        // Push element onto stack\n    }\n    \n    public void pop() {\n        // Remove the element on top\n    }\n    \n    public int top() {\n        // Get the top element\n    }\n    \n    public int getMin() {\n        // Retrieve the minimum element\n    }\n}`,
            cpp: `class MinStack {\npublic:\n    MinStack() {\n        // Initialize your data structure here\n    }\n    \n    void push(int val) {\n        // Push element onto stack\n    }\n    \n    void pop() {\n        // Remove the element on top\n    }\n    \n    int top() {\n        // Get the top element\n    }\n    \n    int getMin() {\n        // Retrieve the minimum element\n    }\n};`
        },
        testCases: [
            { input: [["push","push","push","getMin","pop","top","getMin"]], expected: [null,null,null,-2,null,0,-2] }
        ]
    },
    {
        id: 23,
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        acceptance: "64.5%",
        category: "Stack",
        description: `<p>Implement a first in first out (FIFO) queue using only two stacks.</p>`,
        examples: [
            { input: "MyQueue queue = new MyQueue(); queue.push(1); queue.push(2); queue.peek(); // returns 1", output: "1" }
        ],
        constraints: ["All the calls to push and pop are valid"],
        templates: {
            javascript: `class MyQueue {\n    constructor() {\n        // Initialize your data structure here\n    }\n    \n    push(x) {\n        // Push element x to the back of queue\n    }\n    \n    pop() {\n        // Removes the element from the front of queue\n    }\n    \n    peek() {\n        // Get the front element\n    }\n    \n    empty() {\n        // Returns whether the queue is empty\n    }\n}`,
            python: `class MyQueue:\n    def __init__(self):\n        # Initialize your data structure here\n        pass\n    \n    def push(self, x):\n        # Push element x to the back of queue\n        pass\n    \n    def pop(self):\n        # Removes the element from the front of queue\n        pass\n    \n    def peek(self):\n        # Get the front element\n        pass\n    \n    def empty(self):\n        # Returns whether the queue is empty\n        pass`,
            java: `class MyQueue {\n    public MyQueue() {\n        // Initialize your data structure here\n    }\n    \n    public void push(int x) {\n        // Push element x to the back of queue\n    }\n    \n    public int pop() {\n        // Removes the element from the front of queue\n    }\n    \n    public int peek() {\n        // Get the front element\n    }\n    \n    public boolean empty() {\n        // Returns whether the queue is empty\n    }\n}`,
            cpp: `class MyQueue {\npublic:\n    MyQueue() {\n        // Initialize your data structure here\n    }\n    \n    void push(int x) {\n        // Push element x to the back of queue\n    }\n    \n    int pop() {\n        // Removes the element from the front of queue\n    }\n    \n    int peek() {\n        // Get the front element\n    }\n    \n    bool empty() {\n        // Returns whether the queue is empty\n    }\n};`
        },
        testCases: [
            { input: [["push","push","peek","pop","empty"]], expected: [null,null,1,1,false] }
        ]
    },

    // ==================== BINARY SEARCH ====================
    {
        id: 24,
        title: "Binary Search",
        difficulty: "Easy",
        acceptance: "55.8%",
        category: "Binary Search",
        description: `<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>`,
        examples: [
            { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
            { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" }
        ],
        constraints: ["1 <= nums.length <= 10^4"],
        templates: {
            javascript: `function search(nums, target) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def search(self, nums, target):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[-1,0,3,5,9,12], 9], expected: 4 },
            { input: [[-1,0,3,5,9,12], 2], expected: -1 }
        ]
    },
    {
        id: 25,
        title: "Search Insert Position",
        difficulty: "Easy",
        acceptance: "48.2%",
        category: "Binary Search",
        description: `<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>`,
        examples: [
            { input: "nums = [1,3,5,6], target = 5", output: "2" },
            { input: "nums = [1,3,5,6], target = 2", output: "1" },
            { input: "nums = [1,3,5,6], target = 7", output: "4" }
        ],
        constraints: ["1 <= nums.length <= 10^4"],
        templates: {
            javascript: `function searchInsert(nums, target) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def searchInsert(self, nums, target):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,3,5,6], 5], expected: 2 },
            { input: [[1,3,5,6], 2], expected: 1 }
        ]
    },
    {
        id: 26,
        title: "First Bad Version",
        difficulty: "Easy",
        acceptance: "42.8%",
        category: "Binary Search",
        description: `<p>You are a product manager and currently leading a team to develop a new product. You have <code>n</code> versions from <code>1</code> to <code>n</code> and you want to find out the first bad one.</p>`,
        examples: [
            { input: "n = 5, bad = 4", output: "4" }
        ],
        constraints: ["1 <= bad <= n <= 2^31 - 1"],
        templates: {
            javascript: `function firstBadVersion(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def firstBadVersion(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int firstBadVersion(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int firstBadVersion(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [5], expected: 4 }
        ]
    },

    // ==================== TREES ====================
    {
        id: 27,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        acceptance: "73.5%",
        category: "Tree",
        description: `<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>`,
        examples: [
            { input: "root = [3,9,20,null,null,15,7]", output: "3" }
        ],
        constraints: ["The number of nodes is in range [0, 10^4]"],
        templates: {
            javascript: `function maxDepth(root) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def maxDepth(self, root):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,9,20,null,null,15,7]], expected: 3 }
        ]
    },
    {
        id: 28,
        title: "Same Tree",
        difficulty: "Easy",
        acceptance: "57.8%",
        category: "Tree",
        description: `<p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p>`,
        examples: [
            { input: "p = [1,2,3], q = [1,2,3]", output: "true" },
            { input: "p = [1,2], q = [1,null,2]", output: "false" }
        ],
        constraints: ["The number of nodes in both trees is in range [0, 100]"],
        templates: {
            javascript: `function isSameTree(p, q) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isSameTree(self, p, q):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3], [1,2,3]], expected: true },
            { input: [[1,2], [1,null,2]], expected: false }
        ]
    },
    {
        id: 29,
        title: "Invert Binary Tree",
        difficulty: "Easy",
        acceptance: "74.2%",
        category: "Tree",
        description: `<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>`,
        examples: [
            { input: "root = [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }
        ],
        constraints: ["The number of nodes is in range [0, 100]"],
        templates: {
            javascript: `function invertTree(root) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def invertTree(self, root):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[4,2,7,1,3,6,9]], expected: [4,7,2,9,6,3,1] }
        ]
    },
    {
        id: 30,
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        acceptance: "47.8%",
        category: "Tree",
        description: `<p>Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return <code>true</code> if there is a subtree of <code>root</code> with the same structure and node values of <code>subRoot</code>.</p>`,
        examples: [
            { input: "root = [3,4,5,1,2], subRoot = [4,1,2]", output: "true" }
        ],
        constraints: ["1 <= root.length <= 2000"],
        templates: {
            javascript: `function isSubtree(root, subRoot) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isSubtree(self, root, subRoot):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isSubtree(TreeNode root, TreeNode subRoot) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isSubtree(TreeNode* root, TreeNode* subRoot) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,4,5,1,2], [4,1,2]], expected: true }
        ]
    },
    {
        id: 31,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Medium",
        acceptance: "60.5%",
        category: "Tree",
        description: `<p>Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.</p>`,
        examples: [
            { input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", output: "6" }
        ],
        constraints: ["All node values are unique"],
        templates: {
            javascript: `function lowestCommonAncestor(root, p, q) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[6,2,8,0,4,7,9,null,null,3,5], 2, 8], expected: 6 }
        ]
    },

    // ==================== SORTING ====================
    {
        id: 32,
        title: "Merge Intervals",
        difficulty: "Medium",
        acceptance: "46.2%",
        category: "Sorting",
        description: `<p>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals.</p>`,
        examples: [
            { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
        ],
        constraints: ["1 <= intervals.length <= 10^4"],
        templates: {
            javascript: `function merge(intervals) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def merge(self, intervals):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[[1,3],[2,6],[8,10],[15,18]]], expected: [[1,6],[8,10],[15,18]] }
        ]
    },
    {
        id: 33,
        title: "Sort Colors",
        difficulty: "Medium",
        acceptance: "59.5%",
        category: "Sorting",
        description: `<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong>in-place</strong> so that objects of the same color are adjacent.</p>`,
        examples: [
            { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }
        ],
        constraints: ["1 <= n <= 300"],
        templates: {
            javascript: `function sortColors(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def sortColors(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public void sortColors(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[2,0,2,1,1,0]], expected: [0,0,1,1,2,2] }
        ]
    },

    // ==================== DYNAMIC PROGRAMMING ====================
    {
        id: 34,
        title: "Climbing Stairs",
        difficulty: "Easy",
        acceptance: "51.5%",
        category: "Dynamic Programming",
        description: `<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>`,
        examples: [
            { input: "n = 2", output: "2" },
            { input: "n = 3", output: "3" }
        ],
        constraints: ["1 <= n <= 45"],
        templates: {
            javascript: `function climbStairs(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def climbStairs(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int climbStairs(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int climbStairs(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [2], expected: 2 },
            { input: [3], expected: 3 }
        ]
    },
    {
        id: 35,
        title: "House Robber",
        difficulty: "Medium",
        acceptance: "49.8%",
        category: "Dynamic Programming",
        description: `<p>You are a robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you from robbing each of them is that adjacent houses have security systems connected.</p>`,
        examples: [
            { input: "nums = [1,2,3,1]", output: "4", explanation: "Rob house 1 (money = 1) and house 3 (money = 3)" },
            { input: "nums = [2,7,9,3,1]", output: "12" }
        ],
        constraints: ["1 <= nums.length <= 100"],
        templates: {
            javascript: `function rob(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def rob(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int rob(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,3,1]], expected: 4 },
            { input: [[2,7,9,3,1]], expected: 12 }
        ]
    },
    {
        id: 36,
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        acceptance: "52.2%",
        category: "Dynamic Programming",
        description: `<p>Given an integer array <code>nums</code>, return the length of the longest <strong>strictly increasing</strong> subsequence.</p>`,
        examples: [
            { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The LIS is [2,3,7,101]" }
        ],
        constraints: ["1 <= nums.length <= 2500"],
        templates: {
            javascript: `function lengthOfLIS(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def lengthOfLIS(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[10,9,2,5,3,7,101,18]], expected: 4 }
        ]
    },
    {
        id: 37,
        title: "Coin Change",
        difficulty: "Medium",
        acceptance: "40.5%",
        category: "Dynamic Programming",
        description: `<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money. Return the fewest number of coins that you need to make up that amount.</p>`,
        examples: [
            { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
            { input: "coins = [2], amount = 3", output: "-1" }
        ],
        constraints: ["1 <= coins.length <= 12"],
        templates: {
            javascript: `function coinChange(coins, amount) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def coinChange(self, coins, amount):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,2,5], 11], expected: 3 },
            { input: [[2], 3], expected: -1 }
        ]
    },
    {
        id: 38,
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        acceptance: "57.8%",
        category: "Dynamic Programming",
        description: `<p>Given two strings <code>text1</code> and <code>text2</code>, return the length of their longest common subsequence.</p>`,
        examples: [
            { input: 'text1 = "abcde", text2 = "ace"', output: "3", explanation: "The longest common subsequence is 'ace'" }
        ],
        constraints: ["1 <= text1.length, text2.length <= 1000"],
        templates: {
            javascript: `function longestCommonSubsequence(text1, text2) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def longestCommonSubsequence(self, text1, text2):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["abcde", "ace"], expected: 3 }
        ]
    },
    {
        id: 39,
        title: "Unique Paths",
        difficulty: "Medium",
        acceptance: "62.5%",
        category: "Dynamic Programming",
        description: `<p>A robot is located at the top-left corner of a <code>m x n</code> grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?</p>`,
        examples: [
            { input: "m = 3, n = 7", output: "28" },
            { input: "m = 3, n = 2", output: "3" }
        ],
        constraints: ["1 <= m, n <= 100"],
        templates: {
            javascript: `function uniquePaths(m, n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def uniquePaths(self, m, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [3, 7], expected: 28 },
            { input: [3, 2], expected: 3 }
        ]
    },

    // ==================== GRAPH ====================
    {
        id: 40,
        title: "Number of Islands",
        difficulty: "Medium",
        acceptance: "57.2%",
        category: "Graph",
        description: `<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>`,
        examples: [
            { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1" }
        ],
        constraints: ["m == grid.length", "n == grid[i].length"],
        templates: {
            javascript: `function numIslands(grid) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def numIslands(self, grid):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected: 1 }
        ]
    },
    {
        id: 41,
        title: "Flood Fill",
        difficulty: "Easy",
        acceptance: "61.8%",
        category: "Graph",
        description: `<p>An image is represented by an <code>m x n</code> integer grid <code>image</code> where <code>image[i][j]</code> represents the pixel value of the image. Perform a flood fill on the image starting from the pixel <code>image[sr][sc]</code>.</p>`,
        examples: [
            { input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2", output: [[2,2,2],[2,2,0],[2,0,1]] }
        ],
        constraints: ["1 <= m, n <= 50"],
        templates: {
            javascript: `function floodFill(image, sr, sc, newColor) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def floodFill(self, image, sr, sc, newColor):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2], expected: [[2,2,2],[2,2,0],[2,0,1]] }
        ]
    },
    {
        id: 42,
        title: "Clone Graph",
        difficulty: "Medium",
        acceptance: "58.5%",
        category: "Graph",
        description: `<p>Given a reference of a node in a <strong>connected undirected graph</strong>, return a <strong>deep copy</strong> of the graph.</p>`,
        examples: [
            { input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" }
        ],
        constraints: ["The number of nodes is in range [0, 100]"],
        templates: {
            javascript: `function cloneGraph(node) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def cloneGraph(self, node):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public Node cloneGraph(Node node) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[[2,4],[1,3],[2,4],[1,3]]], expected: [[2,4],[1,3],[2,4],[1,3]] }
        ]
    },

    // ==================== TWO POINTERS ====================
    {
        id: 43,
        title: "Valid Palindrome II",
        difficulty: "Easy",
        acceptance: "44.5%",
        category: "Two Pointers",
        description: `<p>Given a string <code>s</code>, return <code>true</code> if the <code>s</code> can be palindrome after deleting <strong>at most one</strong> character from it.</p>`,
        examples: [
            { input: 's = "aba"', output: "true" },
            { input: 's = "abca"', output: "true", explanation: "Delete 'b'" }
        ],
        constraints: ["1 <= s.length <= 10^5"],
        templates: {
            javascript: `function validPalindrome(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def validPalindrome(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean validPalindrome(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool validPalindrome(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["aba"], expected: true },
            { input: ["abca"], expected: true }
        ]
    },
    {
        id: 44,
        title: "Container With Most Water",
        difficulty: "Medium",
        acceptance: "54.1%",
        category: "Two Pointers",
        description: `<p>You are given an integer array <code>height</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>`,
        examples: [
            { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }
        ],
        constraints: ["n == height.length"],
        templates: {
            javascript: `function maxArea(height) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def maxArea(self, height):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,8,6,2,5,4,8,3,7]], expected: 49 }
        ]
    },
    {
        id: 45,
        title: "3Sum",
        difficulty: "Medium",
        acceptance: "32.8%",
        category: "Two Pointers",
        description: `<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>`,
        examples: [
            { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
        ],
        constraints: ["3 <= nums.length <= 3000"],
        templates: {
            javascript: `function threeSum(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def threeSum(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[-1,0,1,2,-1,-4]], expected: [[-1,-1,2],[-1,0,1]] }
        ]
    },
    {
        id: 46,
        title: "Remove Element",
        difficulty: "Easy",
        acceptance: "55.8%",
        category: "Two Pointers",
        description: `<p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <strong>in-place</strong>.</p>`,
        examples: [
            { input: "nums = [3,2,2,3], val = 3", output: "2" }
        ],
        constraints: ["0 <= nums.length <= 100"],
        templates: {
            javascript: `function removeElement(nums, val) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def removeElement(self, nums, val):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,2,2,3], 3], expected: 2 }
        ]
    },
    {
        id: 47,
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        acceptance: "71.5%",
        category: "Two Pointers",
        description: `<p>Given an integer array <code>nums</code> sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.</p>`,
        examples: [
            { input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" },
            { input: "nums = [-7,-3,2,3,11]", output: "[4,9,9,49,121]" }
        ],
        constraints: ["1 <= nums.length <= 10^4"],
        templates: {
            javascript: `function sortedSquares(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def sortedSquares(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[-4,-1,0,3,10]], expected: [0,1,9,16,100] },
            { input: [[-7,-3,2,3,11]], expected: [4,9,9,49,121] }
        ]
    },

    // ==================== MATH ====================
    {
        id: 48,
        title: "Palindrome Number",
        difficulty: "Easy",
        acceptance: "52.4%",
        category: "Math",
        description: `<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p>`,
        examples: [
            { input: "x = 121", output: "true" },
            { input: "x = -121", output: "false" }
        ],
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        templates: {
            javascript: `function isPalindrome(x) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isPalindrome(self, x):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [121], expected: true },
            { input: [-121], expected: false }
        ]
    },
    {
        id: 49,
        title: "Reverse Integer",
        difficulty: "Medium",
        acceptance: "27.5%",
        category: "Math",
        description: `<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed.</p>`,
        examples: [
            { input: "x = 123", output: "321" },
            { input: "x = -123", output: "-321" }
        ],
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        templates: {
            javascript: `function reverse(x) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def reverse(self, x):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int reverse(int x) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int reverse(int x) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [123], expected: 321 },
            { input: [-123], expected: -321 }
        ]
    },
    {
        id: 50,
        title: "Power of Three",
        difficulty: "Easy",
        acceptance: "48.2%",
        category: "Math",
        description: `<p>Given an integer <code>n</code>, return <code>true</code> if it is a power of three.</p>`,
        examples: [
            { input: "n = 27", output: "true", explanation: "27 = 3^3" },
            { input: "n = 0", output: "false" },
            { input: "n = 9", output: "true" }
        ],
        constraints: ["-2^31 <= n <= 2^31 - 1"],
        templates: {
            javascript: `function isPowerOfThree(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isPowerOfThree(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isPowerOfThree(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isPowerOfThree(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [27], expected: true },
            { input: [0], expected: false },
            { input: [9], expected: true }
        ]
    },
    {
        id: 51,
        title: "Count Primes",
        difficulty: "Medium",
        acceptance: "33.2%",
        category: "Math",
        description: `<p>Given an integer <code>n</code>, return <em>the number of prime numbers that are strictly less than</em> <code>n</code>.</p>`,
        examples: [
            { input: "n = 10", output: "4", explanation: "Primes less than 10 are 2, 3, 5, 7" }
        ],
        constraints: ["0 <= n <= 5 * 10^6"],
        templates: {
            javascript: `function countPrimes(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def countPrimes(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int countPrimes(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int countPrimes(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [10], expected: 4 }
        ]
    },
    {
        id: 52,
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.8%",
        category: "Math",
        description: `<p>Write an algorithm to determine if a number <code>n</code> is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1.</p>`,
        examples: [
            { input: "n = 19", output: "true", explanation: "1^2 + 9^2 = 82, 8^2 + 2^2 = 68, 6^2 + 8^2 = 100, 1^2 + 0^2 + 0^2 = 1" }
        ],
        constraints: ["1 <= n <= 2^31 - 1"],
        templates: {
            javascript: `function isHappy(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def isHappy(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public boolean isHappy(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    bool isHappy(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [19], expected: true }
        ]
    },

    // ==================== SLIDING WINDOW ====================
    {
        id: 53,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        acceptance: "33.8%",
        category: "Sliding Window",
        description: `<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>`,
        examples: [
            { input: 's = "abcabcbb"', output: "3" },
            { input: 's = "bbbbb"', output: "1" }
        ],
        constraints: ["0 <= s.length <= 5 * 10^4"],
        templates: {
            javascript: `function lengthOfLongestSubstring(s) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def lengthOfLongestSubstring(self, s):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: ["abcabcbb"], expected: 3 },
            { input: ["bbbbb"], expected: 1 }
        ]
    },
    {
        id: 54,
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        acceptance: "49.5%",
        category: "Sliding Window",
        description: `<p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return the <em>minimal length</em> of a subarray whose sum is greater than or equal to <code>target</code>.</p>`,
        examples: [
            { input: "target = 7, nums = [2,3,1,2,4,3]", output: "2", explanation: "The subarray [4,3] has minimal length" }
        ],
        constraints: ["1 <= target <= 10^9"],
        templates: {
            javascript: `function minSubArrayLen(target, nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def minSubArrayLen(self, target, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [7, [2,3,1,2,4,3]], expected: 2 }
        ]
    },
    {
        id: 55,
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        acceptance: "45.8%",
        category: "Sliding Window",
        description: `<p>You are given an integer array <code>nums</code> consisting of <code>n</code> elements, and an integer <code>k</code>. Find a contiguous subarray whose length is equal to <code>k</code> that has the maximum average value.</p>`,
        examples: [
            { input: "nums = [1,12,-5,-6,50,3], k = 4", output: "12.75" }
        ],
        constraints: ["1 <= k <= n"],
        templates: {
            javascript: `function findMaxAverage(nums, k) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def findMaxAverage(self, nums, k):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public double findMaxAverage(int[] nums, int k) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    double findMaxAverage(vector<int>& nums, int k) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[1,12,-5,-6,50,3], 4], expected: 12.75 }
        ]
    },

    // ==================== BIT MANIPULATION ====================
    {
        id: 56,
        title: "Number of 1 Bits",
        difficulty: "Easy",
        acceptance: "68.2%",
        category: "Bit Manipulation",
        description: `<p>Write a function that takes the binary representation of a positive integer and returns the number of set bits it has.</p>`,
        examples: [
            { input: "n = 11", output: "3", explanation: "11 = 1011 has 3 set bits" },
            { input: "n = 128", output: "1" }
        ],
        constraints: ["1 <= n <= 2^31 - 1"],
        templates: {
            javascript: `function hammingWeight(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def hammingWeight(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int hammingWeight(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [11], expected: 3 },
            { input: [128], expected: 1 }
        ]
    },
    {
        id: 57,
        title: "Counting Bits",
        difficulty: "Easy",
        acceptance: "75.8%",
        category: "Bit Manipulation",
        description: `<p>Given an integer <code>n</code>, return <em>an array</em> <code>ans</code> of length <code>n + 1</code> such that for each <code>i</code>, <code>ans[i]</code> is the <strong>number of 1's</strong> in the binary representation of <code>i</code>.</p>`,
        examples: [
            { input: "n = 2", output: "[0,1,1]" },
            { input: "n = 5", output: "[0,1,1,2,1,2]" }
        ],
        constraints: ["0 <= n <= 10^5"],
        templates: {
            javascript: `function countBits(n) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def countBits(self, n):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int[] countBits(int n) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    vector<int> countBits(int n) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [2], expected: [0,1,1] },
            { input: [5], expected: [0,1,1,2,1,2] }
        ]
    },
    {
        id: 58,
        title: "Missing Number",
        difficulty: "Easy",
        acceptance: "64.5%",
        category: "Bit Manipulation",
        description: `<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.</p>`,
        examples: [
            { input: "nums = [3,0,1]", output: "2" },
            { input: "nums = [0,1]", output: "2" }
        ],
        constraints: ["n == nums.length"],
        templates: {
            javascript: `function missingNumber(nums) {\n    // Write your solution here\n    \n}`,
            python: `class Solution:\n    def missingNumber(self, nums):\n        # Write your solution here\n        pass`,
            java: `class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your solution here\n        \n    }\n}`,
            cpp: `class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};`
        },
        testCases: [
            { input: [[3,0,1]], expected: 2 },
            { input: [[0,1]], expected: 2 }
        ]
    },

    // ==================== DESIGN ====================
    {
        id: 59,
        title: "LRU Cache",
        difficulty: "Medium",
        acceptance: "40.8%",
        category: "Design",
        description: `<p>Design a data structure that follows the constraints of a <strong>Least Recently Used (LRU) cache</strong>.</p>`,
        examples: [
            { input: 'LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1);', output: "1" }
        ],
        constraints: ["1 <= capacity <= 3000"],
        templates: {
            javascript: `class LRUCache {\n    constructor(capacity) {\n        // Initialize your data structure here\n    }\n    \n    get(key) {\n        // Return value if key exists, else -1\n    }\n    \n    put(key, value) {\n        // Insert or update key-value pair\n    }\n}`,
            python: `class LRUCache:\n    def __init__(self, capacity):\n        # Initialize your data structure here\n        pass\n    \n    def get(self, key):\n        # Return value if key exists, else -1\n        pass\n    \n    def put(self, key, value):\n        # Insert or update key-value pair\n        pass`,
            java: `class LRUCache {\n    public LRUCache(int capacity) {\n        // Initialize your data structure here\n    }\n    \n    public int get(int key) {\n        // Return value if key exists, else -1\n    }\n    \n    public void put(int key, int value) {\n        // Insert or update key-value pair\n    }\n}`,
            cpp: `class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        // Initialize your data structure here\n    }\n    \n    int get(int key) {\n        // Return value if key exists, else -1\n    }\n    \n    void put(int key, int value) {\n        // Insert or update key-value pair\n    }\n};`
        },
        testCases: [
            { input: [["LRUCache","put","put","get","put","get","put","get","get","get"]], expected: [null,null,null,1,null,2,null,2,1,2] }
        ]
    },
    {
        id: 60,
        title: "Min Stack",
        difficulty: "Medium",
        acceptance: "51.2%",
        category: "Design",
        description: `<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>`,
        examples: [
            { input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()", output: "-3" }
        ],
        constraints: ["Methods pop, top and getMin will always be called on non-empty stacks"],
        templates: {
            javascript: `class MinStack {\n    constructor() {\n        // Initialize your data structure here\n    }\n    \n    push(val) {\n        // Push element onto stack\n    }\n    \n    pop() {\n        // Remove the element on top\n    }\n    \n    top() {\n        // Get the top element\n    }\n    \n    getMin() {\n        // Retrieve the minimum element\n    }\n}`,
            python: `class MinStack:\n    def __init__(self):\n        # Initialize your data structure here\n        pass\n    \n    def push(self, val):\n        # Push element onto stack\n        pass\n    \n    def pop(self):\n        # Remove the element on top\n        pass\n    \n    def top(self):\n        # Get the top element\n        pass\n    \n    def getMin(self):\n        # Retrieve the minimum element\n        pass`,
            java: `class MinStack {\n    public MinStack() {\n        // Initialize your data structure here\n    }\n    \n    public void push(int val) {\n        // Push element onto stack\n    }\n    \n    public void pop() {\n        // Remove the element on top\n    }\n    \n    public int top() {\n        // Get the top element\n    }\n    \n    public int getMin() {\n        // Retrieve the minimum element\n    }\n}`,
            cpp: `class MinStack {\npublic:\n    MinStack() {\n        // Initialize your data structure here\n    }\n    \n    void push(int val) {\n        // Push element onto stack\n    }\n    \n    void pop() {\n        // Remove the element on top\n    }\n    \n    int top() {\n        // Get the top element\n    }\n    \n    int getMin() {\n        // Retrieve the minimum element\n    }\n};`
        },
        testCases: [
            { input: [["push","push","push","getMin","pop","top","getMin"]], expected: [null,null,null,-2,null,0,-2] }
        ]
    }
];
