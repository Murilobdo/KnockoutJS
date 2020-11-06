using System.ComponentModel.DataAnnotations;
using Knockout_Init.Helpers;

namespace Knockout_Init.Models
{
    public class PersonViewModel
    {
        [Display(Name = "Nome")]
        public string DesNome { get; set; }
        [Display(Name = "Sobrenome")]
        public string DesSobrenome { get; set; }

        [UIHint(UHInts.Dropdown)]
        public int MyProperty { get; set; }

        public PersonViewModel()
        {
            
        }
    }
}