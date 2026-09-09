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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let l1 = head, l2 = head;
        while(n--) {
            l2 = l2.next;
        }

        // console.log(l2);

        // console.log("<====================>");

        let prev = l1;
        while(l2) {
            prev = l1;
            l1 = l1.next; 
            l2 = l2.next;
        }

        // console.log(prev.val + "\n" + l1.val + "\n" + l2);

        if(l1 === head) {
            head = head.next;
        } else {
            prev.next = l1.next;
        }
        l1.next = null;

        return head;
    }
}
