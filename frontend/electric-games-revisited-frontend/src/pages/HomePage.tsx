import NavBar from '../components/shared/NavBar/NavBar';
import '../components/shared/NavBar/NavBar.css';

const HomePage = () => {
  return (
    <>
      <div className="bg-yellow-400">
        <NavBar />
        <h1 className="flex mt-5 justify-center text-2xl">
          Welcome to Ǝlectric Games
        </h1>
        {/* <ExampleArticle /> */}
      </div>
    </>
  );
};

export default HomePage;
