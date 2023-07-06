//Write a program to display the details of a given input string
Console.WriteLine("Enter the input string:");
string data = Console.ReadLine();

Console.WriteLine("Length of the string : " +data.Length);

Console.WriteLine("Enter the character to be found:");
char charval = char.Parse(Console.ReadLine());
int index= data.IndexOf(charval);
Console.WriteLine($"Character {charval} found at index : {index} ");

char[] charstring=data.ToCharArray();
Array.Reverse(charstring);
string rev= new string(charstring);
Console.WriteLine("Reversed String : "+rev);

data = data.Insert(0, "Hai");
Console.WriteLine("After appending 'Hai' in the beginning: "+data);

Console.WriteLine("Last Character of the string: " + data[data.Length-1]);

Console.WriteLine("After replacing 'a' with '_': " + data.Replace("a", "_"));

Console.WriteLine("Enter the character to check occurance:");
char occurval = char.Parse(Console.ReadLine());
int count=0;
for(int i=0;i<data.Length;i++) 
{
    if (data[i] == occurval)
    {
        count++;
    }
}
Console.WriteLine($"No. of occurances of char {occurval} : {count}");
Console.ReadLine();

//Rewrite the above program using stringbuilder
using System.Diagnostics.SymbolStore;
using System.Text;

Console.WriteLine("Enter the input string:");
string data = Console.ReadLine();
StringBuilder sb = new StringBuilder(data);

Console.WriteLine("Length of the string : " + sb.Length);

Console.WriteLine("Enter the character to be found:");
char charval = char.Parse(Console.ReadLine());
int indx = 0 ;
for(int i=0;i<sb.Length; i++)
{
    if(charval == sb[i])
    {
        indx = i;
        break;
    }
}
Console.WriteLine($"Character {charval} found at index : {indx} ");

StringBuilder sb1 = new StringBuilder();
for (int i= sb.Length - 1; i >= 0;i--)
{
    sb1.Append(sb[i]);
}
Console.WriteLine("Reversed String : " + sb1);

sb=sb.Insert(0, "Hai");
Console.WriteLine("After appending 'Hai' in the beginning: " + sb);

Console.WriteLine("Last Character of the string: " + sb[sb.Length - 1]);

Console.WriteLine("After replacing 'a' with '_': " + sb.Replace("a", "_"));


Console.WriteLine("Enter the character to check occurance:");
char occurval = char.Parse(Console.ReadLine());
int count = 0;
for (int i = 0; i < sb.Length; i++)
{
    if (sb[i] == occurval)
    {
        count++;
    }
}
Console.WriteLine($"No. of occurances of char {occurval} : {count}");
Console.ReadLine();


//Write a program to do the datetime calculation
DateTime dateTime = DateTime.Now;
Console.WriteLine("Current date and time in different formats:");
Console.WriteLine("Full long date/time : " + dateTime.ToString("F"));
Console.WriteLine("Universal date/time : " + dateTime.ToString("U"));
Console.WriteLine("Round Trip date/time : "+ dateTime.ToString("O"));
Console.WriteLine("General short date/time : " + dateTime.ToString("g"));

DateTime newdate = new DateTime(2023, 01, 01);
DateTime olddate = new DateTime(2022, 01, 01);
TimeSpan diff = newdate.Subtract(olddate);
Console.WriteLine("\nDifference between two dates : " + diff);

Console.WriteLine("\nGiven date: "+newdate.Date);
Console.WriteLine("\nDay of the given date: "+newdate.Day.ToString());
Console.WriteLine("Month of the given date: " + newdate.Month.ToString());
Console.WriteLine("Year of the given date: " + newdate.Year.ToString());

Console.WriteLine("\nDate before adding 10 days: " + newdate.Date+"\nDate after adding 10 days: " + newdate.AddDays(10));

//Single Calculate  method, Calculate out add, out sub, out mult, out div
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Assignment2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1=10, num2=2;
            int add, sub, mul, div;
            calculate(num1,num2,out add,out sub,out mul,out div);
            Console.WriteLine($"Numbers: {num1} and {num2}");
            Console.WriteLine($"Addition: {add} \nSubtraction: {sub} \nDivision: {div}\nMultiplication: {mul}");
            Console.ReadLine();

        }
        public static void calculate(int num1,int num2,out int add,out int sub,out int mul, out int div)
        {
            add = num1 + num2;
            sub = num1 - num2;      
            mul = num1 * num2;
            div = num1 / num2;
        }

    }
}
