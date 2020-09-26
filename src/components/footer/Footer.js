import "./Footer.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Footer = () => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="footer">
      </div>
    </Profiler>
  );
};

export default Footer;
