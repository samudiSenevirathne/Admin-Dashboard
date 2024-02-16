import Header from "./Header";
import  Footer  from "./Footer";
import { FaDownload } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdNoteAlt } from "react-icons/md";
import  LineChart  from "./LineChart";

import React, { ReactNode } from 'react';

export default function Dashboard() {
    return (
      <main className="text-center w-full  bg-gray-200 ">
          <Header />

          <div className="flex flex-row justify-between ">
            <h1 className="text-2xl m-5 text-gray-600">Dashboard</h1>
            <button className="bg-indigo-500 text-white py-1 px-2 text-sm rounded-md m-5 flex 
            flex-row my-auto hover:bg-indigo-600 dddl:hidden ddl:flex shadow-md" >
                <FaDownload className="text-gray-300 justify-start my-auto mr-2"/>
                Generate Report</button>
          </div>

          <div className="grid dll:grid-cols-4 gap-3 ddl:grid-cols-2 grid-cols-1 mx-2 my-2">  
           <div className="bg-white w-full rounded-md grid grid-cols-3 gap-1" style={{ boxShadow: "4px 0 0px #6366f1 inset" }}>
           <div className=" col-span-2 pl-2 py-2 m-4">
               <h1 className=" text-indigo-500 text-[11px] font-semibold text-start">EARNINGS (MONTHLY)</h1>
              <h1 className="text-gray-600 text-xl font-semibold text-start "> 
              $40,000
              </h1>
            </div>
            <FaCalendar className="text-gray-300 my-auto mx-auto h-8 w-8"/>
            </div>

           <div className="bg-white w-full rounded-md grid grid-cols-3 gap-1" style={{ boxShadow: "4px 0 0px #22c55e inset" }}>
           <div className=" col-span-2 pl-2 py-2 m-4">
               <h1 className=" text-green-500 text-[11px] font-semibold text-start">EARNINGS (ANNUAL)</h1>
              <h1 className="text-gray-600 text-xl font-semibold text-start "> 
              $215,000
              </h1>
            </div>
            <FaDollarSign className="text-gray-300 my-auto mx-auto h-8 w-8"/>
           </div>

           <div className="bg-white w-full rounded-md grid grid-cols-3 gap-1" style={{ boxShadow: "4px 0 0px #0ea5e9 inset" }}>
           <div className=" col-span-2 pl-2 py-2 m-4">
               <h1 className=" text-sky-500 text-[11px] font-semibold text-start">TASKS</h1>
               <div className="flex flex-row">
              <h1 className="text-gray-600 text-xl font-semibold text-start">50%</h1>
              <div className="bg-gray-200 rounded-full w-60 h-3 my-auto ml-2">
               <div className="bg-sky-500 rounded-full w-1/2 h-3 my-auto "/>
              </div>
              </div>
            </div>
            <MdNoteAlt  className="text-gray-300 my-auto mx-auto h-8 w-8"/>
           </div>
           
           <div className="bg-white w-full rounded-md grid grid-cols-3 gap-1" style={{ boxShadow: "4px 0 0px #eab308 inset" }}>
           <div className=" col-span-2 pl-2 py-2 m-4">
               <h1 className=" text-yellow-500 text-[11px] font-semibold text-start">PENDING REQUESTS</h1>
              <h1 className="text-gray-600 text-xl font-semibold text-start ">18</h1>
            </div>
            <BiSolidMessageRounded className="text-gray-300 my-auto mx-auto h-8 w-8"/>
           </div>

          </div>
            
          <div className="flex flex-row w-full">
            <div className="bg-white w-3/4 border rounded-xl m-2">
          <div className="flex flex-col items-center justify-center border rounded-xl h-[400px]">
              <LineChart />
         </div>
         </div>
          <div className="w-1/4">
            gg
          </div>
          </div>

          <div>
           
          </div>

          <div>
           
          </div>

          <Footer/>
      </main>
    );
  }
