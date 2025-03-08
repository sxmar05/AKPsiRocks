public String mixString(String a, String b)
{
	int aLen = a.length();
	int bLen = b.length();
	int i = 0;
	StringBuilder stbuild = new StringBuilder(aLen+bLen);
	for(; i < aLen && i < bLen; i++)
	{
		stbuild.append(a.charAt(i));
		stbuild.append(b.charAt(i));
	}


	for(; i < aLen; i++)
		stbuild.append(a.charAt(i));
	for(; i < bLen; i++)
		stbuild.append(b.charAt(i));
	return stbuild.toString();
}
