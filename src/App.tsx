import "./App.css";
import landing_temp_cover from "./assets/landing_temp_cover.jpeg";
import title from "./assets/eerie_tides_logo.png";
import TeamMembers from "./components/TeamMembers";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-[100%] ">
        <div className="relative flex flex-col items-center justify-start h-[100vh] w-[100%] sm:w-[80%]">
          <div className="flex gap-2 relative flex-col justify-center items-center z-50 w-[100%] h-[100%]">
            <img
              id="video-player"
              className="w-[100%] md:w-96 lg:w-96 h-56 object-cover"
              src={landing_temp_cover}
            />

            <img className=" w-48 sm:w-56 " src={title} />
            <button className="play-now-button text-4xl bg-white text-black px-8 py-2 rounded-sm hover:bg-black hover:text-white">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-52 p-2 sm:px-48 story-container text-center">
        <div className="flex flex-col justify-center items-center story-container text-center">
          <div className=" text-7xl bolder">STORY</div>
          <div className=" w-[50%] text-3xl tracking-wide">
            Eerie tides is an under-water horror themed videogame. Where the
            player gets imersed into an underwater accident, trying to uncover
            the misteries that bring to reality that eerie feeling you get when
            diving into deep waters.
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-1 overflow-x-hidden	">
        <div className="-mb-2 mt-32 overflow-x-hidden">
          <div className=" h-8 background-text-a"></div>
        </div>
        <TeamMembers />
        <div className="overflow-x-hidden">
          <div className=" h-8 background-text-a2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
