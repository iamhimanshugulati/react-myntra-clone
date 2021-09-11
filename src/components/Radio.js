import React from "react";

const Radio = (props) => {
  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id={props.value}
        value={props.value}
        name="genderFilter"
        className="custom-control-input"
        onClick={props.onClick}
      />
      <label className="custom-control-label" htmlFor={props.value}>
        &nbsp;{props.label}
      </label>
    </div>
  );
};

export default Radio;
