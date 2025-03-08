public String starOut(String str)
{
	int len = str.length();
	int[] indexes = new int[len];
	char ch;
	StringBuilder stbuild = new StringBuilder(len);
	for(int i = 0; i < len; i++)
	{
		if(str.charAt(i) == '*')
		{
			indexes[i] = 1;
			if(i >= 1)
				indexes[i-1] = 1;
			if(i < (len-1))
				indexes[i+1] = 1;
		}
	}
	for(int i = 0; i < len; i++)
	{
		if(indexes[i] == 0)
			stbuild.append(str.charAt(i));
	}
	return stbuild.toString();
}
