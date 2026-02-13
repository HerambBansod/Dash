import NavBar from "./Components/NavBar";
import TopNvabar from "./Components/TopNvabar";

export default function Home() {
  return (
    <main className="bg-[#cccccc] w-full min-w-[332.5px] h-screen ">
      <div className="w-full flex ">
        <NavBar />
        <TopNvabar name="Dashboard" />
      </div>
      <div>
        <h1 className="text-black ">We Working on Dashboard</h1>
      </div>
    </main>
  );
}
