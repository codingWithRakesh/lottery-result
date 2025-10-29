import TableComponent from '../components/TableComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { dreamData } from '../constants/constant.js';



export default function DreamNumbers() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4">
        <TableComponent header={["DREAM", "DIRECT", "HOUSE", "ENDING"]} body={dreamData} />
         {/* <BottomNav/> */}
      </main>
      
      <Footer />
    </div>
  );
}