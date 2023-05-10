import React from "react";

import "./ResetButton.css";

export const ResetButton = ({ resetBoard }) => {
  return (
    <div>
      <button className="reset-button" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
};
