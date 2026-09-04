const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        acceptance: "49.2%",
        description: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
        <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
        <p>You can return the answer in any order.</p>`,
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]"
            }
        ],
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists."
        ],
        templates: {
            javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your solution here
        pass`,
            java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [[2,7,11,15], 9], expected: [0,1] },
            { input: [[3,2,4], 6], expected: [1,2] },
            { input: [[3,3], 6], expected: [0,1] }
        ]
    },
    {
        id: 2,
        title: "Add Two Numbers",
        difficulty: "Medium",
        acceptance: "40.7%",
        description: `<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
        <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>`,
        examples: [
            {
                input: "l1 = [2,4,3], l2 = [5,6,4]",
                output: "[7,0,8]",
                explanation: "342 + 465 = 807."
            }
        ],
        constraints: [
            "The number of nodes in each linked list is in the range [1, 100].",
            "0 <= Node.val <= 9",
            "It is guaranteed that the list represents a number that does not have leading zeros."
        ],
        templates: {
            javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    // Write your solution here
    
}`,
            python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # Write your solution here
        pass`,
            java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        
    }
}`,
            cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [[2,4,3], [5,6,4]], expected: [7,0,8] },
            { input: [[0], [0]], expected: [0] },
            { input: [[9,9,9,9,9,9,9], [9,9,9,9]], expected: [8,9,9,9,0,0,0,1] }
        ]
    },
    {
        id: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        acceptance: "33.8%",
        description: `<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>`,
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: 'The answer is "abc", with the length of 3.'
            },
            {
                input: 's = "bbbbb"',
                output: "1",
                explanation: 'The answer is "b", with the length of 1.'
            }
        ],
        constraints: [
            "0 <= s.length <= 5 * 10^4",
            's consists of English letters, digits, symbols and spaces.'
        ],
        templates: {
            javascript: `/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Write your solution here
        pass`,
            java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: ["abcabcbb"], expected: 3 },
            { input: ["bbbbb"], expected: 1 },
            { input: ["pwwkew"], expected: 3 }
        ]
    },
    {
        id: 4,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        acceptance: "35.2%",
        description: `<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>
        <p>The overall run time complexity should be O(log (m+n)).</p>`,
        examples: [
            {
                input: "nums1 = [1,3], nums2 = [2]",
                output: "2.00000",
                explanation: "merged array = [1,2] and median is 2."
            },
            {
                input: "nums1 = [1,2], nums2 = [3,4]",
                output: "2.50000",
                explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
            }
        ],
        constraints: [
            "nums1.length == m",
            "nums2.length == n",
            "0 <= m <= 1000",
            "0 <= n <= 1000",
            "1 <= m + n <= 2000",
            "-10^6 <= nums1[i], nums2[i] <= 10^6"
        ],
        templates: {
            javascript: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Write your solution here
        pass`,
            java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [[1,3], [2]], expected: 2.0 },
            { input: [[1,2], [3,4]], expected: 2.5 }
        ]
    },
    {
        id: 5,
        title: "Palindrome Number",
        difficulty: "Easy",
        acceptance: "52.4%",
        description: `<p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p>
        <p>An integer is a palindrome when it reads the same backward as forward.</p>`,
        examples: [
            {
                input: "x = 121",
                output: "true",
                explanation: "121 reads as 121 from left to right and from right to left."
            },
            {
                input: "x = -121",
                output: "false",
                explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
            }
        ],
        constraints: [
            "-2^31 <= x <= 2^31 - 1"
        ],
        templates: {
            javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Write your solution here
        pass`,
            java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    bool isPalindrome(int x) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [121], expected: true },
            { input: [-121], expected: false },
            { input: [10], expected: false }
        ]
    },
    {
        id: 6,
        title: "Reverse Integer",
        difficulty: "Medium",
        acceptance: "27.5%",
        description: `<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p>`,
        examples: [
            {
                input: "x = 123",
                output: "321"
            },
            {
                input: "x = -123",
                output: "-321"
            }
        ],
        constraints: [
            "-2^31 <= x <= 2^31 - 1"
        ],
        templates: {
            javascript: `/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def reverse(self, x: int) -> int:
        # Write your solution here
        pass`,
            java: `class Solution {
    public int reverse(int x) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    int reverse(int x) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [123], expected: 321 },
            { input: [-123], expected: -321 },
            { input: [120], expected: 21 }
        ]
    },
    {
        id: 7,
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        acceptance: "18.3%",
        description: `<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>`,
        examples: [
            {
                input: 's = "42"',
                output: "42"
            },
            {
                input: 's = "   -42"',
                output: "-42",
                explanation: "The first non-whitespace character is '-', which is the minus sign."
            }
        ],
        constraints: [
            "0 <= s.length <= 200",
            "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."
        ],
        templates: {
            javascript: `/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def myAtoi(self, s: str) -> int:
        # Write your solution here
        pass`,
            java: `class Solution {
    public int myAtoi(String s) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    int myAtoi(string s) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: ["42"], expected: 42 },
            { input: ["   -42"], expected: -42 },
            { input: ["4193 with words"], expected: 4193 }
        ]
    },
    {
        id: 8,
        title: "Container With Most Water",
        difficulty: "Medium",
        acceptance: "54.1%",
        description: `<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>
        <p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>`,
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49"
            }
        ],
        constraints: [
            "n == height.length",
            "2 <= n <= 10^5",
            "0 <= height[i] <= 10^4"
        ],
        templates: {
            javascript: `/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    // Write your solution here
    
}`,
            python: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Write your solution here
        pass`,
            java: `class Solution {
    public int maxArea(int[] height) {
        // Write your solution here
        
    }
}`,
            cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        
    }
};`
        },
        testCases: [
            { input: [[1,8,6,2,5,4,8,3,7]], expected: 49 },
            { input: [[1,1]], expected: 1 }
        ]
    }
];
