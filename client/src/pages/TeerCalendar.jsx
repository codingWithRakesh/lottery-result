import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const CalendarTable = () => {
    const [calendarData, setCalendarData] = useState([]);

    useEffect(() => {
        const generateCalendarData = () => {
            const data = [];
            const startDate = new Date('2025-10-30T12:00:00');

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            for (let i = 0; i < 100; i++) {
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + i);

                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                const dayName = days[currentDate.getDay()];

                data.push({
                    id: i,
                    date: `${year}-${month}-${day}`,
                    day: dayName,
                    teer: 'Yes',
                });
            }
            return data;
        };

        setCalendarData(generateCalendarData());
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider"
                                >
                                    Day
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 text-left text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider"
                                >
                                    Bhutan Teer
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {calendarData.map((row, index) => (
                                <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {row.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {row.day}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                                        {row.teer}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default function TeerCalendar() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-inter">
            <Navbar />

            <main className="flex-grow">
                <CalendarTable />
            </main>

            {/* <BottomNav/> */}
            <Footer />
        </div>
    );
}
