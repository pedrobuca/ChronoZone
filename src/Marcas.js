import orient from './assets/casio.jpg'
import casio from './assets/casio.jpg'
import citizen from './assets/citizen.png'
import seculus from './assets/seculus.png'


function Marcas() {
    return (
       <div>

           <div className="flex justify-center">
                <h1 className="text-zinc-700 font-semibold text-3xl">Nossas Marcas</h1>
            </div>

      <div className='flex justify-center items-center pt-8 pb-8'>
        <div className='flex justify-around pl-6 pr-6 pb-7 pt-7 w-2/3 rounded h-auto'>
          <div className='flex items-center'>
            <img src={orient} className='w-20 h-20'/>
          </div>

          <div className='flex items-center'>
           <img src={casio} className='w-20 h-20'/>
          </div>

          <div className='flex items-center'>
          <img src={citizen} className='w-20 h-20'/>
          </div>

          <div className='flex items-center'>
          <img src={seculus} className='w-20 h-20'/>
          </div>
        </div>
      </div>

       </div>
    
    );
  }
  
  export default Marcas;
  