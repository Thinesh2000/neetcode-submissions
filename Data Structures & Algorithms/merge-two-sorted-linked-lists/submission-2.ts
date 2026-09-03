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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {

        const dummy = new ListNode(0, null);
        let current = dummy;
        let p1 = list1, p2 = list2;

        while (p1 && p2) {
            if (p1.val < p2.val) {
                current.next=p1;
                p1 = p1.next;
            } else {
                current.next=p2;
                p2=p2.next;
            }

            current = current.next;
        }

        current.next = p1 || p2;

        return dummy.next;
    }
}
