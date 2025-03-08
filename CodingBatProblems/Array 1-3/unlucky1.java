public boolean unlucky1(int[] nums)
{
	int lastP = nums.length-1;
	if(lastP  >= 2)
	{
		if((nums[0] == 1 && nums[1] == 3) || (nums[1] == 1 && nums[2] == 3))
			return true;
		return (nums[lastP-1] == 1 && nums[lastP] == 3);
	}
	if(lastP  == 1)
		return ((nums[0] == 1 && nums[1] == 3) || (nums[1] == 1 && nums[2] == 3));
	return false;
}