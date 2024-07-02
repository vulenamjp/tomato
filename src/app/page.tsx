"use client";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Home() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <main className="">
      <div className="task">
        <div className="time">07:00-07:10</div>
        <div className="content">Morning workout</div>
        <div className="switch">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="task">
        <div className="time">07:10-07:20</div>
        <div className="content">Breakfast</div>
        <div className="switch">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="task">
        <div className="time">08:00-08:30</div>
        <div className="content">Go to school</div>
        <div className="switch">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </main>
  );
}
