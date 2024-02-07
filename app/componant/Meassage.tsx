import Image from 'next/image';
import User from "../image/Thinking face-bro.png";

export default function Meassage() {
    return (
        <div className=" absolute flex flex-col right-0 z-10 mt-[82px] md:mr-[277px] w-80 origin-top-right 
        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dddl:m-auto 
        dddl:top-[82px] dddl:left-0 dddl:right-0">
           
         <div  className="px-4 py-3 bg-indigo-600 text-white cursor-default rounded-t-md text-start text-[10px]">
           MEASSAGE CENTER
         </div>

         <div>

         <div  className=" flex flex-row px-4 py-2 text-black text-start text-[10px] 
         cursor-pointer hover:bg-gray-100">

            <div className="h-8 w-8 rounded-full mx-auto bg-gray-300 my-auto ">
                <div className="bg-green-500 h-3 w-3 absolute m-6 border-2 border-white rounded-full"/>
                <Image src={User} alt="User Profile" />
            </div>
            <div className="flex flex-col mx-auto">
              <h1 className="text-black text-start text-[13px]">Hi there! I am wondering if you ...</h1>
              <h1 className=" text-gray-400 text-start text-[10px]">Emily Fowler . 58m</h1>
            </div>
           
           </div>


           <div  className="bg-gray-300 w-full h-[1px]"></div>


           <div  className=" flex flex-row px-4 py-2 text-black text-start text-[10px]
           cursor-pointer hover:bg-gray-100">

            <div className="h-8 w-8 rounded-full mx-auto bg-gray-300 my-auto">
                <div className="bg-gray-300 h-3 w-3 absolute m-6 border-2 border-white rounded-full"/>
                <Image src={User} alt="User Profile" />
            </div>
            <div className="flex flex-col mx-auto">
              <h1 className="text-black text-start text-[13px]">I have the photo that you order ...</h1>
              <h1 className=" text-gray-400 text-start text-[10px]">Jae Chun . 1d</h1>
            </div>
           
           </div>


           <div  className="bg-gray-300 w-full h-[1px]"></div>

        
           <div  className=" flex flex-row px-4 py-2 text-black text-start text-[10px]
           cursor-pointer hover:bg-gray-100">

            <div className="h-8 w-8 rounded-full mx-auto bg-gray-300 my-auto">
                <div className="bg-orange-500 h-3 w-3 absolute m-6 border-2 border-white rounded-full"/>
                <Image src={User} alt="User Profile" />
            </div>
            <div className="flex flex-col mx-auto">
              <h1 className="text-black text-start text-[13px]">Last month's Report looks great ...</h1>
              <h1 className=" text-gray-400 text-start text-[10px]">Mogen Alvariz . 2d</h1>
            </div>
           
           </div>


           <div  className="bg-gray-300 w-full h-[1px]"></div>


           <div  className=" flex flex-row px-4 py-2 text-black text-start text-[10px]
           cursor-pointer hover:bg-gray-100">

            <div className="h-8 w-8 rounded-full mx-auto bg-gray-300 my-auto">
                <div className="bg-green-500 h-3 w-3 absolute m-6 border-2 border-white rounded-full"/>
                <Image src={User} alt="User Profile" />
            </div>
            <div className="flex flex-col mx-auto">
              <h1 className="text-black text-start text-[13px]">Am I a good Boy? the reason I a...</h1>
              <h1 className=" text-gray-400 text-start text-[10px]">Chicken the Dog . 2w</h1>
            </div>
           
           </div>
           
           <div  className="bg-gray-300 w-full h-[1px]"></div>

         </div>


       <div  className="px-4 py-2   text-gray-400  rounded-b-md text-center text-[10px]
       cursor-pointer hover:bg-gray-100">
        Read More Meassages
        </div>
      
        </div>
    );
  }