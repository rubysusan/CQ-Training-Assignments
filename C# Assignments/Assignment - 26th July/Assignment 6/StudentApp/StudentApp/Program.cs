using StudentApp;
List<Student> students=new List<Student>();
students.Add(new Student(1, "John Doe", 85));
students.Add(new Student(2, "Liam Smith", 70));
students.Add(new Student(3, "Mary James", 62));
students.Add(new Student(4, "Davide James", 55));
students.Add(new Student(5, "Lionel Messi", 100));
students.Add(new Student(6, "Ronaldo", 90));
students.Add(new Student(7, "Neymar", 85));

var maxMark=students.Max(student => student.Mark);
var stdMaxMark = students.Where(student => student.Mark == maxMark).Select(x=>x);
Console.WriteLine("Student with Maximum Mark:");
foreach (var std in stdMaxMark)
{
    Console.WriteLine("Id: "+std.Id);
    Console.WriteLine("Name: " + std.Name);
    Console.WriteLine("Mark: " + std.Mark);

}
var stdMark = students.Where(student => student.Mark >75).Select(x => x);
Console.WriteLine("\nStudent with Mark greater than 75:");
foreach (var std in stdMark)
{
    Console.WriteLine("Id: " + std.Id);
    Console.WriteLine("Name: " + std.Name);
    Console.WriteLine("Mark: " + std.Mark);

}
var stdName = students.Where(student => student.Name.EndsWith('s')).Select(x => x);
Console.WriteLine("\nStudent whose Name ends with s:");
foreach (var std in stdName)
{
    Console.WriteLine("Id: " + std.Id);
    Console.WriteLine("Name: " + std.Name);
    Console.WriteLine("Mark: " + std.Mark);
}
var stdName1 = students.Where(student => student.Name.Equals("Lionel Messi")).Select(x => x);
Console.WriteLine("\nStudent whose Name is Lionel Messi :");
foreach (var std in stdName1)
{
    Console.WriteLine("Id: " + std.Id);
    Console.WriteLine("Name: " + std.Name);
    Console.WriteLine("Mark: " + std.Mark);
}
var stdName2 = students.Where(student => student.Name.Equals("Ronaldo")).Select(x => x);
Console.WriteLine("\nMark of Student whose Name is Ronaldo :");
foreach (var std in stdName2)
{
    Console.WriteLine(std.Mark);
}