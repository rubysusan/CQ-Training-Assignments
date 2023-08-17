using EmployeeApplication.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {


        private readonly EmployeeApplicationContext? dbContext;

        public EmployeeController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpPost("InsertEmployee")]
        public void post(EmpDupe emp)
        {
            Employee employee = new Employee();
            employee.FirstName = emp.FirstName;
            employee.LastName = emp.LastName;
            employee.Email = emp.Email;
            employee.PhoneNumber = emp.PhoneNumber;
            employee.DepartmentId = emp.DepartmentId;
            dbContext?.Add(employee);
            dbContext?.SaveChanges();
        }
        [HttpDelete("DeleteByID")]
        public void delete(int id)
        {
            Employee employee = new Employee();
            employee.Id = id;
            dbContext?.Remove(employee);
            dbContext?.SaveChanges();
        }
        [HttpGet("SelectByID")]
        public IActionResult get(int id)
        {
            return Ok(dbContext?.Employees.Find(id));
        }
        [HttpGet("SelectAll")]
        public IActionResult get()
        {
            return Ok(dbContext?.Employees);
        }
        [HttpPut("UpdateByID")]
        public void put(EmpDupe emp, int id)
        {
            var updateEmp = dbContext?.Employees.FirstOrDefault(x => x.Id.Equals(id));
            updateEmp.FirstName = emp.FirstName;
            updateEmp.LastName = emp.LastName;
            updateEmp.Email = emp.Email;
            updateEmp.PhoneNumber = emp.PhoneNumber;
            updateEmp.DepartmentId = emp.DepartmentId;
            dbContext?.SaveChanges();
        }

    }
}