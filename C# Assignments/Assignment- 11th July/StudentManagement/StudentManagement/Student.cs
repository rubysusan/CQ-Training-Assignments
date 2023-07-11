using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentManagement
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Mark { get; set; }
        public char Grade { get; }

        public Student(int id,string name,int mark)
        {
            Id = id;
            Name = name;
            Mark = mark;
            Grade=calcGrade(Mark);
        }
        public char calcGrade(int mark)
        {
            if (mark >= 90)
                return 'A';
            else if (mark >= 80 && mark < 90)
                return 'B';
            else if (mark >= 70 && mark < 80)
                return 'C';
            else if (mark < 70)
                return 'D';
            return 'F';
        }
        public void display()
        {
            Console.WriteLine("Student Details:");
            Console.WriteLine("ID : " + Id);
            Console.WriteLine("Name : " + Name);
            Console.WriteLine("Mark : " + Mark);
            Console.WriteLine("Grade : " + Grade);
        }
    }
}
