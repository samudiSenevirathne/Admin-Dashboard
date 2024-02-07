import { FaSearch } from "react-icons/fa";

export default function SearchBarTemp() {
    return (
        <div className="absolute flex flex-row right-0 z-10 w-80 origin-top-right 
        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dddl:m-auto 
        dddl:top-[82px] dddl:left-0 dddl:right-0">

      <input className="w-full mt-5 ml-1 mb-5 bg-gray-100 rounded-l-lg 
      py-2 px-2 text-gray-600  placeholder:text-gray-500 sm:text-sm sm:leading-6
      focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-300 " 
      type="text"  name="title" placeholder="Search for..."/>

      <button className="flex mr-1 mt-5 mb-5 w-10  mx-auto justify-center rounded-r-lg
       bg-indigo-600 px-3 focus:ring-4 focus:ring-offset-inherit focus:ring-indigo-300 
      py-1.5 text-sm font-semibold hover:bg-indigo-700" type="button" > 
      <FaSearch className="my-auto text-white" />
      </button>
      
      </div>

    );
  }