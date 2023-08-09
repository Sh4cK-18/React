import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function Singin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [errorUser, setErrorUser] = useState({
    error: false,
    message: "",
  });

  const [errorPassword, setErrorPassword] = useState({
    error: false,
    message: "",
  });

  const inputPassword = document.querySelector(".input-password");

  const showPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);

    showPass
      ? inputPassword.setAttribute("type", "password")
      : inputPassword.setAttribute("type", "text");
  };

  const handleClick = () => {
    setErrorUser(false);
    setErrorPassword(false);

    try {
      if (!user || !password) {
        setErrorUser({
          error: true,
          message: "Enter an email / username.",
        });
        setErrorPassword({
          error: true,
          message: "Enter a password.",
        });
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid place-items-center md:p-12 py-6 px-0">
      <h1 className="text-center font-bold md:text-3xl md:mb-10 mb-5 text-lg">
        Sign in or create an account
      </h1>
      <section className="w-fit p-6 border shadow-2xl rounded-xl">
        <form className="md:w-[450px] h-fit flex flex-col gap-8 w-[300px]">
          <p className="font-light md:text-lg text-sm">
            * indicates required field
          </p>

          <section className="flex flex-wrap flex-col gap-5 items-center ">
            <input
              type="text"
              value={user}
              placeholder="* Username or email address"
              onChange={(e) => setUser(e.target.value)}
              className="w-full md:p-4 rounded-xl border-[#00754a] outline-none"
            />
            {errorUser.error && (
              <p className="text-red-500 md:text-md font-bold text-sm">
                {errorUser.message}
              </p>
            )}
            <input
              type="password"
              value={password}
              placeholder="* Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full md:p-4 rounded-xl  border-[#00754a] outline-none input-password"
            />
            {errorPassword.error && (
              <p className="text-red-500 md:text-md font-bold text-sm">
                {errorPassword.message}
              </p>
            )}
            <div className="w-full">
              <button
                className=" text-[#00754a] font-bold py-2 px-3 text-sm sm:text-2xl rounded-full hover:cursor-pointer"
                onClick={showPassword}
              >
                {!showPass ? <LuEyeOff /> : <LuEye />}
              </button>
            </div>
          </section>

          <section className="flex items-center">
            <input
              type="checkbox"
              className="md:text-2xl md:p-3 before:content[''] peer relative  cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
              id="check"
              defaultChecked
            />
            <label
              className="ml-2 md:text-lg hover:cursor-pointer text-sm"
              htmlFor="check"
            >
              Keep me signed in.{" "}
              <span className="text-[#00754a] font-bold underline hover:no-underline hover:cursor-pointer">
                Details
              </span>
            </label>
          </section>

          <section className="flex flex-col text-[#00754a] font-bold w-fit gap-2">
            <a
              href="#"
              className=" underline hover:no-underline hover:cursor-pointer md:text-lg text-sm"
            >
              Forgot your username?
            </a>
            <a
              href="#"
              className=" underline hover:no-underline hover:cursor-pointer md:text-lg text-sm"
            >
              Forgot your password?
            </a>
          </section>

          <section className="flex justify-end">
            <button
              onClick={handleClick}
              type="button"
              data-modal-target="staticModal"
              data-modal-toggle="staticModal"
              className="text-white bg-[#00754a] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300 font-bold rounded-full md:text-xl md:px-5 md:py-3 text-center px-3 py-2"
            >
              Sing in
            </button>
          </section>
        </form>
      </section>

      <section className="md:max-w-[50%] text-center p-6 md:mt-12 mt-6 w-full text-sm md:text-md">
        <h3 className="mb-2 text-[#00754a] font-bold text-sm md:text-md">
          JOIN STARBUCKS® REWARDS
        </h3>
        <p className="text-gray-600">
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>

        <Link to="/register">
          <button
            type="button"
            class="text-[#00754a] bg-transparent border border-[#00754a] focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-sm px-5 py-2 text-center mr-2 mt-3"
          >
            Join now
          </button>
        </Link>
      </section>
    </section>
  );
}

// LuEye;
// LuEyeOff;
