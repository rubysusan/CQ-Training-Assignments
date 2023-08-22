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
        [EnableCors("AllowOrigin")]
        public IActionResult get()
        {
            return Ok(dbContext?.Employees);
        }

    }
}
