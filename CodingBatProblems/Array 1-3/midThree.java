public int[] midThree(int[] nums)
{
	int[] halfArr = new int[3];
	int half = nums.length/2;
	halfArr[0] = nums[half-1];
	halfArr[1] = nums[half];
	halfArr[2] = nums[half+1];
	return halfArr;
}