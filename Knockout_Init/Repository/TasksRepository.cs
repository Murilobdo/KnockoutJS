using Knockout_Init.Models;
using Knockout_Init.Repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Knockout_Init.Repository
{
    public class TasksRepository : ITasksRepository
    {
         
        private readonly string LPathData = "Data.json";

        public TasksRepository() { }

        public List<TaskViewModel> Read()
        {
            List<TaskViewModel> LTasks = new List<TaskViewModel>();
            using (StreamReader FRead = new StreamReader(LPathData))
            {
                JArray LJson = JArray.Parse(FRead.ReadToEnd());
                LTasks = JsonConvert.DeserializeObject<List<TaskViewModel>>(LJson.ToString());
            }
            return LTasks;
        }

        public void Create(TaskViewModel AModel)
        {
            List<TaskViewModel> LTasks = new List<TaskViewModel>();
            JsonConvert.PopulateObject(JArray.Parse(File.ReadAllText(LPathData)).ToString(), LTasks);
            LTasks.Add(AModel);
            using (StreamWriter file = File.CreateText(LPathData))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, LTasks);
            }
        }

        public void Delete(TaskViewModel AModel)
        {
            List<TaskViewModel> LTasks = new List<TaskViewModel>();
            JsonConvert.PopulateObject(JArray.Parse(File.ReadAllText(LPathData)).ToString(), LTasks);
            LTasks = LTasks.Where(p => p.DesTask != AModel.DesTask).ToList();
            using (StreamWriter file = File.CreateText(LPathData))
            {
                JsonSerializer serializer = new JsonSerializer();
                serializer.Serialize(file, LTasks);
            }
        }
    }
}
