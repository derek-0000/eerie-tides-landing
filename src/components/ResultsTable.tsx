
// type Result = {
//   gtag: string;
//   time: string;
//   deaths: number;
// };

// type Props = {
//   results: Result[] | null;
//   player: Result | null;
// };

export default function ResultsTable() {
  const result = [
    {
      gtag: "Player 1",
      time: "1:00",
      deaths: 0,
    },
    {
      gtag: "Player 2",
      time: "1:10",
      deaths: 1,
    },
    {
      gtag: "Player 3",
      time: "1:20",
      deaths: 2,
    },
  ];

  return (
    <div className="w-[100%]">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="table-header text-5xl">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Position</th>
            <th className="border border-gray-400 px-4 py-2">Gamertag</th>
            <th className="border border-gray-400 px-4 py-2">Time</th>
            <th className="border border-gray-400 px-4 py-2">Deaths</th>
          </tr>
        </thead>
        <tbody className="table-body text-center text-3xl tracking-wider">
          {result.map((result, index) => (
            <tr key={result.gtag}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
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
          {/* {player && (
            <tr>
              <td className="border text-yellow-300 border-gray-400 px-4 py-2">
                4
              </td>
              <td className="border text-yellow-300 border-gray-400 px-4 py-2">
                You
              </td>
              <td className="border text-yellow-300 border-gray-400 px-4 py-2">
                1:30
              </td>
              <td className="border text-yellow-300 border-gray-400 px-4 py-2">
                3
              </td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
}
