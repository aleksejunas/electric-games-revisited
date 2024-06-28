import NavBar from '../components/shared/NavBar/NavBar';

const AboutPage = () => {
  return (
    <>
      <NavBar />

      <div className="flex justify-items-center m-10 p-5 shadow-lg shadow-green-600 border-2 border-solid border-green-600 rounded-sm">
        <p className="text-2xl font-mono text-green-600">
          At Electric Games, we believe in the power of gaming to bring people
          together. Our platform offers a space for gamers to connect, share
          their experiences, and engage in lively discussions. In addition to
          our vast game collection, we provide comprehensive game reviews,
          insightful articles, and the latest news in the gaming world. Our
          dedicated team works tirelessly to ensure you stay updated with the
          ever-evolving gaming industry. Join us at Electric Games, where the
          fun never stops and every day is a new adventure!"
        </p>
      </div>
    </>
  );
};

export default AboutPage;
