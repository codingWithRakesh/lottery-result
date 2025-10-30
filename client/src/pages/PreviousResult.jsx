import { useEffect, useState } from "react";
import TableComponent from "../components/TableComponent";
import { Link } from "react-router-dom";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = ["2025", "2024", "2023", "2022", "2021"];

function PreviousResult() {
  const [selectedMonth, setSelectedMonth] = useState("August");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLastThreeMonthsResult = async () => {
      setData([]);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URI}/api/v1/result/past-three-months`
        );

        if (!response.ok) throw new Error("Failed to fetch monthly result");

        const result = await response.json();
        // console.log("Fetched Data:", result.data);

        const formattedData = result.data.map((item) => {
          const FR = item.results.find((r) => r.timeslot === "FR");
          const SR = item.results.find((r) => r.timeslot === "SR");
          const date = `${item.day} ${months[item.month - 1]} ${item.year}`;

          return {
            city: "BHUTAN",
            date,
            fr: FR ? FR.number : "-",
            sr: SR ? SR.number : "-",
          };
        });

        setData(formattedData);
      } catch (err) {
        console.error("Error fetching monthly results:", err);
      } finally {
        setLoading(false);
      }
    };
    getLastThreeMonthsResult()
  }, []);

  const getMonthlyResult = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData([]);

    try {
      const monthNumber = months.indexOf(selectedMonth) + 1;

      const requestData = {
        month: monthNumber,
        year: parseInt(selectedYear),
      };

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URI}/api/v1/result/monthly-result`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch monthly result");

      const result = await response.json();
      // console.log("Fetched Data:", result.data);
      const formattedData = result.data.map((item) => {
        const FR = item.results.find((r) => r.timeslot === "FR");
        const SR = item.results.find((r) => r.timeslot === "SR");
        const date = `${item.day} ${months[item.month - 1]} ${item.year}`;

        return {
          city: "BHUTAN",
          date,
          fr: FR ? FR.number : "-",
          sr: SR ? SR.number : "-",
        };
      });

      setData(formattedData);
    } catch (err) {
      console.error("Error fetching monthly results:", err);
    } finally {
      setLoading(false);
    }
  };

  const quickLinks = [
    { imgSrc: "/socialNumber.jpeg", to: "" },
    { imgSrc: "/onlineShopping.jpeg", to: "" },
    { imgSrc: "/commonNumber.jpeg", to: "/common-numbers" },
    { imgSrc: "/targetGame.jpeg", to: "/targetgame" },
    { imgSrc: "/reputedCountries.jpeg", to: "/reputedcounter" },
    { imgSrc: "/teerCalendar.jpeg", to: "/teer-calendar" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6">
            PREVIOUS RESULTS
          </h2>

          {/* ===== FORM ===== */}
          <form
            onSubmit={getMonthlyResult}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label
                htmlFor="month-select"
                className="font-medium text-gray-700 text-sm"
              >
                Month:
              </label>
              <select
                id="month-select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full sm:w-auto p-2.5 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label
                htmlFor="year-select"
                className="font-medium text-gray-700 text-sm"
              >
                Year:
              </label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full sm:w-auto p-2.5 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2.5 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {loading ? "Loading..." : "SUBMIT"}
            </button>
          </form>
        </div>

        {/* ===== TABLE ===== */}
        <TableComponent header={["CITY", "DATE", "F/R", "S/R"]} body={data} />
      </main>

      {/* ===== QUICK LINKS ===== */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-[4px] justify-items-center px-1 py-3">
        {quickLinks.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 overflow-hidden border border-gray-800 dark:border-gray-200 bg-white dark:bg-gray-900 hover:scale-[1.04] transition-transform duration-200"
          >
            <img
              src={item.imgSrc}
              alt={`link-${index}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PreviousResult;
