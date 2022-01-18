import './App.css';
import { Navbar } from './components/Navbar'
import { Principal } from './sections/Principal';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Principal />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
