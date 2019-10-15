using System.Threading.Tasks;
using ProblemSolverApp.API.Models;

namespace ProblemSolverApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);

         Task<User> Login(string userName, string password);

         Task<bool> UserExists(string userName);
    }
}