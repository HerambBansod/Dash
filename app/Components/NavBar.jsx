import React from "react";
import {
    Home,
    BookOpen,
    Clock,
    FileText,
    ClipboardList,
    Calendar,
    Users,
    MessageCircle,
    PieChart,
    BarChart3,
    Sparkles,
    Building2,
    TvMinimal,
} from "lucide-react";

export default function NavBar() {

    const menu = [
        { name: "Overview", icon: Home },
        { name: "Class Preparation", icon: BookOpen },
        { name: "Attendance", icon: Clock },
        { name: "Exams", icon: FileText },
        { name: "Assignment management", icon: ClipboardList },
        { name: "Schedule", icon: Calendar },
        { name: "Students", icon: Users },
        { name: "Messages", icon: MessageCircle },
        { name: "Analytics", icon: PieChart },
        { name: "Reports", icon: BarChart3 },
    ];

    const settingMenu = [
        { name: "School News", icon: Sparkles },
        { name: "School Activities", icon: Building2 },
        { name: "What's New", icon: TvMinimal },
    ];

    const MenuList = ({ title, items }) => (
        <div className="w-full">
            <h1 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {title}
            </h1>

            <ul className="flex flex-col gap-1">
                {items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <li
                            key={i}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer text-gray-700 text-[13px] hover:bg-white hover:shadow-sm transition-all"
                        >
                            <Icon size={18} className="text-gray-500" />
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    return (
        <aside className="w-[260px] bg-[#f1faee] h-screen p-6 flex flex-col gap-8">
            <MenuList title="Main Menu" items={menu} />
            <MenuList title="Settings & News" items={settingMenu} />
        </aside>
    );
}
