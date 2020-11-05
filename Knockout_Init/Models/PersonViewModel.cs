using System.ComponentModel.DataAnnotations;

namespace Knockout_Init.Models
{
    public class PersonViewModel
    {
        [Display(Name = "Nome")]
        public string DesNome { get; set; }
        
        [Display(Name = "Sobrenome")]
        public string DesSobrenome { get; set; }

        public PersonViewModel()
        {
            
        }
    }
}