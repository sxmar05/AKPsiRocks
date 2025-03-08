public String repeatEnd(String str, int n)
{
	StringBuilder stbuild = new StringBuilder(n*n);
	String last = str.substring(str.length()-n);
	for(int i = 0; i < n; i++)
		stbuild.append(last);
	return stbuild.toString();
}