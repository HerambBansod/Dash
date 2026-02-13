import { FaRegClock } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageMinus } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

function TopNvabar({name = "default"}) {
  return (
    <div className="w-full h-16 bg-[#ffffff] flex items-center justify-between px-4 border-b border-gray-300 shadow-md rounded-sm text-md">
      <div className="flex items-center gap-2">
        <span className=" font-semibold text-gray-800">{name} </span>
        <FaAngleRight className="text-gray-400" />
        <div className="flex items-center gap-2 mt-1 text-gray-800">
          <FaRegClock />

          <span className="  font-semibold text-gray-800">Attendance</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-800 text-xl">
        <IoIosNotificationsOutline />
        <BiMessageMinus />
        <CiSearch />
      </div>
    </div>
  );
}

export default TopNvabar;
