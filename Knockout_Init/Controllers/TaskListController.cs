using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Knockout_Init.Models;
using Microsoft.Extensions.Configuration;
using Knockout_Init.Repository.Interfaces;

namespace Knockout_Init.Controllers
{
    public class TaskListController : Controller
    {
        private readonly ILogger<TaskListController> _logger;

        ITasksRepository FRepo;

        public TaskListController(ILogger<TaskListController> logger, ITasksRepository ARepo)
        {
            _logger = logger;
            FRepo = ARepo;
        }

        public IActionResult Index() => View();
        public IActionResult Read() => Ok(FRepo.Read());

        [HttpPost]
        public IActionResult Create(TaskViewModel AModel)
        {
            FRepo.Create(AModel);
            return Ok();
        }

        [HttpPost]
        public IActionResult Delete(TaskViewModel AModel)
        {
            FRepo.Delete(AModel);
            return Ok();
        }

    }
}
