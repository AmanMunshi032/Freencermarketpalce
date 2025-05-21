import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=''>
            <footer  className=" bg-gray-200 text-black ">
  <div  className="  md:flex md:justify-around  md:items-center   max-w-7xl mx-auto px-6 py-12 ">
    
    {/* <!-- Links --> */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a></li>
        <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
        <li><a href="/developers" className="hover:text-blue-400 transition">Developer Resources</a></li>
      </ul>
    </div>

    {/* <!-- Social Media --> */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
       <Link><FaFacebook  size={24}/> </Link>
       <Link><FaGithub  size={24}/> </Link>
       <Link><FaInstagramSquare  size={24}/> </Link>
     
      </div>
    </div>

    {/* <!-- Contact --> */}
    <div className=''>
      <h3 className="text-lg font-semibold mb-4 ">Contact</h3>
      <p className="text-sm text-black">Email: Amanmunshi3236@gmail.com</p>
      <p className="text-sm text-black">Phone: 01928779670</p>
     <p className="text-sm text-black">Address: 123 Street, City, Country</p>
    </div>
  </div>

</footer>

        </div>
    );
};

export default Footer;