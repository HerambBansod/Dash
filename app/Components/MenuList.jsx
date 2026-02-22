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


    export default MenuList;