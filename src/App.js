import React from "react";
import TimeDisplay from "./Components/TimeDisplay";
import Work from "./Components/LengthControl/Work";
import Break from "./Components/LengthControl/Break";
import Start from "./Components/TimeControl/Start";
import Pause from "./Components/TimeControl/Pause";
import Reset from "./Components/TimeControl/Reset";
import Footer from "./Components/Footer";

const App = () => {
  const handleReset = () => {
    console.log("reset requested");
    //pass reset function to child
  };
  return (
    <div className="components">
      <div className="web-title">Pomodoro Clock</div>
      <div className="topcomp">
        <Work />
        <Break />
      </div>
      <TimeDisplay />
      <div className="bottomcomp">
        <Start />
        <Pause />
        <Reset handleReset={handleReset} />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
