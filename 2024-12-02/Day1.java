
import java.util.HashSet;

// 1. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Time Complexity:
// O(n): Each element is checked once, and HashSet operations (add, contains) are 𝑂(1) on average.
// Space Complexity:
// O(n): Space used by the HashSet to store unique elements.

class Day1{
    public static boolean containsDuplicate(int[] nums){
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums){
            if (set.contains(num)){
            return true;  
            }
            set.add(num);
        }
        return false;
    }
public static void main(String[] args){
    int[] nums1 = {1,2,3,1};
    System.out.println(containsDuplicate(nums1));
    int[] nums2 = {1,2,3,4};
    System.out.println(containsDuplicate(nums2));
    int[] nums3 = {1,1,1,3,3,4,3,2,4,2};
    System.out.println(containsDuplicate(nums3));
}

}