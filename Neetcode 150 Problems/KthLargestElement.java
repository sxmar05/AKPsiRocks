class KthLargest {
    private PriorityQueue<Integer> minHeap;
    private int k;


    public KthLargest(int k, int[] nums) {
        this.k = k;
        minHeap = new PriorityQueue<>();


        // add new number
        for (int num : nums) {
            add(num);
        }
    }
    
    public int add(int val) {
        // add new score
        if (minHeap.size() < k) {
            minHeap.offer(val);
        }
        
        else if (val > minHeap.peek()) {
            minHeap.poll();
            minHeap.offer(val);
        }
        
        return minHeap.peek();
    }
}
