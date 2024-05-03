import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";

const Home = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
    </div>
  );
};

export default Home;
