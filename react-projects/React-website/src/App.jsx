import "./App.css";
import { Navbar } from "./components/navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import { Advantages } from "./components/Advantages.jsx";
import { Mvp } from "./components/Mvp.jsx";
import { Expertise } from "./components/Expertise.jsx";
import { Development } from "./components/Development.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { Getittouch } from "./components/Getittouch.jsx";
import { Footer } from "./components/Footer.jsx";
import { LastFooter } from "./components/Last-footer.jsx";
 function App() {
   return (
    <>
    <Navbar />
    <Hero />
    <Features /> 
    <Advantages />   
    <Mvp />
    <Expertise />
    <Development />
    <FAQ />
    <Getittouch />
    <Footer />
    <LastFooter />
  </>
  );
}

export default App;
