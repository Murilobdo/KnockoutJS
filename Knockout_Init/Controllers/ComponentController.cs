using System.Collections.Generic;
using Knockout_Init.Models;
using Microsoft.AspNetCore.Mvc;


namespace Knockout_Init.Controllers
{
    public class ComponentController : Controller
    {
        public IActionResult Index() => View(new PersonViewModel());
        



        public IActionResult ReadDropdown()
        {
            return Ok(new List<string>(){"MG", "SP", "SC"});
        } 
    }
}
