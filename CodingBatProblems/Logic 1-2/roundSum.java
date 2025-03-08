public int round10(int num)
{
	int digit = num % 10;
	if(digit >= 5)
		return num + (10 - digit);
	return num - digit;
}

public int roundSum(int a, int b, int c)
{	
    return (round10(a) + round10(b) + round10(c));	
    }