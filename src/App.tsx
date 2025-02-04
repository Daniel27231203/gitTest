import Hero from "./components/Sections/Hero";
import HeroBottom from "./components/Sections/secondSection/HeroBottom";
import Header from "./components/header/Header";
import Create from "./components/section-create/Create";
import WorkTab from "./components/workTab/WorkTab";


function App() {
  return (
    <>
      <Header />
      
      <Hero />
      <HeroBottom />
      <WorkTab />
      <Create />
    </>
  );
}

export default App;
