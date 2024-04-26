import relogio from '../assets/relog.png'
import Button from './Button';

function Slide() {
  return (
    <div className='flex items-center justify-center p-16 bg-slide '>
       
        <div className='flex w-4/5 justify-around items-center'>

        <div>
        <h1 className='text-6xl text-white'>
        Get up to 30% Off 
        </h1>
        <h1 className='text-4xl text-white'>
        New Arrivals
        </h1>
        
        <div className='mt-12'>

        <Button title="SHOP NOW" 
        style="text-white bg-yellow-900 pt-3 pb-3 pl-10 pr-10 rounded-sm"/>

        </div>

        </div>

        <div>
           <img src={relogio}/>
        </div>

        </div>
          
    </div>
  );
}

export default Slide;
