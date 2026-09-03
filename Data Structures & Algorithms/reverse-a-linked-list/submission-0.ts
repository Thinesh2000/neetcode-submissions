/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return head;

        let prev = null,
            p = head,
            next = null;
        while (p) {
            next = p.next;
            p.next = prev;
            prev = p;
            p = next;
        }

        head = prev;

        return head;
    }
}
