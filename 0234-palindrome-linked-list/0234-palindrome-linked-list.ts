/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    let curHead = head;
    let string1 = "";
    let string2 = "";
    while(curHead) {
        string1 = `${string1}${curHead.val}`;
        string2 = `${curHead.val}${string2}`;
        curHead = curHead.next;
    }
    return string1 === string2;
};