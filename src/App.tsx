import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import FeaturedWork from "./components/sections/featuredWork";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import Intro from "./components/sections/intro";

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
