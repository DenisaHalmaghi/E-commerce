import React from "react";
import "./form-input.styles.scss";

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
      <input {...otherProps} onChange={handleChange} />
    </div>
  );
}
