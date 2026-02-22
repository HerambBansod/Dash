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
    User,
} from "lucide-react";
import MenuList from "./MenuList";

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

    const loginMenu =[
        { name: "Login", icon: User },
    ]
   
    return (
        <aside className=" `w-65` bg-[#f1faee] h-screen p-6 flex flex-col gap-8">
            <MenuList title="Main Menu" items={menu} />
            <MenuList title="Account" items={loginMenu} />

        </aside>
    );
}
