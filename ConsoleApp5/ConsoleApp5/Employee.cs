using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    public class Employee
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public double EmpSalary { get; set; }
        public Employee(int id) 
        {
            EmpId = id;
        }
        public Employee(int id, string name) : this(id)
        {
            EmpName = name;
        }
        public Employee(int id, string name,double salary) :this(id,name)
        {
            EmpSalary = salary;
        }

        public void Display()
        {
            Console.WriteLine("Employee Id: "+ EmpId);
            Console.WriteLine("Employee Name: " + EmpName);
            Console.WriteLine("Employee Salary: " + EmpSalary);
        }
    }


}

