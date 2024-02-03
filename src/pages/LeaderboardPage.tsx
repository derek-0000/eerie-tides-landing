import { Link } from "react-router-dom";
import ResultsTable from "../components/ResultsTable";
import { useEffect, useState } from "react";

export default function LeaderboardPage() {
//   const [resultsData, setResultsData] = useState([]);
//   const [player, setPlayer] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSearch = async () => {
    setButtonLoading(true);
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        setButtonLoading(false);
        resolve({ gtag: "Player 1", time: "1:00", deaths: 0 });
      }, 400);
    });
    return response
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3000/api/records");
    //     const data = await response.json();
    //     setResultsData(data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <div className="p-16">
      <div className="flex justify-between items-center mb-8">
        <div className="leaderboard-title text-7xl ">LEADERBOARD</div>
        <div className="h-full flex justify-right items-center gap-8">
          <div className="flex ">
            <input
              type="text"
              className="h-14 w-full px-4 text-6xl player-input bg-transparent border border-gray-400 rounded-l-sm rounded-r-sm focus:outline-none"
              placeholder="GAMERTAG"
            />
            <button
              disabled={buttonLoading}
              onClick={handleSearch}
              className="player-search-button min-w-36 disabled:cursor-not-allowed flex items-center justify-center call-to-action text-4xl bg-white text-black px-8 py-2 rounded-sm rounded-l-none hover:bg-black hover:text-white"
            >
              {buttonLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "SEARCH"
              )}
            </button>
          </div>
          <Link
            to={"/"}
            className="call-to-action text-4xl bg-white text-black px-8 py-2 rounded-sm hover:bg-black hover:text-white"
          >
            HOME
          </Link>
        </div>
      </div>
      <ResultsTable />
    </div>
  );
}
