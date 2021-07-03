import Recipes from "./Recipes";
import swordSvg from "../images/sword.svg";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <img src={swordSvg} alt="sword" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
