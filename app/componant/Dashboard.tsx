import Header from "./Header";
import  Footer  from "./Footer";

export default function Dashboard() {
    return (
      <main className="text-center w-full border-black border-2 rounded-md">
          <Header />
          Home
          <Footer/>
      </main>
    );
  }