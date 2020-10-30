import React from "react";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <>
      <img src={profile} alt="profile" className="profile" />

      <p>Isaac Householder</p>
      <p>Bachelor of Science - Mechanical Engineering</p>
      <p>Irvine, California</p>
      <p>IsaacHouseholder@gmail.com</p>
      <p>714.496.7154</p>
    </>
  );
}
