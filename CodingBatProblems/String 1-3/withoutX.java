public String withoutX(String str)
{
	int len = str.length();
	if(len >= 2)
	{
		char ch = str.charAt(0);
		StringBuilder stbuild = new StringBuilder(len);
		if(ch != 'x')
			stbuild.append(ch);
		stbuild.append(str.substring(1, len-1));
		ch = str.charAt(len-1);
		if(ch != 'x')
			stbuild.append(ch);
		return stbuild.toString();
	}
	else if(len == 1 && str.charAt(0) == 'x')
		return "";
	else
		return str;
}

