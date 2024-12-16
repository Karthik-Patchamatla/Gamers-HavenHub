import Brands from './components/Brands';
import Consoles from './components/Consoles';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PCHardwares from './components/PCHardwares';
import Footer from './components/Footer';
import BestSellers from './components/BestSellers';

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <BestSellers/>
      <Brands/>
      <Consoles/>
      <PCHardwares/>
      <Footer/>
    </div>
  )
}

export default App;
