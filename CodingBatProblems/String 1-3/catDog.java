public boolean catDog(String str)
{

	int len = str.length()-2;
	int diff = 0;
	for(int i = 0; i < len; i++)
	{
		if(str.charAt(i) == 'c')
		{
			if(str.charAt(i+1) == 'a' && str.charAt(i+2) == 't')
				diff++;
		}
		else if(str.charAt(i) == 'd')
		{
			if(str.charAt(i+1) == 'o' && str.charAt(i+2) == 'g')
				diff--;
		}
	}
	return (diff == 0);
}