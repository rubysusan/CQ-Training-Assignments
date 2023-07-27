namespace EmployeeModel
{
    public class Employee
    {
        static int count;
        public string Id { get; private set; }
        public string Name { get; set; }
        public double Salary { get; set; }
        public string EmployeeType { get; set; }
        static Employee()
        {
            count = 1000;
        }
        public Employee(string name, double sal, string type)
        {
            Id = "EMP" + count++;
            Name = name;
            Salary = sal;
            EmployeeType = type;
        }
        public void Display()
        {
            Console.WriteLine("Id: " + Id);
            Console.WriteLine("Name: " + Name);
            Console.WriteLine("Salary: " + Salary);
            Console.WriteLine("Employee Type: " + EmployeeType);
            Console.WriteLine("\n");
        }
        public void EmpCount()
        {
            Console.WriteLine("Total no. of Employees: " + (count - 1000));
        }
    }
}