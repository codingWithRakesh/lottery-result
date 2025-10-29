import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NavButtons() {
  const navLinks = [
    { title: "PREDICT NOW", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    { title: "MY PREDICTIONS", bg: "bg-teal-400", hover: "hover:bg-teal-500", text: "text-white" },
    { title: "MY WINS", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    { title: "SCORE BOARD", bg: "bg-teal-400", hover: "hover:bg-teal-500", text: "text-white" },
  ];

  return (
    <nav className="w-full mb-6">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href="#"
            className={`p-3 rounded-lg text-center font-semibold transition-colors duration-300 ${link.bg} ${link.hover} ${link.text || 'text-gray-800'}`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6 w-full max-w-4xl">
        <NavButtons />
        {/* <BottomNav/> */}
      </main>
      
      <Footer />
    </div>
  );
}