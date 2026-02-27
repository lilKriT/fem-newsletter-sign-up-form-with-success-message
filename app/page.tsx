"use client";

import { useState } from "react";
import SignUpForm from "./_components/SignUpForm";
import SuccessMessage from "./_components/SuccessMessage";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

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
    setEmail("");
    setDismissAnimation(false);
  };

  return (
    <section className="min-h-dvh flex justify-center items-center lg:py-32">
      {!isSuccess ? (
        <SignUpForm
          email={email}
          setEmail={setEmail}
          signUp={signUp}
          animate={successAnimation}
        />
      ) : (
        <SuccessMessage
          email={email}
          dismissMessage={dismissMessage}
          animate={dismissAnimation}
        />
      )}
    </section>
  );
}
