using EmployeeApplication.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {


        private readonly EmployeeApplicationContext? dbContext;

        public DepartmentController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpPost("InsertDept")]
        public void post( DeptDupe dept)
        {
            Department department = new Department();
            department.Name = dept.Name;
            department.LocationId = dept.LocationId;
            dbContext?.Add(department);
            dbContext?.SaveChanges();
        }
        [HttpDelete("DeleteByID")]
        public void delete(int id)
        {
            Department dept=new Department();
            dept.Id = id;
            dbContext?.Remove(dept);
            dbContext?.SaveChanges();
        }
        [HttpGet("SelectByID")]
        public IActionResult get(int id)
        {
            return Ok(dbContext?.Departments.Find(id));
        }
        [HttpGet("SelectAll")]
        public IActionResult get()
        {
            return Ok(dbContext?.Departments);
        }
        [HttpPut("UpdateByID")]
        public void put(DeptDupe dept, int id)
        {
            var updateDept = dbContext?.Departments.FirstOrDefault(x => x.Id.Equals(id));
            updateDept.Name = dept.Name;
            updateDept.LocationId = dept.LocationId;
            dbContext?.SaveChanges();
        }

    }
}
