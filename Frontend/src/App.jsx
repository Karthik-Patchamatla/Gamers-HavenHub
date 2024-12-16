import Brands from './components/Brands';
import Consoles from './components/Consoles';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PCHardwares from './components/PCHardwares';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Consoles/>
      <Brands/>
      <PCHardwares/>
      <Footer/>
    </div>
  )
}

export default App;
