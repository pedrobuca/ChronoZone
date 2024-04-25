import { FaCartShopping } from "react-icons/fa6";




function Cart() {
    return (
      <div className="flex relative items-center justify-center w-10 h-10 bg-zinc-200 rounded-full cursor-pointer ml-4">
        <FaCartShopping />

          <div className="flex absolute -top-1 -right-1 items-center justify-center w-4 h-4 bg-red-600 rounded-cart text-white text-xs cursor-pointer">
          2
      </div>

      </div>
    );
  }
  
  export default Cart;
  