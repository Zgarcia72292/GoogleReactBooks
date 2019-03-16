import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {/* <h1>Google Books Search</h1> */}
      {children}
    
    </div>
  );
}

export default Jumbotron;

