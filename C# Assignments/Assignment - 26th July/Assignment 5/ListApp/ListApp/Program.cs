using System.Net.WebSockets;

int[] arrayInt = { 1, 2, 3, 4, 5 };
List < int> listInt = new List<int>();
Console.WriteLine("Elements in array: ");
foreach (int i in arrayInt)
{
    Console.Write(i + " ");
    listInt.Add(i*2);
}
Console.WriteLine("\nElements in list: ");
foreach (int i in listInt)
{
    Console.Write(i +" ");
}