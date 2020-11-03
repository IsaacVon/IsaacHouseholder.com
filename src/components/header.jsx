import React from "react";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <>
      <div className="centeringContainer">
        <img src={profile} alt="profile" className="profile" />
        <h1 className="color">Isaac Householder</h1>
        <h2>Bachelor of Science - Mechanical Engineering</h2>
        <h2>Irvine, California</h2>
        <h2>IsaacHouseholder@gmail.com</h2>
        <h2>714.496.7154</h2>
      </div>
    </>
  );
}
