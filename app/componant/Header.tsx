'use client'
 
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import User from "../image/Thinking face-bro.png";
import { FaBars } from "react-icons/fa";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";
import Meassage from "./Meassage";
import Alert from "./Alert";

export default function Header() {

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isMeassageVisible, setMeassageVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);

    const togglePopUp = () => {
        setPopUpVisible(!isPopUpVisible);
    };

    const toggleMeassage = () => {
      setMeassageVisible(!isMeassageVisible);
    };

    const toggleAlert = () => {
      setAlertVisible(!isAlertVisible);
    };

    return (
        <nav className="flex flex-row justify-between bg-white shadow-gray shadow-md">

        <div className="w-2/5 flex flex-row">

             <div className=" h-8 w-9  ml-6 rounded-full my-auto bg-white hover:bg-gray-200 hover:cursor-pointer"/>

            <FaBars className=" text-indigo-600 absolute m-8 hover:cursor-pointer" />
            
                <SearchBar/>
             
        </div>


          <div className="w-2/5 flex flex-row justify-evenly">

          <FaSearch className="my-auto text-gray-300 cursor-pointer hover:text-gray-400 "/>

          <div className="flex flex-row cursor-pointer">
          <FaBell  onClick={toggleAlert} className={`my-auto text-gray-300 hover:text-gray-400 
          ${isAlertVisible ? "text-gray-500" : ""}`}/>
          <div className="bg-red-500 h-3 w-4 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">3+</div>
          </div>
         
          <div className="flex flex-row cursor-pointer">
          <FaEnvelope onClick={toggleMeassage}  className={`my-auto text-gray-300 hover:text-gray-400 
          ${isMeassageVisible ? "text-gray-500" : ""}`} />
         
          <div className="bg-red-500 h-3 w-3 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">7</div>
          </div>

           <div  className="bg-gray-300 h-8 w-[1px] my-auto "></div>

           <div className=" flex flex-row " >
           <h1 className="my-auto text-gray-500 mr-3 cursor-pointer" onClick={togglePopUp}>Dougles McGee</h1>
           <div className="h-8 w-8 rounded-full bg-gray-300 my-auto cursor-pointer" onClick={togglePopUp}>
                        <Image src={User} alt="User Profile" />
            </div>
           
           </div>
           
           {isPopUpVisible && <PopUp />}
           {isMeassageVisible && <Meassage />}
           {isAlertVisible && <Alert />}

          </div>

      </nav>
  );

}



