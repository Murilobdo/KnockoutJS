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
        [Display(Name = "Estado")]
        public int DesEstado { get; set; }

        [UIHint(UHInts.Number)]
        [Display(Name = "Idade")]
        public int ValIdade { get; set; }

        public PersonViewModel()
        {
            
        }
    }
}