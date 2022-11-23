import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import MainSection from "./components/main-section/main-section";
import './App.scss';
import FeaturedCollection from "./components/featured-collection/featured-collection";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
      <Footer/>
    </div>
  );
}

export default App;
