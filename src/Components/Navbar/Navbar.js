import Cart from "./Cart";
import User from "./User";


function Navbar() {
    return (
      <div className="``2">
          <div className="flex  justify-center items-center bg-white w-full p-8">

            <div className="flex justify-between items-center w-2/3">
               <div className="flex items-center">
                <h1 className="text-2xl font-semibold cursor-pointer">
                  Chrono<strong className="text-red-600">Zone</strong>
                </h1>
                </div>

               <div className="flex items-center">
                 
                  <ul className="flex text-sm mr-8">
                    <li className="m-3 cursor-pointer  hover:text-zinc-400 transition-all">HOME</li>
                    <li className="m-3 cursor-pointer  hover:text-zinc-400 transition-all">SHOP</li>
                    <li className="m-3 cursor-pointer hover:text-zinc-400 transition-all">BLOG</li>
                    <li className="m-3 cursor-pointer  hover:text-zinc-400 transition-all">CONTACT</li>
                  </ul>
                    <div className="flex ml-4 items-center">
                       <User/>
                       <Cart/>
                    </div>
               </div>
            </div>

         </div>
      </div>
    );
  }
  
  export default Navbar;
  