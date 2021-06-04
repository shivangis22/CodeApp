import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Topsection from './Components/Top Section/Topsection.js';
import Section2 from './Components/Section2/Section2.js';
import Section3 from './Components/Section3/Section3.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topsection/>
      <Section2/>
      <Section3/>
      <Footer/>
      
    </div>
  );
}

export default App;
