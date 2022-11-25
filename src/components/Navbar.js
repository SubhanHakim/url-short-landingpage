import React from "react";
import BtnPrimary from "../button/BtnPrimary";

export default function Navbar() {
  return (
    <div className="container px-20 my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold text-Dark">
            <a href="/">Shortly</a>
          </h2>
          <ul className="flex gap-5">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <BtnPrimary>Sign Up</BtnPrimary>
          <BtnPrimary>Login</BtnPrimary>
        </div>
      </div>
      <nav></nav>
    </div>
  );
}
