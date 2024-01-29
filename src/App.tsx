import "./App.css";

import landing_temp_cover from './assets/landing_temp_cover.jpeg'
import title from './assets/eerie_tides_logo.png'
function App() {
  return (
    <>
      <div className="flex items-center justify-center w-[100%]">
        <div className="relative flex items-center justify-center h-[100vh] w-[80%] bg-no-repeat object-cover">
          <img
            className=" z-10 absolute h-[100%] w-[100%] grayscale brightness-75 object-cover"
            src={landing_temp_cover}
          />
          <div className=" h-[80%] gap-12 flex flex-col justify-center items-center w-[70%] z-50">
            <img className="w-[50%]" src={title} />
            <img
              className="w-[40rem] h-96 object-cover"
              src={landing_temp_cover}
            />
            <div className="play-now-button">PLAY NOW</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
