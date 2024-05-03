import Button from "./components/Button";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";

import ButtonSvg from "./assets/svg/ButtonSvg";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
