import React from "react";

export default function Row({ label, children }) {
  return (
    <div className="row">
      <span className="row-title">{label}</span>
      <span className="row-content">{children}</span>
    </div>
  );
}
