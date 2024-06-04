import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import FeaturedWork from "./components/sections/featuredWork";
import Footer from "./components/sections/footer";
import Intro from "./components/sections/intro";
import Work from "./components/sections/work";

function App() {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Intro />
      <Hero />
      <About />
      <FeaturedWork />
      <Work />
      <Footer />
    </>
  );
}

export default App;
