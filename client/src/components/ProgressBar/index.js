import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="filler">{props.total}</div>
    </div>
  )
}

export default ProgressBar;