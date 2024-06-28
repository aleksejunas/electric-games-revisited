import Card from '../components/shared/Card.tsx';
import NavBar from '../components/shared/NavBar/NavBar.tsx';
import gamesArray from '../data/gamesArray.ts';

const GamesPage = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap 4">
        {gamesArray.map(game => (
          <Card
            key={game.id}
            id={game.id}
            description={game.description}
            title={game.title}
            genre={game.genre}
            platform={game.platform}
            rating={game.rating}
            image={game.image}
          />
        ))}
      </div>
    </>
  );
};

export default GamesPage;
