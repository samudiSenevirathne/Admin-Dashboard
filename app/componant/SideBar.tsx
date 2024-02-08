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
    return (
      <main className="text-center mx-auto bg-indigo-600 dddl:hidden ddl:block">

           <div className="flex flex-row  cursor-pointer">
           <BsEmojiWinkFill  className=" h-9 w-9 text-white mt-4 left-8 relative -rotate-45 "/>
         <div className=" text-white text-lg font-bold w-[220px] py-5  relative  font-mono "> SB ADMIN
            <sup className=" text-white font-bold font-mono p-2">2</sup>
            </div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <div className="flex flex-row px-4 py-4 cursor-pointer">
          <RiDashboard3Fill className="justify-start text-white " />
              <div className=" ml-3 text-sm text-white font-bold">Dashboard</div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <h1 className="text-gray-400 text-[10px] font-bold text-start py-2 pl-3">INTERFACE</h1>

          <div className="flex flex-row px-4 py-4 cursor-pointer">
          <IoSettingsSharp className="justify-start text-white " />
              <div className=" ml-3 text-sm text-white ">Componants</div>
              <MdKeyboardArrowRight className=" text-gray-400  my-auto ml-28 "/>
          </div>

          <div className="flex flex-row px-4 py-4 cursor-pointer">
          <AiFillTool   className="justify-start text-gray-400 hover:text-white" />
              <div className=" ml-3 text-sm text-gray-200 hover:text-white">Utilities</div>
              <MdKeyboardArrowRight className=" text-gray-400 my-auto ml-36 "/>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

            <h1 className="text-gray-400 text-[10px] font-bold text-start py-2 pl-3">ADDONS</h1>

            <div className="flex flex-row px-4 py-4 cursor-pointer">
            <FaFolder   className="justify-start text-gray-400 hover:text-white" />
                <div className=" ml-3 text-sm text-gray-200 hover:text-white">Pages</div>
                <MdKeyboardArrowRight className=" text-gray-400 my-auto ml-[150px] "/>
            </div>

            <div className="flex flex-row px-4 py-4 cursor-pointer">
            <FaChartArea className="justify-start text-gray-400 hover:text-white" />
                <div className="ml-3 text-sm text-gray-200 hover:text-white">Charts</div>
            </div>

            <div className="flex flex-row px-4 py-4 cursor-pointer">
            <FaTable    className="justify-start text-gray-400 hover:text-white" />
                <div className=" ml-3 text-sm text-gray-200 hover:text-white">Tables</div>
            </div>

            <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2  "></div>
          
            <div className="h-10 w-10 rounded-full mx-auto bg-gray-400 opacity-35 m-5 ">
            <MdKeyboardArrowRight className=" text-white m-3 absolute"/>
            </div>

            <div className="relative h-52 w-52 mx-auto rounded-lg z-10 mb-3">
            <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-lg "/>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={Rocket} alt="Rocket" className="absolute h-12 w-12 top-6" />
            </div>
            <div className="relative z-10">
              <h1 className="text-center text-[12px] text-gray-400 relative top-20 ml-2 mr-3 ">
                <small className="text-[12px] text-gray-400 font-bold">SB Admin Pro </small>
                is packed with premium features, <br/>components, and more!
              </h1>
              <button className="bg-green-400 text-white  p-2 text-sm rounded-md relative top-24
              hover:bg-opacity-70">
                Upgrade to Pro!</button>
            </div>
         </div>




      </main>
    );
  }
  