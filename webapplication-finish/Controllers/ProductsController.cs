using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace webapplication.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet,Authorize(Roles = "Manager")]
        public IEnumerable<string> Get()
        {
            return new string[] { "Laptop", "Mouse", "Monitor", "Headset", "Keyboard" };
        }

    }
}
