using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Knockout_Init.Controllers
{
    public class ConverterController : Controller
    {
        public IActionResult Index() => View();
    }
}
