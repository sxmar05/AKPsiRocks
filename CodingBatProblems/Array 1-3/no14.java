public boolean no14(int[] nums)
{
	boolean noOne = true, noFour = true;
  for(int i = 0; i < nums.length && (noOne || noFour); i++)
	{
		if(nums[i] == 1)
			noOne = false;
		else if(nums[i] == 4)
			noFour = false;
	}	
	return (noOne || noFour);
}