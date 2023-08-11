using Microsoft.AspNetCore.Mvc;
using WebAPI1.Repository;

namespace WebAPI1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetStudents()
        {
            StudentManagement std = new StudentManagement();
            return Ok(std.GetStdProcedure());
        }
    }
}
