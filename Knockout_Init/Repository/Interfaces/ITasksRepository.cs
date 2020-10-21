using Knockout_Init.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Knockout_Init.Repository.Interfaces
{
    public interface ITasksRepository
    {
        List<TaskViewModel> Read();
        void Create(TaskViewModel AModel);
        void Delete(TaskViewModel AModel);
    }
}
