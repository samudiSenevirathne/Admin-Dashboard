import { useState} from "react";

import { IoPersonSharp } from "react-icons/io5";
import { MdSettingsSuggest } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

export default function PopUp() {

    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const [ishandleSettingsClicked, setIshandleSettingsClicked] = useState(false);
    const [ishandleActivityLogClicked, setIshandleActivityLogClicked] = useState(false);
    const [ishandleLogoutClicked, setIshandleLogoutClicked] = useState(false);


    const handleProfileClick = () => {
      setIsProfileClicked(!isProfileClicked);
    };
    
      const handleSettingsClick = () => {
        setIshandleSettingsClicked(!ishandleSettingsClicked);
      };
    
      const handleActivityLogClick = () => {
        setIshandleActivityLogClicked(!ishandleActivityLogClicked);
      };
    
      const handleLogoutClick = () => {
        setIshandleLogoutClicked(!ishandleLogoutClicked);
      };

    return (
     <div className=" absolute flex flex-col right-0 z-10 mt-[83px] mr-4 w-40 origin-top-right rounded-md 
     bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        
      <div  onClick={handleProfileClick} className={`flex flex-row px-4 py-2 hover:bg-gray-100 
      cursor-pointer ${isProfileClicked ? "bg-indigo-600 hover:bg-indigo-600  " : ""}`}>
         <IoPersonSharp className="justify-start text-gray-300 " />
         <div className=" ml-3 text-sm text-gray-700"> Profile</div>
      </div>

      <div  onClick={handleSettingsClick}  className={`flex flex-row px-4 py-2 hover:bg-gray-100 
      cursor-pointer ${ishandleSettingsClicked ? "bg-indigo-600 hover:bg-indigo-600  " : ""}`}>
      <MdSettingsSuggest className="justify-start text-gray-300 "/>
         <div className=" ml-3 text-sm text-gray-700">Settings</div>
     </div>

     <div onClick={handleActivityLogClick}  className={`flex flex-row px-4 py-2 hover:bg-gray-100 
     cursor-pointer  ${ishandleActivityLogClicked ? "bg-indigo-600 hover:bg-indigo-600  " : ""}`}>
     <AiOutlineBars  className="justify-start text-gray-300 "/>
         <div className="  ml-3 text-sm text-gray-700">Activity Log</div>
     </div>

    <div  className="bg-gray-300 w-full h-[1px] mt-1 mb-1 "></div>

    <div onClick={handleLogoutClick}  className={`flex flex-row px-4 py-2 hover:bg-gray-100 
    cursor-pointer  ${ishandleLogoutClicked ? "bg-indigo-600 hover:bg-indigo-600  " : ""}`}>
    <TbLogout className="justify-start text-gray-300 " />
        <div className=" ml-3 text-sm text-gray-700">Logout</div>
    </div>

     </div>
    );
  }