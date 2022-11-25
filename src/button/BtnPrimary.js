import React from "react";

export default function BtnPrimary({ bgColor, children }) {
  return (
    <div>
      <button className="px-6 py-2 bg-primary rounded-full text-white">{children}</button>
    </div>
  );
}
