class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int islands = 0;
        int m = grid.length, n = grid[0].length;
        
        // every cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {


                if (grid[i][j] == '1') {
                    islands++;
                    dfs(grid, i, j);
                }
            }
        }
        return islands;
    }
    
   
    private void dfs(char[][] grid, int i, int j) {
        // Check if the cell is water
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
            return;
        }
        // mark cell
        grid[i][j] = '0';
        
        // dfs
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    }
}
