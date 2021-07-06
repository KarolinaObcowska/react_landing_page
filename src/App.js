import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import { aboutObj, teamObj } from './Components/Info/Data';
import Navigation from './Components/Navigation/Navigation';
import Info from './Components/Info/Info';


function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Navigation />
        <Info {...aboutObj} />
        <Info {...teamObj} />
      </Router>
    </div>
  );
}

export default App;
