import { NavBar } from "./components/NavBar";
import { Home }   from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import Portfolio from "./components/Portfolios"
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contacts"
function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
