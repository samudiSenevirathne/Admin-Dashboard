import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import User from "../image/Thinking face-bro.png";

export default function Header() {
    return (
        <nav className="flex flex-row justify-between bg-white shadow-gray shadow-md">

        <div className="w-2/5 flex flex-row">

             <input className="w-full ml-8 mt-5 mb-5 bg-gray-100 rounded-l-lg 
             py-2 px-2 text-gray-600  placeholder:text-gray-500 sm:text-sm sm:leading-6
             focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-300  " 
             type="text"  name="title" placeholder="Search for..."/>

             <button className="flex mt-5 mb-5 w-10  mx-auto justify-center rounded-r-lg
              bg-indigo-600 px-3 focus:ring-4 focus:ring-offset-inherit focus:ring-indigo-300 
             py-1.5 text-sm font-semibold" type="button" > 
             <FaSearch className="my-auto text-white" />
             </button>
             
        </div>


          <div className="w-2/5 flex flex-row justify-evenly">

          <div className="flex flex-row cursor-pointer">
          <FaBell className="my-auto text-gray-300" />
          <div className="bg-red-500 h-3 w-4 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">3+</div>
          </div>
         
          <div className="flex flex-row cursor-pointer">
          <FaEnvelope className="my-auto text-gray-300" />
          <div className="bg-red-500 h-3 w-3 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">7</div>
          </div>

           <div  className="bg-gray-300 h-8 w-[1px] my-auto "></div>

           <div className=" flex flex-row " >
           <h1 className="my-auto text-gray-500 mr-3 cursor-pointer">Dougles McGee</h1>
           <Image className="h-8 w-8 rounded-full bg-gray-300 my-auto cursor-pointer" src={User} alt="User Profile"/>
           </div>

          </div>

      </nav>
  );
}



