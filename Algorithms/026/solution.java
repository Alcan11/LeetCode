import java.util.ArrayList;

class Solution {
    public int removeDuplicates(int[] nums) {
        ArrayList<Integer> arr_new = new ArrayList<Integer>();
        for (int i : nums) {
            arr_new.add(i);
        }

        for (int i = 0; i < arr_new.size(); i++) {
            for (int j = i + 1; j < arr_new.size(); j++) {
                if (arr_new.get(i).equals(arr_new.get(j))) {
                    arr_new.remove(j);
                    j--;
                }
            }
        }

        for (int i = 0; i < arr_new.size(); i++) {
            nums[i] = arr_new.get(i);
        }

        return arr_new.size();
    }
}
