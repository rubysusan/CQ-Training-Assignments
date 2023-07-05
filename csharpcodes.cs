//Print first 20 numbers using for loop
int num;
Console.WriteLine("First 20 numbers:");
for (num=1;num<=20;num++)
{
    Console.WriteLine(num) ;
}

//Print odd numbers less than 50 using while loop
int num;
Console.WriteLine("Odd numbers less than 50:");
for (num = 1; num <= 50; num++ )
{
    if( num % 2 != 0 )
    {
        Console.WriteLine(num);
    }
}

//Large among 3 numbers
int num1, num2, num3, result;
Console.WriteLine("Enter 1st number:");
num1 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter 2nd number:");
num2 = int.Parse(Console.ReadLine());
Console.WriteLine("Enter 3rd number:");
num3 = int.Parse(Console.ReadLine());
int temp1 = num1 > num2 ? num1 : num2;
int temp2 = num2 > num3 ? num2 : num3;
result = temp1 > temp2 ? temp1 : temp2;
Console.WriteLine("The largest number is:" + result);

//Reverse of a number
Console.WriteLine("Enter the number to be reversed:");
int rem, rev = 0;
int num = int.Parse(Console.ReadLine());
while(num>0)
{
    rem = num % 10;
    rev = rev * 10 + rem;
    num = num / 10;
}
Console.WriteLine("Reversed number:" + rev);

//Sum of the digits of a number
Console.WriteLine("Enter the number:");
int rem, sum = 0;
int num = int.Parse(Console.ReadLine());
while(num>0)
{
    rem = num % 10;
    sum += rem;
    num = num / 10;
}
Console.WriteLine("Sum of digits:" + sum);

//Sum of the squares of the digits of a number
Console.WriteLine("Enter the number:");
int rem, sum = 0;
int num = int.Parse(Console.ReadLine());
while(num>0)
{
    rem = num % 10;
    sum += rem*rem;
    num = num / 10;
}
Console.WriteLine("Sum of squares of the digits:" + sum);

//Check prime number
int flag = 0;
Console.WriteLine("Enter the number:");
int num = int.Parse(Console.ReadLine());
for(int i = 2; i < num; i++)
{
    if(num % i == 0)
    {
        flag = 1;
        break;
    }
}
if(num == 0 || num == 1)
{
    flag = 1;
}
if(flag==1)
{
    Console.WriteLine("Not Prime");
}
else 
{
    Console.WriteLine("Prime");
}

//Print all prime numbers below 100
int j,i;
Console.WriteLine("Prime numbers below 100:");
for(j = 1 ;j <= 100;++j)
    {
    for(i =2;i<j;i++)
    {
        if(j%i==0)
        { 
            break;
        }
    }
    if(i==j)
        Console.Write(j+" ");
}

//Fibonacci series
int i,n,n1=0,n2=1,n3;
Console.WriteLine("Enter limit:");
n= int.Parse(Console.ReadLine());
Console.WriteLine("Fibonacci series:");
Console.Write(n1 + " " +n2 +" ");
n3 = n1 + n2;
for(i=3 ;i<=n ;i++)
{
    Console.Write(n3 + " ");
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
}

//Check palindrome 
Console.WriteLine("Enter the number:");
int rem, rev = 0;
int num = int.Parse(Console.ReadLine());
int temp = num;
while (num > 0)
{
    rem = num % 10;
    rev = rev * 10 + rem;
    num = num / 10;
}
if(temp==rev)
{
    Console.WriteLine("Palindrome number");
}
else
{
    Console.WriteLine("Not Palindrome");
}

//Tax calculation program, input the amount and display the tax
double tax=0;
Console.WriteLine("Enter the amount:");
double amt = double.Parse(Console.ReadLine());
if (amt < 10000)
{
    tax = amt * 5 / 100;
}
else if (amt >=10000 && amt<15000)
{
    tax = amt * 7.5 / 100;
}
else if (amt >= 15000 && amt < 20000)
{
    tax = amt * 10 / 100;
}
else if (amt >= 20000 && amt < 25000)
{
    tax = amt * 12.5 / 100;
}
else if (amt >= 25000)
{
    tax = amt * 15 / 100;
}
Console.WriteLine("Tax= "+tax);

//Input a character from console and display the sports name corresponding to it
Console.WriteLine("Enter the character of sport:");
entry: char sport = char.Parse(Console.ReadLine());
switch (sport)
{
    case 'c':
        Console.WriteLine("Cricket");
        break;
    case 'f':
        Console.WriteLine("Football");
        break;
    case 'h':
        Console.WriteLine("Hockey");
        break;
    case 't':
        Console.WriteLine("Tennis");
        break;
    case 'b':
        Console.WriteLine("Badminton");
        break;
    default: Console.WriteLine("Invalid input,please try again");
        goto entry;
        break;
}

/* to print the below pattern
*
**
***
****
*****
*/
for(int i=0;i<5;i++)
{
    for(int j=0;j<=i;j++)
    {
        Console.Write("*");
    }
    Console.Write("\n");
}



