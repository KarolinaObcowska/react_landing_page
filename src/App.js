import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { aboutObj, teamObj } from './Components/Info/Data';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Info from './Components/Info/Info';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Navigation />
        <Info {...aboutObj} />
        <Services />
        <Info {...teamObj} />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
