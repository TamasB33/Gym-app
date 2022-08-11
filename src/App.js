import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reason from './components/Reason/Reason';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import JoinUs from './components/JoinUs/JoinUs';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reason/>
          <Plans/>
          <Testimonials/>
          <JoinUs/>
          <Footer/>
    </div>
  );
}

export default App;
