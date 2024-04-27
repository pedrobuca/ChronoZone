import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Slide from './Components/Slide';

import { GoCreditCard } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { MdOutlinePix } from "react-icons/md";
import Novidades from './Components/Novidades/Novidades';
import Marcas from '../src/Marcas';



function App() {
  return (
    <div>
      <Navbar/>
        <div className='h-App'>
          <Slide/>

          <div className='flex justify-center items-center pt-8 pb-8'>
            <div className='flex justify-around bg-zinc-100 pl-6 pr-6 pb-7 pt-7 w-2/3 rounded h-auto'>
              <div className='flex items-center'>
                <GoCreditCard className='w-12 h-12 text-zinc-500'/>
                <h1 className='ml-4'>Todo site com até</h1><span className='text-black font-semibold ml-2'>10X sem juros</span>
              </div>

              <div className='flex items-center'>
               <GoGift className='w-12 h-12 text-zinc-500'/>
                <span className='text-black ml-4 font-semibold'>Embalagem para presente</span><h1 className='ml-2'>para relogio femenino</h1>
              </div>

              <div className='flex items-center'>
              <MdOutlinePix className='w-12 h-12 text-zinc-500'/>
                <span className='text-black ml-4 font-semibold'>Ganhe mais 10% de desconto</span><h1 className='ml-2'>no pix</h1>
              </div>
            </div>
          </div>
        </div>

        <Novidades/>
        <Marcas/>
      <Footer/>
    </div>
  );
}

export default App;
