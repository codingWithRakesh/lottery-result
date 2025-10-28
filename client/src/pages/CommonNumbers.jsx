import React from 'react';

// Using lucide-react for icons.
// In a real project, you'd install this with: npm install lucide-react
// For this single-file example, we'll use placeholder components.
// A real setup would be: import { Target, Users, Brain, Gift, Home, ClipboardList } from 'lucide-react';

// --- Icon Placeholders ---
// In a real environment, you'd import these. We define simple SVGs or components.
const Target = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);
const Users = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const Brain = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9.5 9.5 0 0 0-3.53 18.25h.06a9.5 9.5 0 0 0 7.03 0h.06A9.5 9.5 0 0 0 12 2z"></path>
        <path d="M12 2v6c0 2.2 1.8 4 4 4h0"></path>
        <path d="M12 2v6c0 2.2-1.8 4-4 4h0"></path>
        <path d="M12 12v9"></path>
        <path d="M16 12a4 4 0 1 1-8 0"></path>
    </svg>
);
const Gift = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="4"></rect>
        <path d="M12 8v13"></path>
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A2.5 2.5 0 0 1 12 5.5V8"></path>
        <path d="M16.5 8a2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 12 5.5V8"></path>
    </svg>
);
const Home = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);
const ClipboardList = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 11h.01"></path>
        <path d="M8 16h.01"></path>
    </svg>
);
// --- End Icon Placeholders ---


/**
 * Header Component
 * Displays the top bar with the site title and date.
 */
const SiteHeader = () => {
    // Get current date in DD-MM-YYYY format.
    // The image shows 28-10-2025, so we'll hardcode that for accuracy.
    const displayDate = "28-10-2025";

    return (
        <header className="bg-blue-100 p-2 text-sm">
            <div className="container mx-auto flex justify-between items-center max-w-6xl">
                <span className="font-bold text-gray-700">Teer-Bhutan.com</span>
                <span className="font-semibold text-gray-800">{displayDate}</span>
            </div>
        </header>
    );
};

/**
 * ResultsTable Component
 * A reusable table for displaying Teer results.
 * @param {object} props
 * @param {string} props.title - The title for the table (e.g., "BHUTAN").
 * @param {string} props.direct - The "Direct" result value.
 * @param {string} props.house - The "House" result value.
 * @param {string} props.ending - The "Ending" result value.
 */
const ResultsTable = ({ title, direct, house, ending }) => {
    return (
        <div className="w-full max-w-6xl mx-auto overflow-hidden border border-gray-300 rounded-lg">
            <table className="w-full text-center border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th colSpan="3" className="py-2 text-base font-bold text-black border-b border-gray-300">
                            {title}
                        </th>
                    </tr>
                    <tr className="bg-teal-500 text-black font-semibold">
                        <td className="p-2 border-r border-gray-300">Direct</td>
                        <td className="p-2 border-r border-gray-300">House</td>
                        <td className="p-2">Ending</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white text-lg font-bold">
                        <td className="p-3 border-r border-gray-300">{direct}</td>
                        <td className="p-3 border-r border-gray-300">{house}</td>
                        <td className="p-3">{ending}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

/**
 * NavItem Component
 * A reusable navigation block for the main grid.
 * @param {object} props
 * @param {string} props.title - The text for the block.
 * @param {React.ElementType} props.Icon - The icon component to render.
 * @param {string} props.bgColor - The Tailwind background color class.
 * @param {string} [props.textColor] - The Tailwind text color class.
 * @param {string} [props.borderColor] - The Tailwind border color class.
 */
const NavItem = ({ title, Icon, bgColor, textColor = 'text-white', borderColor = 'border-transparent' }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 aspect-square ${bgColor} ${textColor} ${borderColor}`}
        >
            <Icon className="w-12 h-12 mb-3" />
            <span className="font-bold text-center">{title}</span>
        </div>
    );
};

/**
 * Main Navigation Grid
 * Contains the 6 icon-based navigation blocks.
 */
const NavGrid = () => {
    return (
        <section className="bg-teal-700 py-6 px-4">
            <div className="container mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <NavItem
                    title="Teer Result"
                    Icon={Target}
                    bgColor="bg-blue-800"
                />
                <NavItem
                    title="Social Network"
                    Icon={Users}
                    bgColor="bg-white"
                    textColor="text-black"
                />
                <NavItem
                    title="Dream Number"
                    Icon={Brain}
                    bgColor="bg-red-500"
                />
                <NavItem
                    title="Win Prizes"
                    Icon={Gift}
                    bgColor="bg-teal-500"
                />
                <NavItem
                    title="Teer & Lottery HOME"
                    Icon={Home}
                    bgColor="bg-white"
                    textColor="text-black"
                    borderColor="border border-gray-300"
                />
                <NavItem
                    title="Previous Result"
                    Icon={ClipboardList}
                    bgColor="bg-teal-500"
                />
            </div>
        </section>
    );
};

/**
 * Footer Component
 * Displays the bottom links.
 */
const SiteFooter = () => {
    return (
        <footer className="container mx-auto max-w-6xl flex justify-between items-center p-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Terms</a>
            <a href="#" className="text-blue-600 hover:underline">Contact Us</a>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </footer>
    );
};

/**
 * Main App Component
 * Assembles the entire page layout.
 */
export default function CommonNumbers() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SiteHeader />

            <main className="container mx-auto max-w-6xl px-4 py-4">
                <div className="space-y-4">
                    <ResultsTable
                        title="BHUTAN"
                        direct="18,59"
                        house="7"
                        ending="0"
                    />
                    <ResultsTable
                        title="BHUTAN"
                        direct="43"
                        house="6"
                        ending="3"
                    />
                </div>

                <p className="text-xs text-center text-gray-700 my-4">
                    Disclaimer : These common numbers are purely based on certain calculations done using past results. There is no guarantee of the accuracy of these numbers.
                </p>
            </main>

            <NavGrid />

            <SiteFooter />
        </div>
    );
}