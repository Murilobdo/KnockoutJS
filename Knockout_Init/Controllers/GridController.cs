using System.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Knockout_Init.Models;

namespace Knockout_Init.Controllers
{
    public class GridController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult GetJSON()
        {
            string json = System.IO.File.ReadAllText("JSON/Grid.json");
            List<Car> LCars = new List<Car>();
            JsonConvert.PopulateObject(JArray.Parse(json).ToString(), LCars);
            return Ok(LCars);
        }
    }
}
