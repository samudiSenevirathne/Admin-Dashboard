export default function Header() {
    return (
        <nav className="flex ddl:flex-row justify-between dddl:flex-col border-black border-2 rounded-md">

        <div className="flex flex-row justify-between">
             <h1 className=" text-black text-2xl font-bold ml-5">Navbar</h1>
       </div>

          <ul className=" ddl:flex list-none mt-1 dddl:mx-5 dddl:flex-col ddl:flex-row dddl:hidden nav ">

              <li className="mr-5 text-1xl text-black font-dancing cursor-pointer ">
              setting
              </li>

          </ul>

      </nav>
  );
}



