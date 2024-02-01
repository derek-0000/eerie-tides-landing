import "./App.css";

import landing_temp_cover from "./assets/landing_temp_cover.jpeg";
import title from "./assets/eerie_tides_logo.png";
import TeamMembers from "./components/TeamMembers";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-[100%] ">
        <div className="relative flex flex-col items-center justify-start h-[100vh] w-[100%] sm:w-[80%]">
          <img
            className=" z-10 absolute h-[100%] w-[100%] grayscale brightness-75 object-cover"
            src={landing_temp_cover}
          />
          <div className="flex relative flex-col justify-center items-center z-50 h-[100%]">
            <img className=" w-[85%] sm:w-[60%] " src={title} />
            <img
              id="video-player"
              className="z-50 h-56 w-[100%] object-cover"
              src={landing_temp_cover}
            />
            <button className="play-now-button">PLAY NOW</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 md:gap-52 p-2 sm:p-16">
        <div className="story-container mt-32">
          <div className=" text-5xl">STORY</div>
          <div className=" text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            natus distinctio eligendi totam autem perspiciatis perferendis qui!
            Odit nesciunt velit ipsa ut, nemo iusto maiores numquam quisquam,
            illum earum odio.
          </div>
        </div>
      </div>
      <img
        id="video-player"
        className="z-50 h-56 w-[100%] object-cover"
        src={landing_temp_cover}
      />
      <div className="flex justify-center items-center flex-col gap-1 overflow-x-hidden	">
        <div className="-mb-2 mt-32 overflow-x-hidden">
          <div className=" h-8 background-text-a"></div>
        </div>
        <TeamMembers />
        <div className="overflow-x-hidden">
          <div className=" h-8 background-text-a2"></div>
        </div>
      </div>
      <div className="call-to-action my-32 flex flex-col items-center justify-center">
        <div className="text-5xl">SEE YOUR TIMES</div>
        <button className=" text-4xl bg-white text-black px-8 py-2 rounded-sm">
          Leaderboard
        </button>
      </div>
      <ResultsTable />
    </>
  );
}

export default App;
