class Solution {
   public List<List<Integer>> levelOrder(TreeNode root) {
       List<List<Integer>> result = new ArrayList<>();
       if (root == null) return result;  // handle empty tree
      
       Queue<TreeNode> queue = new LinkedList<>();
       queue.offer(root);
      
       while (!queue.isEmpty()) {
           int levelSize = queue.size(); // number of nodes at current level
           List<Integer> currentLevel = new ArrayList<>();
          
           for (int i = 0; i < levelSize; i++) {
               TreeNode node = queue.poll();
               currentLevel.add(node.val);
              
               // add kids to queue
               if (node.left != null) {
                   queue.offer(node.left);
               }
               if (node.right != null) {
                   queue.offer(node.right);
               }
           }
           result.add(currentLevel); // add the current level to the result
       }
      
       return result;
   }
}
