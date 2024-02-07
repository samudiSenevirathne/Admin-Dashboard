import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
       <div className="w-full flex flex-row ">

      <input className="w-full ml-8 mt-5 mb-5 bg-gray-100 rounded-l-lg 
      py-2 px-2 text-gray-600  placeholder:text-gray-500 sm:text-sm sm:leading-6
      focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-300 dddl:hidden ddl:block" 
      type="text"  name="title" placeholder="Search for..."/>

      <button className="flex mt-5 mb-5 w-10  mx-auto justify-center rounded-r-lg
       bg-indigo-600 px-3 focus:ring-4 focus:ring-offset-inherit focus:ring-indigo-300 
      py-1.5 text-sm font-semibold hover:bg-indigo-700 dddl:hidden ddl:block" type="button" > 
      <FaSearch className="my-auto text-white" />
      </button>
      
      </div>

    );
  }