import { useState, useEffect } from "react";

interface Result {
  gtag: string;
  time: string;
  deaths: number;
}

export default function ResultsTable() {
  const [resultsData, setResultsData] = useState<Result[]>([]);

  useEffect(() => {
    // Fetch data from MongoDB API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/records"); // Replace with your API endpoint
        const data = await response.json();
        setResultsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="w-[100%]">
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Gamertag</th>
            <th className="border border-gray-400 px-4 py-2">Time</th>
            <th className="border border-gray-400 px-4 py-2">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result) => (
            <tr key={result.gtag}>
              <td className="border border-gray-400 px-4 py-2">
                {result.gtag}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.time}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {result.deaths}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
