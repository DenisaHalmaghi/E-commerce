import "./custom-buttom.styles.scss";

import React from "react";

export default function CustomButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
