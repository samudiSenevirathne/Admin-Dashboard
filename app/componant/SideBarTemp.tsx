import { BsEmojiWinkFill } from "react-icons/bs";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";


export default function SideBarTemp({ isSideBarTempVisible }: { isSideBarTempVisible: boolean }) {

    return (
      <main className={`text-center mx-auto bg-indigo-600 absolute
      ${isSideBarTempVisible ? "dddl:block ddl:hidden absolute left-0" : "dddl:hidden ddl:block"}`}>

           <div className="cursor-pointer flex flex-col" >
           <BsEmojiWinkFill  className="h-9 w-9 text-white  relative -rotate-45 
            mb-2 mt-2 mx-auto"/>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <div className="px-4 py-4 cursor-pointer flex flex-col">
          <RiDashboard3Fill className="text-white mx-auto mb-1"/>
              <div className="text-sm text-white font-bold mx-auto">Dashboard</div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

          <h1 className="text-gray-400 text-[10px] font-bold py-2 mx-auto">
            INTERFACE</h1>

          <div className="py-4 px-4 cursor-pointer flex flex-col">
          <IoSettingsSharp className="text-white mx-auto mb-1"/>
              <div className="text-sm text-white mx-auto">Componants</div>
          </div>

          <div className="py-4 px-4 cursor-pointer flex flex-col">
          <AiFillTool   className="text-gray-400 hover:text-white mx-auto mb-1"/>
              <div className="text-sm text-gray-200 hover:text-white mx-auto">Utilities</div>
          </div>

          <div  className="bg-gray-100 opacity-40 h-[1px] ml-2 mr-2 "></div>

            <h1 className="text-gray-400 text-[10px] font-bold py-2 mx-auto">ADDONS</h1>

            <div className="py-4 px-4 cursor-pointer flex flex-col">
            <FaFolder   className="text-gray-400 hover:text-white mx-auto mb-1"/>
                <div className="text-sm text-gray-200 hover:text-white mx-auto">Pages</div>
            </div>

            <div className="py-4 px-4 cursor-pointer flex flex-col">
            <FaChartArea className="text-gray-400 hover:text-white mx-auto mb-1"/>
                <div className="text-sm text-gray-200 hover:text-white mx-auto">Charts</div>
            </div>

            <div className="py-4 px-4 cursor-pointer flex flex-col">
            <FaTable  className="text-gray-400 hover:text-white mx-auto mb-1"/>
                <div className="text-sm text-gray-200 hover:text-white mx-auto">Tables</div>
            </div>

      </main>
    );
  }
  