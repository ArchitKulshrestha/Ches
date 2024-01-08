import {
  NavBar,
  Acievement,
  About,
  Team,
  Contact,
  Home,
  Event,
  Footer,
  Developer,
} from "./Components";

function App() {
  return (
    <>
      <div className="text-text-100 bg-gradient-to-tr from-[#110514] to-[#220a29] font-OpenSans">
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
