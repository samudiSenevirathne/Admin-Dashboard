'use client'

import { useState } from "react";

import { BsEmojiWinkFill } from "react-icons/bs";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";

import Image from 'next/image';
import Rocket from "../image/Outer space-cuate.png";


export default function SideBar() {

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
    const onBtn = () => {
      setIsBtnClicked(!isBtnClicked);
    };

    return (
      <main className="text-center mx-auto bg-indigo-500 dddl:hidden ddl:block">

           <div className={`cursor-pointer ${isBtnClicked ? "flex flex-col" : "flex flex-row "}`} >
           <BsEmojiWinkFill  className={` h-9 w-9 text-white  relative -rotate-45 
           ${isBtnClicked ? "mb-2 mt-2 mx-auto" : "mt-4  left-8"}`}/>
         <div className={`text-white text-lg font-bold w-[220px] py-5  relative  font-mono 
         ${isBtnClicked ? "hidden" : "block"}`}> SB ADMIN
            <sup className=" text-white font-bold font-mono p-2">2</sup>
            </div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <div className={` px-4 py-4 cursor-pointer 
          ${isBtnClicked ? "flex flex-col" : "flex flex-row "}`} >
          <RiDashboard3Fill className={` text-white 
            ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`}/>
              <div className={` text-sm text-white font-bold
                ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>
              Dashboard</div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <h1 className={`text-gray-400 text-[10px] font-bold py-2
           ${isBtnClicked ? "mx-auto" : "text-start pl-3"}`}>
            INTERFACE</h1>

          <div className={`py-4 px-4 cursor-pointer
           ${isBtnClicked ? "flex flex-col" : "flex flex-row"}`}>
          <IoSettingsSharp className={` text-white 
           ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`} />
              <div className={` text-sm text-white 
               ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>Componants</div>
              <MdKeyboardArrowRight className={`text-gray-400  my-auto ml-28 
               ${isBtnClicked ? "hidden" : "block"}`}/>
          </div>

          <div className={`px-4 py-4 cursor-pointer
           ${isBtnClicked ? "flex flex-col" : "flex flex-row"}`} >
          <AiFillTool   className={` text-gray-400 hover:text-white
            ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`}/>
              <div className={`text-sm text-gray-200 hover:text-white
              ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>Utilities</div>
              <MdKeyboardArrowRight className={`text-gray-400 my-auto ml-36 
               ${isBtnClicked ? "hidden" : "block"}`}/>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

            <h1 className={`text-gray-400 text-[10px] font-bold py-2
              ${isBtnClicked ? "mx-auto" : "text-start pl-3"}`}>ADDONS</h1>

            <div className={`px-4 py-4 cursor-pointer
              ${isBtnClicked ? "flex flex-col" : "flex flex-row"}`} >
            <FaFolder   className={` text-gray-400 hover:text-white
            ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`}/>
                <div className={`text-sm text-gray-200 hover:text-white
                ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>Pages</div>
                <MdKeyboardArrowRight className={`text-gray-400 my-auto ml-[150px] 
                  ${isBtnClicked ? "hidden" : "block"}`}/>
            </div>

            <div className={`px-4 py-4 cursor-pointer
             ${isBtnClicked ? "flex flex-col" : "flex flex-row"}`} >
            <FaChartArea className={`text-gray-400 hover:text-white
             ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`}/>
                <div className={`text-sm text-gray-200 hover:text-white
                ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>Charts</div>
            </div>

            <div className={`px-4 py-4 cursor-pointer
             ${isBtnClicked ? "flex flex-col" : "flex flex-row"}`} >
            <FaTable    className={`text-gray-400 hover:text-white
             ${isBtnClicked ? "mx-auto mb-1" : "justify-start"}`} />
                <div className={`text-sm text-gray-200 hover:text-white
                ${isBtnClicked ? "mx-auto text-xs" : "ml-3"}`}>Tables</div>
            </div>

            <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2  "></div>
         

            <div className="h-10 w-10 rounded-full mx-auto bg-gray-400 opacity-35 m-5 cursor-pointer"
            onClick={onBtn}>
            <MdKeyboardArrowRight className={`text-white m-3 absolute 
             ${isBtnClicked ? "" : "-rotate-180"}`}/>
            </div>

            <div className={`relative h-52  mx-auto rounded-lg z-10 mb-3
            ${isBtnClicked ? "w-28 mx-2 h-72" : "w-52 h-52 "}`}>
            <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-lg "/>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={Rocket} alt="Rocket" className="absolute h-12 w-12 top-6"/>
            </div>
            <div className="relative z-10">
              <h1 className="text-center text-[12px] text-gray-400 relative top-20 ml-2 mr-3 ">
                <small className="text-[12px] text-gray-400 font-bold">SB Admin Pro </small>
                is packed with premium features, <br/>components, and more!
              </h1>
              <button className="bg-green-400 text-white  p-2 text-sm rounded-md relative top-24
              hover:bg-opacity-70" >
                Upgrade to Pro!</button>
            </div>
         </div>


      </main>
    );
  }
  