import {
  NavBar,
  Acievement,
  About,
  Team,
  Contact,
  Home,
  Event,
  Footer,
} from "./Components";
import Developer from "./Components/developer";

function App() {
  return (
    <>
      <div className="text-text-100 bg-background-950 font-OpenSans">
        <NavBar />
        <div className=" bg-herobgMobile sm:bg-herobg bg-cover bg-no-repeat bg-center">
          <Home />
        </div>
        <About />
        <Event />
        <Acievement />
        <Team />
        <Developer />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
