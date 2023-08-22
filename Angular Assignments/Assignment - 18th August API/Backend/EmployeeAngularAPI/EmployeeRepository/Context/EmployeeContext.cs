using EmployeeModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeRepository.Context
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions option) : base (option) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
