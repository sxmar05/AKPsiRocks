public String without2(String str)
{
	int len = str.length();
	if(len >= 2)
	{
		if(str.substring(0,2).equals(str.substring(len-2, len)))
			return str.substring(2);
		else
			return str;
	}
	else
		return str;
}
