using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace SQLConnection
{
    public class Student
    {
        public int AddStdProcedure(string name, string sclass,int mark)
            {
                    string connectionString = "server=localhost, 1401;database=School;user id=sa;password=Pass@word;" +
"TrustServerCertificate=true";

        using SqlConnection con = new SqlConnection(connectionString);
        con.Open();
        string query = "AddStudent";
        using SqlCommand cmd = new SqlCommand(query, con);
        cmd.CommandType = System.Data.CommandType.StoredProcedure;

        cmd.Parameters.Add("@sname", SqlDbType.VarChar, 30);
        cmd.Parameters.Add("@class", SqlDbType.VarChar, 10);
        cmd.Parameters.Add("@mark", SqlDbType.VarChar, 30);
        cmd.Parameters.Add("@idval", SqlDbType.Int).Direction = ParameterDirection.Output;

        cmd.Parameters["@sname"].Value = name;
        cmd.Parameters["@class"].Value = sclass;
        cmd.Parameters["@mark"].Value = mark;

        cmd.ExecuteNonQuery();

        int count = Convert.ToInt32(cmd.Parameters["@idval"].Value);
        return count;
            
        con.Close();

        }

        public void GetStdProcedure()
        {
            int stdID, stdmark;
            string stdname, stdclass;
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
                stdID = reader.GetInt32(0);
                stdname = reader.GetString(1);
                stdclass = reader.GetString(2);
                stdmark = reader.GetInt32(3);
                Console.WriteLine("{0},{1},{2},{3}", stdID.ToString(),stdname,stdclass,stdmark);
            }
            con.Close();

        }

    }
}
