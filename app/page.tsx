"use client";

import { useState } from "react";
import SignUpForm from "./_components/SignUpForm";
import SuccessMessage from "./_components/SuccessMessage";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(true);

  const signUp = () => {
    console.log("Signing up");

    setIsSuccess(true);
  };

  const dismissMessage = () => {
    console.log("Dismissing");

    setIsSuccess(false);
  };

  return (
    <section className="min-h-dvh flex justify-center items-center">
      {!isSuccess ? (
        <SignUpForm signUp={signUp} />
      ) : (
        <SuccessMessage
          email="whatever@google.com"
          dismissMessage={dismissMessage}
        />
      )}
    </section>
  );
}
