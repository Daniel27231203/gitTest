import Hero from "./components/Sections/Hero";
import HeroBottom from "./components/Sections/secondSection/HeroBottom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Create from "./components/section-create/Create";
import WorkTab from "./components/workTab/WorkTab";


function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Hero />
          <HeroBottom />
          <WorkTab />
          <Create />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
