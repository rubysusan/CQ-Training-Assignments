using EmployeeApplication.Model;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {


        private readonly EmployeeApplicationContext? dbContext;

        public LocationController(EmployeeApplicationContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpPost("InsertLocation")]
        public void post(string name )
        {
            Location loc = new Location();
            loc.Name = name;
            dbContext?.Add(loc);
            dbContext?.SaveChanges();
        }
        [HttpDelete("DeleteByID")]
        public void delete( int id)
        {
            Location loc = new Location();
            loc.Id = id;
            dbContext?.Remove(loc);
            dbContext?.SaveChanges();
        }
        [HttpGet("SelectByID")]
        public IActionResult get(int id)
        {
            return Ok(dbContext?.Locations.Find(id));
        }
        [HttpGet("SelectAll")]
        public IActionResult get()
        {
            return Ok(dbContext?.Locations);
        }
        [HttpPut("UpdateByID")]
        public void put(int id,string name)
        {
            Location loc = new Location();
            var updateLoc = dbContext?.Locations.FirstOrDefault(x=>x.Id.Equals(id));
            updateLoc.Name= name;
            dbContext?.SaveChanges();
        }

    }
}
