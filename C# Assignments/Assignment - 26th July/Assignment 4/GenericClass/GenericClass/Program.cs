using GenericClass;
MyGenericComparer<int> genInt=new MyGenericComparer<int>();
int val=genInt.Compare(10, 9);
Console.WriteLine("Greatest Value = "+val);
MyGenericComparer<double> genFloat= new MyGenericComparer<double>();
double val1 = genFloat.Compare(10.9, 9.9);
Console.WriteLine("Greatest Value = " + val1);