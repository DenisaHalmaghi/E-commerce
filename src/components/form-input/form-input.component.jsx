import "./form-input.styles.scss";

import React from "react";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      {label ? (
        <label
          htmlFor={otherProps.name}
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
      <input className="form-input" {...otherProps} onChange={handleChange} />
    </div>
  );
}
