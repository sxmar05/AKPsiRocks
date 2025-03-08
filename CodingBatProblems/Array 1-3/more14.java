public boolean more14(int[] nums)
{
	int balance = 0;
	for(int i = 0; i < nums.length; i++)
	{
		if(nums[i] == 1)
			balance++;
		else if(nums[i] == 4)
			balance--;
	}
	return (balance > 0);
}