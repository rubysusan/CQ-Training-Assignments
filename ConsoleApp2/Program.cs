// See https://aka.ms/new-console-template for more information
Console.WriteLine("Enter string data");
string stringdata = Console.ReadLine();


Console.WriteLine("Enter integer data");
string val2 = Console.ReadLine();
int.TryParse(val2, out int intdata);


Console.WriteLine("Enter character data");
string val3 = Console.ReadLine();
char.TryParse(val3, out char chardata);

Console.WriteLine("Enter boolean data");
string val4 = Console.ReadLine();
bool.TryParse(val4, out bool booldata);

Console.WriteLine("\nDisplaying Data:");
Console.WriteLine("String Data : " + stringdata);
Console.WriteLine("Integer data : " + intdata);
Console.WriteLine("Character data : " + chardata);
Console.WriteLine("Boolean data : " + booldata);

