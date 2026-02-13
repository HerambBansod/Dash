import NavBar from "./Components/NavBar";
import TopNvabar from "./Components/TopNvabar";

export default function Home() {
  return (
  <main className="bg-[#cccccc] w-full `min-w-332.5` h-screen ">
    <NavBar />
    <TopNvabar name="Dashboard" />
    <div>
        <h1 className="text-black ">We Working on Dashboard</h1>
    </div>
  </main>
  );
}
