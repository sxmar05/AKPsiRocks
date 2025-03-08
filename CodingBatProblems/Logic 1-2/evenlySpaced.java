public boolean evenlySpaced(int a, int b, int c)
{
	int temp;
	if(b > a)
	{
		temp = a;
		a = b;
		b = temp;
	}
	if(c > b)
	{
		temp = b;
		b =c;
		c = temp;
	}
	if(b > a)
	{
		temp = a;
		a = b;
		b = temp;
	}
	return(a - b == b - c);
}