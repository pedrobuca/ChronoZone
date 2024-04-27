import img1 from '../../assets/img1.jpg'



function Card() {
    return (
      <div className="flex flex-col w-60 h-auto pt-2 pb-2">
        <div className='flex justify-center'>
            <img src={img1}/>
        </div>

        <div className='flex justify-center p-4'>
            <span>nome</span>
        </div>

        <div className='flex justify-center'>
          <a className='flex justify-center p-2 rounded-lg bg-black text-white w-52 cursor-pointer'>
            BUY NOW
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  