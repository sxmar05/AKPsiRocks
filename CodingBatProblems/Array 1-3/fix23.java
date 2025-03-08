public int[] fix23(int[] nums)
{
	int[] fxArr = {nums[0], nums[1], nums[2]};
	if(nums[0] == 2 && nums[1] == 3)
			fxArr[1] = 0;
	if(nums[1] == 2 && nums[2] == 3)
			fxArr[2] = 0;
	return fxArr;
}