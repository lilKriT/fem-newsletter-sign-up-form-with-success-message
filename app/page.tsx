"use client";

import { useState } from "react";
import SignUpForm from "./_components/SignUpForm";
import SuccessMessage from "./_components/SuccessMessage";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  // Lets think about it.
  // I can only go two ways - enter success or dismiss success
  // when entering - signup leaves, success comes in
  // when dismissing - success leaves, signup comes in

  const [successAnimation, setSuccessAnimation] = useState(false);
  const [dismissAnimation, setDismissAnimation] = useState(false);

  const signUp = async () => {
    setSuccessAnimation(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSuccess(true);
    setSuccessAnimation(false);
  };

  const dismissMessage = async () => {
    setDismissAnimation(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSuccess(false);
    setDismissAnimation(false);
  };

  return (
    <section className="min-h-dvh flex justify-center items-center">
      {!isSuccess ? (
        <SignUpForm signUp={signUp} animate={successAnimation} />
      ) : (
        <SuccessMessage
          email="whatever@google.com"
          dismissMessage={dismissMessage}
          animate={dismissAnimation}
        />
      )}
    </section>
  );
}
