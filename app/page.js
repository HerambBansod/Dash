import NavBar from "./Components/NavBar";
import TopNvabar from "./Components/TopNvabar";
import AttendanceCalender from "./Components/AttendanceCalender";
import AttendanceList from "./Components/AttendanceList";

export default function Home() {
  return (
    <main className="bg-[#cccccc] w-full min-w-[332.5px] h-screen flex">
      <NavBar />

      <div className="flex flex-col flex-1">
        <TopNvabar name="Dashboard" />

        <div className="flex-1 bg-white p-6 space-y-6">

          <div>
            <h1 className="text-black font-bold text-2xl">Attendance</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi placeat libero laboriosam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col h-full w-full ">
              <AttendanceCalender />
            </div>
            <AttendanceList />
            <AttendanceCalender />
          </div>

        </div>
      </div>
    </main>
  );
}
