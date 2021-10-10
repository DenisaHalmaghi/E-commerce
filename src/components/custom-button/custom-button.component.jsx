import React from "react";
import "./custom-buttom.styles.scss";

export default function CustomButton({ children, ...props }) {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  );
}
