import React from "react";
import "../index.css";
export default function Main() {
  return (
    <div className="container-main">
      <h1 className="title">Fun facts about React</h1>

      <div className="bullet-points">
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>is maintainded by Facebook</li>
          <li>Powers thousanda of enterprise Apps, including Mobile Apps</li>
        </ul>
      </div>
    </div>
  );
}
