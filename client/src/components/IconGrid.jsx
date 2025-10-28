import { Home, Target, Users, Brain, Gift, Copyright, Menu, X } from 'lucide-react';

function GridItem({ title, icon: Icon, bgColor, textColor = 'text-gray-800' }) {
    return (
        <a
            href="#"
            className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${bgColor} ${textColor} aspect-square`}
        >
            <Icon size={48} className="mb-3" />
            <h3 className="text-base sm:text-lg font-semibold text-center">{title}</h3>
        </a>
    );
}

function IconGrid() {
    // Data for the 6 grid items
    const gridItems = [
        { title: "Teer Result", icon: Target, bgColor: "bg-blue-600", textColor: "text-white" },
        { title: "Social Network", icon: Users, bgColor: "bg-white" },
        { title: "Dream Number", icon: Brain, bgColor: "bg-red-500", textColor: "text-white" },
        { title: "Win Prizes", icon: Gift, bgColor: "bg-teal-400", textColor: "text-white" },
        { title: "Teer & Lottery HOME", icon: Home, bgColor: "bg-white" },
        { title: "Common Number", icon: Copyright, bgColor: "bg-red-500", textColor: "text-white" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gridItems.map((item) => (
                <GridItem
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                />
            ))}
        </div>
    );
}

export default IconGrid;