
using Microsoft.Data.SqlClient;
using WebAPI1.Models;

namespace WebAPI1.Repository
{
    public class StudentManagement
    {
        public List<Student> GetStdProcedure()
        {
            List<Student> students = new List<Student>();
            string connectionString = "server=localhost, 1401;database=School;user id=sa;password=Pass@word;" +
"TrustServerCertificate=true";

            using SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "GetStudent";
            using SqlCommand cmd = new SqlCommand(query, con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            using SqlDataReader reader = cmd.ExecuteReader();
            Console.WriteLine("Table Data:");
            while (reader.Read())
            {
                Student std=new Student(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetInt32(3));
                students.Add(std);
                }
            return students;

            }
    }
}
