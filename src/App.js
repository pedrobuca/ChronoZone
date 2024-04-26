import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Slide from './Components/Slide';

function App() {
  return (
    <div>
      <Navbar/>
        <div className='h-App'>
          <Slide/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
