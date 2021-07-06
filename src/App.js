import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
