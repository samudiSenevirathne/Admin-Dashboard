import Dashboard from "./componant/Dashboard";
import SideBar from "./componant/SideBar";

export default function Home() {
  return (
    <main className="text-center mx-auto flex flex-colomn ">
         <SideBar/>
         <Dashboard/>
    </main>
  );
}
