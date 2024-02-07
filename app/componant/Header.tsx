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
import SearchBarTemp from "./SearchBarTemp";

export default function Header() {

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isMeassageVisible, setMeassageVisible] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isSearchBarTempVisible, setSearchBarTempVisible] = useState(false);

    const togglePopUp = () => {
        setPopUpVisible(!isPopUpVisible);
    };

    const toggleMeassage = () => {
      setMeassageVisible(!isMeassageVisible);
    };

    const toggleAlert = () => {
      setAlertVisible(!isAlertVisible);
    };

    const toggleSearchBarTemp = () => {
      setSearchBarTempVisible(!isSearchBarTempVisible);
    };

    return (
        <nav className="flex flex-row  dlll:justify-evenly lg:justify-evenly dll:justify-between bg-white shadow-gray shadow-md dddl:h-20 ">

        <div className="w-2/5 flex flex-row">

             <div className=" h-8 w-9  ml-6 rounded-full my-auto bg-white hover:bg-gray-200 hover:cursor-pointer dddl:block ddl:hidden"/>

            <FaBars className=" text-indigo-600 absolute m-8 hover:cursor-pointer dddl:block ddl:hidden" />
            
                <SearchBar />
             
        </div>


          <div className="w-2/5 flex flex-row justify-evenly">

          <FaSearch onClick={toggleSearchBarTemp} className={`my-auto mx-auto text-gray-300 cursor-pointer
           hover:text-gray-400 dddl:block ddl:hidden ${isSearchBarTempVisible ? "text-gray-500" : ""}`} />

          <div className="flex flex-row cursor-pointer mx-auto">
          <FaBell  onClick={toggleAlert} className={`my-auto text-gray-300 hover:text-gray-400 
          ${isAlertVisible ? "text-gray-500" : ""}`}/>
          <div className="bg-red-500 h-3 w-4 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">3+</div>
          </div>
         
          <div className="flex flex-row cursor-pointer mx-auto">
          <FaEnvelope onClick={toggleMeassage}  className={`my-auto text-gray-300 hover:text-gray-400 
          ${isMeassageVisible ? "text-gray-500" : ""}`} />
         
          <div className="bg-red-500 h-3 w-3 text-center text-white text-[8px] rounded-sm mt-7 ml-2 absolute ">7</div>
          </div>

           <div  className="bg-gray-300 h-8 w-[1px] my-auto mx-auto"></div>

           <div className=" flex flex-row ">
           <h1 className="my-auto text-gray-500 mr-3 cursor-pointer dddl:hidden dlll:block" onClick={togglePopUp}>Dougles McGee</h1>
           <div className="h-8 w-8 rounded-full bg-gray-300 my-auto cursor-pointer" onClick={togglePopUp}>
                        <Image src={User} alt="User Profile" />
            </div>
           
           </div>
           
           {isPopUpVisible && <PopUp />}
           {isMeassageVisible && <Meassage />}
           {isAlertVisible && <Alert />}
           {isSearchBarTempVisible &&<SearchBarTemp/>}

          </div>

      </nav>
  );

}



