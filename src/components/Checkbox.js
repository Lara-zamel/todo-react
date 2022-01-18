import React from "react";

import "../scss/checkbox.scss";

export default function Checkbox({ checked, onChange }) {
  return (
    <div className="checkbox">
      <div
        className={`border ${checked ? "checked" : ""}`}
        onClick={() => onChange(!checked)}
      >
        <div className={`indicator ${checked ? "checked" : ""}`}></div>
      </div>

      {/* <div className="label">{label}</div> */}
    </div>
  );
}
