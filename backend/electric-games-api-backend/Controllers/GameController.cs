// GameController.cs

#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using electric_games_api_backend.Context;
using electric_games_api_backend.Models;

namespace electric_games_api_backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase
{

  private readonly GameContext context;

  public GameController(GameContext _context)
  {
      context = _context;
  }

  /************
  GET ALL GAMES
  ************/

[HttpGet]
public async Task<ActionResult<List<Game >>> Get()
{
    try
    {
        List<Game> games = await context.Game.ToListAsync();
        return games;
    }
    catch
    {
      return StatusCode(500);
    }
}

/*************
GET GAME BY ID
*************/

[HttpGet("{id}")] 
public async Task<ActionResult<Game>> Get(int id)
{
    try
    {
        Game game = await context.Game.FindAsync(id);
        return game;
    }
    catch
    {
        return StatusCode(500);
    }
}

/****************
 GET GAME BY NAME
 ***************/

[HttpGet]
[Route("[action]/{name})"]
public async Task<ActionResult<List<Game>>> Get(string name)
{
    List <Game> games await context.Game.Where( game =>
        game.Name.ToLower() = name ).ToListAsync();
        return games;
}

/****************
DELETE GAME BY ID
****************/

[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    try
    {
        Game gameToDelete = await context.Game.FindAsync(id);
        if ( gameToDelete != null )
        {
            context.Game.Remove(gameToDelete);
            await context.SaveChangesAsync();
            return NoContent();
        }
        else 
        {
          return NotFound();
        }
    }
    catch 
    {
        return StatusCode(500)
    }
}

/**********
CREATE GAME
**********/

[HttpPost]
public async Task<ActionResult<Game>>  Post (Game newGame);
{
    context.Game.Add(newGame);
    await context.SaveChangesAsync();
    return CreatedAtAction("Get", new {id = newGame.Id}, newGame);
}

/****************
MODIFY GAME BY ID
****************/

[HttpPut("{id}")]
public async Task<IActionResult> Put(Game editedGame)
{
    context.Entry(editedGame).State = EntityState.Modified;
    await context.SaveChangesAsync();
    return NoContent();
}

}
