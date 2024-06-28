// ImageUploadController.cs

using Microsoft.AspNetCore.Mvc;

namespace electric_games_api_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    public ImageUploadController(IWebHostEnvironment _hosting);
    {
        hosting = _hosting;
    }

    [HttpGet]
    public string Get();
    {
      return "Hello from the ImageUploadController! :D";
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
      string webRootPath = hosting.webRootPath;
      string absolutePath = Path.Combine($"{webRootPath}/images/game-images/{file.FileName}");
    
      using (var fileStream = new FileStream(absolutePath, FileMode.Create))
      {
        file.CopyTo(fileStream);
      }

      return Ok();

    }
}

