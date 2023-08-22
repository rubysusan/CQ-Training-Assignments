using EmployeeModel;
using EmployeeRepository.Context;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAngularAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : Controller
    {
        private readonly EmployeeContext? dbContext;

        public EmployeeController(EmployeeContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpPost("InsertEmployee")]
        public void post([FromBody]Employee emp)
        {
          
          
            dbContext?.Add(emp);
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
        [HttpDelete("DeleteByID")]
        public void delete(int id)
        {
            Employee employee = new Employee();
            employee.Id = id;
            dbContext?.Remove(employee);
            dbContext?.SaveChanges();
        }
        [HttpPut("UpdateByID")]
        public void put(Employee emp, int id)
        {
            var updateEmp = dbContext?.Employees.FirstOrDefault(x => x.Id.Equals(id));
            updateEmp.FirstName = emp.FirstName;
            updateEmp.LastName = emp.LastName;
            updateEmp.DateOfBirth = emp.DateOfBirth;
            updateEmp.Age = emp.Age;
            updateEmp.DateOfJoining = emp.DateOfJoining;
            updateEmp.Country = emp.Country;
            dbContext?.SaveChanges();
        }

    }
}
