class Solution {
    public int searchInsert(int[] nums, int target) {
        int  solution = 0; 
        for(int i = 0; i < nums.length; i++){
            if(nums[i] >= target){
                solution = i;
                break;
            } else {
                solution = i+1;
            } 
        };
        return solution;
    }
}
