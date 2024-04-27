import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function Footer() {
  return (
    <footer className="flex  justify-center h-64">

        <div className="flex justify-between w-3/4 pt-14">
          <div>
            <div >
              <ul className="flex">
                <li className="hover:text-orange-400 transition-all"><a href="/">Blog</a></li>
                <li className="ml-8 hover:text-orange-400 transition-all"><a href="/">FAQs</a></li>
                <li className="ml-8 hover:text-orange-400 transition-all"><a href="/">Contact us</a></li>
              </ul>
            </div>

            <div className="mt-24">
              <span>©2018 All Rights Reserverd. Made with  by Colorlib & distributed by <span className="text-red-500 font-semibold">ChronoZone</span></span>
            </div>

          </div>

          <div>
            <ul className="flex">

            <li><a href="/"><FaFacebookF className="hover:text-orange-400 transition-all"/></a></li>
            <li className="ml-8"><a href="/"><FaInstagram className="hover:text-orange-400 transition-all"/></a></li>
            <li className="ml-8"><a href="/"><FaTwitter className="hover:text-orange-400 transition-all"/></a></li>
            </ul>
          </div>

        </div>
    </footer>
  );
}

export default Footer;
