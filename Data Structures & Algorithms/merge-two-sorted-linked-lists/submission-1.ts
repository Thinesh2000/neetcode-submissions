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
        if (!list1) return list2;
        if (!list2) return list1;

        const head = new ListNode(0, null);
        let prev = head,
            p1 = list1,
            p2 = list2;

        if(list1.val>list2.val) {
            p1=list2; 
            p2=list1;
        }

        head.next = p1;
        while (p1 && p2) {
            if (p1.val === p2.val) {
                prev = p1;
                const temp = p1.next;
                p1.next = p2;
                p2 = p2.next;
                p1 = p1.next;
                p1.next = temp;
            } else if (p1.val < p2.val) {
                prev = p1;
                p1 = p1.next;
            } else {
                prev.next = p2;
                p2 = p2.next;
                prev = prev.next;
                prev.next = p1;
            }
        }

        if (p2) {
            prev.next = p2;
        }

        return head.next;
    }
}
