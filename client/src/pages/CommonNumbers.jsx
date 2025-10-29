import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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


export default function CommonNumbers() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

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

            {/* <BottomNav/> */}

            <Footer />
        </div>
    );
}