import "./SplashScreen.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const SplashScreen = () => {
  return (
    <Profiler id="SplashScreen" onRender={profilerCallback}>
      <div className="splash-screen">
          
      </div>
    </Profiler>
  );
};

export default SplashScreen;
