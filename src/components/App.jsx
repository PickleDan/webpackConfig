import Recipes from "./Recipes";
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

import '../styles/index.scss'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello, mister!</h1>
        </section>
        <img src={sword} alt="sword" width="250px" />
        <img src={swordSvg} alt="sword" width="250px" />
        <Recipes />
      </main>
    </>
  );
};

export default App
