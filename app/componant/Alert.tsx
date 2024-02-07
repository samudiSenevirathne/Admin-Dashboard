import { IoDocumentText } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";

export default function Alert() {
    return (
        <div className=" absolute flex flex-col right-0 z-10 mt-[82px] mr-[330px] w-80 origin-top-right 
        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           
         <div  className="px-4 py-3 bg-indigo-600 text-white cursor-default rounded-t-md text-start text-[10px]">
           ALERTS CENTER
         </div>

         <div>

         <div className="px-0 py-2 grid grid-cols-3 gap-4 hover:bg-gray-100">
            <dt className="h-10 w-10 rounded-full mx-auto bg-indigo-600 my-auto ">
            <IoDocumentText className="text-white m-3"/>
            </dt>
            <dd className=" col-span-2">
               <h1 className=" text-gray-400 text-start text-[10px]">December 12, 2019</h1>
              <h1 className="text-black text-[13px] text-start"> 
              A new monyhly report is ready to download!
              </h1>
            </dd>
           </div>

           <div  className="bg-gray-300 w-full h-[1px]"></div>

          <div className="px-0 py-2 grid grid-cols-3 gap-4 hover:bg-gray-100">
            <dt className="h-10 w-10 rounded-full mx-auto bg-green-500 my-auto ">
            <FaCircleDollarToSlot  className="text-white m-3"/>
            </dt>
            <dd className=" col-span-2">
               <h1 className=" text-gray-400 text-start text-[10px]">December 7, 2019</h1>
              <h1 className="text-black text-[13px] text-start"> 
              $290.29 has been deposited into your account!
              </h1>
            </dd>
           </div>

           <div  className="bg-gray-300 w-full h-[1px]"></div>

           <div className="px-0 py-2 grid grid-cols-3 gap-4 hover:bg-gray-100">
            <dt className="h-10 w-10 rounded-full mx-auto bg-orange-500 my-auto ">
            <IoWarning  className="text-white m-3"/>
            </dt>
            <dd className="= col-span-2">
               <h1 className=" text-gray-400 text-start text-[10px]">December 2, 2019</h1>
              <h1 className="text-black text-[13px] text-start"> 
                Spending Alert: We've noticed unusually high spending for your account.
              </h1>
            </dd>
           </div>

           <div  className="bg-gray-300 w-full h-[1px]"></div>

         </div>


       <div  className="px-4 py-2   text-gray-400  rounded-b-md text-center text-[10px]
       cursor-pointer hover:bg-gray-100">
        Show All Alerts
        </div>
      
        </div>
    );
  }