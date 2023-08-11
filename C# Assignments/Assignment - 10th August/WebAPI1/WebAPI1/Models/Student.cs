namespace WebAPI1.Models
{
    public class Student
    {
        public int id { get; set; }
        public string name { get; set; }
        public string classname { get; set; }
        public int mark { get; set; }
        public Student(int i,string n,string c,int m)
        {
            id = i;
            name = n;
            classname = c;
            mark = m;
        }
    }
}
