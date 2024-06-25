// import ExampleArticle from '../articles/ExampleArticle'
// import MainHeader from '../components/shared/MainHeader/MainHeader'
import Card from "../components/shared/Card";
import NavBar from "../components/shared/NavBar/NavBar";
import "../components/shared/NavBar/NavBar.css";
import gamesArray from "../data/gamesArray";

const HomePage = () => {
  return (
    <>
      <div className="bg-yellow-400">
        {/* <MainHeader /> */}
        <NavBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap 4">
          {gamesArray.map((game) => (
            <Card
              key={game.id}
              id={game.id}
              description={game.description}
              title={game.title}
              genre={game.genre}
              platform={game.platform}
              image={game.image}
            />
          ))}
        </div>
        {/* <ExampleArticle /> */}
      </div>
    </>
  );
};

export default HomePage;
