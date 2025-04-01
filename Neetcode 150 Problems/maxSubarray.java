class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            // Decide whether to start fresh at nums[i] or extend the previous subarray.
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            // Update the maximum subarray sum found so far.
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
}