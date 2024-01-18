<?php
class Solution {    
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $numIndices = []; // Associative array to store the index of each number

        foreach ($nums as $key => $num) {
            $complement = $target - $num;

            // Check if the complement is already in the array
            if (array_key_exists($complement, $numIndices)) {
                // If found, return the indices of the two numbers
                return [$numIndices[$complement], $key];
            }

            // Otherwise, add the current number and its index to the array
            $numIndices[$num] = $key;
         }

        // If no solution is found
        return null;
    }
   
}

$nums = array(2,7,11,15);
$target = 9;
$solution = new Solution();
$result = $solution->twoSum($nums,$target);
?>
