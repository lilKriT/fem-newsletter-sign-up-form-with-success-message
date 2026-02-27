"use client";

import { useState } from "react";
import { z } from "zod";

type IProps = {
  email: string;
  setEmail: (s: string) => void;
  animate: boolean;
  signUp: () => void;
};

const SignUpForm = ({ email, setEmail, animate, signUp }: IProps) => {
  const [emailError, setEmailError] = useState("");
  const [errorShake, setErrorShake] = useState(false);

  const validateEmail = () => {
    const isValid = z.email({ error: "Valid email required" }).safeParse(email);

    if (isValid.success) {
      setEmailError("");
    } else {
      setEmailError(isValid.error.issues[0].message);
    }

    return isValid.success;
  };

  const shakeButton = async () => {
    setErrorShake(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setErrorShake(false);
  };

  return (
    <div
      className={`bg-white w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:mx-8 lg:p-8 lg:pl-16 rounded-4xl animate-slideIn ${animate && "animate-slideOut"}`}
    >
      {/* Illustration */}
      <div className="lg:order-2 bg-[url(/illustration-sign-up-mobile.svg)] md:bg-[url(/illustration-sign-up-tablet.svg)] lg:bg-[url(/illustration-sign-up-desktop.svg)] bg-cover aspect-400/593"></div>

      {/* Form */}
      <div className="lg:order-1 flex flex-col gap-6 justify-center">
        <h1 className="text-[clamp(2.25rem,6vw,3.25rem)] font-bold">
          Stay updated!
        </h1>

        <p className="">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="list-image-[url(/icon-list.svg)] list-inside flex flex-col gap-2">
          <li className="">
            <span className="relative bottom-1 pl-2">
              Product discovery and building what matters
            </span>
          </li>
          <li className="">
            <span className="relative bottom-1 pl-2">
              Measuring to ensure updates are a success
            </span>
          </li>
          <li className="">
            <span className="relative bottom-1 pl-2">And much more!</span>
          </li>
        </ul>

        <label className="mt-4 font-bold flex flex-col gap-2 text-blue-800">
          <div className="flex justify-between">
            <span>Email address</span>
            <span className="text-red">{emailError}</span>
          </div>
          <input
            type="text"
            placeholder="email@company.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail()}
            className={`border border-gray rounded-lg px-6 py-4 text-lg font-normal outline-none focus:ring-2 ring-blue-700 ${emailError !== "" && "ring-red bg-red-300 border-red-500"}`}
          />
        </label>

        <button
          className={`${errorShake && "animate-[bounce_1s_ease-in-out]"} btn`}
          onClick={() => {
            const emailValid = validateEmail();

            if (emailValid) {
              signUp();
            } else {
              shakeButton();
            }
          }}
        >
          <div>
            <span>Subscribe to monthly newsletter</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
