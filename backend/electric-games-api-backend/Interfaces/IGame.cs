// IGame.cs

namespace electric_games_api_backend.Interfaces

{
    public interface IGame
    {
      int Id { get; set; }
      string? Name { get; set; }
      int Platform { get; set; }
      string? Description { get; set; }
      double Price { get; set; }
      int Rating { get; set; }
      int ReleaseYear { get; set; }
      string Image { get; set; }

      /*Task<IEnumerable<Game>> GetGames();*/
      /*Task<Game> GetGame(int id);*/
      /*Task<Game> AddGame(Game game);*/
      /*Task<Game> UpdateGame(Game game);*/
      /*Task<Game> DeleteGame(int id);*/
    }
}
