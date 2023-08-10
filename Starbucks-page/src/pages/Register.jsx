import Checkbox from "@mui/material/Checkbox";
import { LuEye, LuEyeOff } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [canNavigate, setCanNavigate] = useState(false);

  useEffect(() => {
    if (name && lastName && email && password) {
      setCanNavigate(true);
    } else {
      setCanNavigate(false);
    }
  }, [name, lastName, email, password]);

  const inputPassword = document.querySelector(".input-password");

  const showPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);

    showPass
      ? inputPassword.setAttribute("type", "password")
      : inputPassword.setAttribute("type", "text");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-16 ">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <p className="mt-12 text-gray-600 font-bold">STARBUCKS REWARDS</p>
        <div className="w-[344px]">
          <p className="mt-2 text-gray-600 text-sm text-center">
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you pay. Get access to mobile ordering, a birthday Reward, and{" "}
            <a className="underline" href="#">
              more.
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 bg-white shadow-gray-500 shadow-2xl w-[600px]">
          <form className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center mt-24 mb-2 ">
              <h3 className="text-2xl font-bold">Personal Information</h3>
            </div>
            <input
              type="text"
              placeholder="* First name"
              className="border-2 border-[#01754B] p-3 rounded-lg w-[310px]"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="* Last name"
              className="border-2 border-[#01754B] p-3 rounded-lg w-[310px] mt-8 "
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="flex items-center justify-center mt-10 mb-2 ">
              <h3 className="text-2xl font-bold">Account Security</h3>
            </div>
            <section>
              <input
                type="email"
                placeholder="* Email address"
                className="border-2 border-[#01754B] p-3 rounded-lg w-[310px]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-gray-600 mt-1">This will be your username</p>
              <input
                type="password"
                placeholder="* Password"
                value={password}
                className="border-2 border-[#01754B] p-3 rounded-lg w-[310px] mt-8 input-password "
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full">
                <button
                  onClick={showPassword}
                  className=" text-[#01754a] font-bold py-2 px-3 text-sm sm:text-2xl rounded-full hover:cursor-pointer"
                >
                  {showPass ? <LuEyeOff /> : <LuEye />}
                </button>
              </div>
            </section>
            <p className="w-[300px] mt-2 text-gray-600 pb-6">
              Create a password 8 to 25 characters long that includes at least 1
              uppercase and 1 lowercase letter, 1 number and 1 special character
              like an exclamation point or asterisk.
            </p>
            <h3 className="text-gray-500 font-bold">
              COLLECT MORE STARS & EARN REWARDS
            </h3>
            <p className="w-[300px] mt-6">
              Email is a great way to know about offers and what’s new from
              Starbucks.
            </p>
            <label className="mt-6 mb-2 ">
              <Checkbox size="medium" defaultChecked color="success" />
              <span className="ml-2 text-base">
                Yes, Id' like email from Starbucks
              </span>
            </label>
            <p className="w-[300px] text-gray-500 font-bold">
              Know about initiatives, announcements and product offers.
            </p>
            <h3 className="text-gray-500 font-bold mt-12">TERMS OF USE</h3>
            <label className="mt-6 mb-2 w-[340px]">
              <Checkbox size="medium" defaultChecked color="success" />
              <span className="leading-[40px]">
                I agree to the{" "}
                <a href="#" className="underline text-[#01754B]">
                  Starbucks Rewards Terms{" "}
                </a>
                <div className="ml-10">
                  and the{" "}
                  <a href="#" className="underline  text-[#01754B] ">
                    Starbucks Card Terms
                  </a>{" "}
                  and have <br></br>read the{" "}
                  <a href="#" className=" underline text-[#01754B]">
                    Starbucks Privacy Statement
                  </a>
                </div>
              </span>
            </label>
            <Link
              to={canNavigate ? "/singin" : undefined}
              className={`bg-[#01754B] hover:bg-[#21b37d] text-white font-bold text-[19px] text-center w-[200px] h-fit p-3 rounded-full mt-12 mb-12 ${
                !canNavigate ? "pointer-events-none opacity-50" : ""
              }`}
            >
              Create account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
