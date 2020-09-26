import "./Header.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Header = (props) => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="header">
        
      </div>
    </Profiler>
  );
};

export default Header;
