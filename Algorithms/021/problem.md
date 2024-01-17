# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists ```list1``` and ```list2```.
Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.
Return *the head of the merged linked list*.

### Example 1:
![image](https://github.com/Alcan11/LeetCode/assets/136193455/3eff86e7-6a3f-46eb-9c8a-15b1216093db)

>**Input**: list1 = [1,2,4], list2 = [1,3,4]<br>
>**Output**: [1,1,2,3,4,4]

### Example 2:

>**Input**: list1 = [], list2 = []<br>
>**Output**: []

### Example 3:

>**Input**: list1 = [], list2 = [0]<br>
>**Output**: [0]


### Constraints:
* The number of nodes in both lists is in the range ```[0, 50]```.
* ```-100 <= Node.val <= 100```
* Both ```list1``` and ```list2``` are sorted in **non-decreasing** order.
