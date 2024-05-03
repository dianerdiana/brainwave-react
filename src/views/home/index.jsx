import Benefits from "./Benefits";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
    </div>
  );
};

export default Home;
