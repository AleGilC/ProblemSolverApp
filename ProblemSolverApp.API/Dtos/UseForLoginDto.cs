using System.ComponentModel.DataAnnotations;

namespace ProblemSolverApp.API.Dtos
{
    public class UseForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}