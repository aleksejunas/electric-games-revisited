// Game.cs

using System.ComponentModel.DataAnnotations;
using electric_games_api_backend.Interfaces;
using electric_games_api_backend.Models;

public class Game : IGame
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Platform { get; set; }
    public string? Description { get; set; }
    public double Price { get; set; }
    public int Rating { get; set; }
    public int ReleaseYear { get; set; }
    public string Image { get; set; } = null!;
}





