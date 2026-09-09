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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head) return;

        // get middle
        let p1 = head, p2 = head.next;
        while (p2?.next) {
            p1 = p1?.next;
            p2 = p2.next?.next;
        }

        let p3 = p1?.next;
        p1.next = null;

        // console.log(p1, "\n", p3);

        let prev = null;
        while (p3) {
            let temp = p3.next;
            p3.next = prev;
            prev = p3;
            p3 = temp;
        }

        // console.log("REV==>", prev);

        let l1 = head,
            l2 = prev;

        // console.log(l1, "\n", l2);
        
        while (l1 && l2) {
            let temp = l1.next;
            l1.next = l2;
            l1 = l1.next;
            l2 = l2.next;
            l1.next = temp;
            l1=l1.next;
        }

        return;
    }
}
