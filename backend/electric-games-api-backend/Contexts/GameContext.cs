// GameContext.cs

#nullable disable
using Microsoft.EntityFrameworkCore;
using electric_games_api_backend.Models;

namespace electric_games_api_backend.Contexts
{
    public class GameContext : DbContext
    {
        public GameContext(DbContextOptions<GameContext> options) : base(options)
        {
        }
        public DbSet<Game> Games { get; set; }
    }
}

