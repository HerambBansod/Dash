import NavBar from "./Components/NavBar";
import TopNvabar from "./Components/TopNvabar";
import AttendanceCalender from "./Components/AttendanceCalender";
import AttendanceList from "./Components/AttendanceList";
import { Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-[#f8faf7]">
      {/* Sidebar - Fixed width, light sage background */}
      <div className="w-64 bg-[#f1f6ed] border-r border-gray-200 hidden md:block">
        <NavBar />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <TopNvabar />

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Breadcrumbs & Title Section */}
          <div className="mb-8">
           
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance</h1>
            <p className="text-gray-500 max-w-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi placeat libero laboriosam.
            </p>
          </div>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#e9f0d1] p-6 rounded-2xl">
              <AttendanceCalender />
            </div>
            
            <div className="bg-[#e9f0d1] p-6 rounded-2xl">
              <AttendanceList name="Abhishek" />
            </div>

            <div className="bg-[#e9f0d1] p-6 rounded-2xl">
              <AttendanceCalender />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
