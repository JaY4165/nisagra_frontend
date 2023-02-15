import homeImg from "../assets/home2.png";

const HomePage = () => {
  return (
    <main>
      <div className="flex items-center justify-around h-screen w-screen flex-col sm:flex-row">
        <h1 className="text-5xl font-bold text-purple-400 pt-32">
          NISAGRA FOODS
        </h1>
        <figure>
          <img
            src={homeImg}
            alt="Burger"
            className="opacity-90 h-[100%] w-[100%] sm:h-[80%] sm:w-[80%] md:ml-40"
          />
        </figure>
      </div>
    </main>
  );
};

export default HomePage;
