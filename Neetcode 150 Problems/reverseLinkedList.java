class Solution {
   public ListNode reverseList(ListNode head) {
       ListNode prev = null;
       ListNode curr = head;
      
       while (curr != null) {
           ListNode next = curr.next;  // store the next node
           curr.next = prev;           // reverse the pointer
           prev = curr;                // move prev to current
           curr = next;                // move to the next node
       }
      
       return prev; // prev becomes the new head of the reversed list
   }
}