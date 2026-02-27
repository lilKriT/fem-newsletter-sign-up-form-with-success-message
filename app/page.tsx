"use client";

import { useState } from "react";
import SignUpForm from "./_components/SignUpForm";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      {!isSuccess ? <SignUpForm /> : <div>Work in progress</div>}
    </section>
  );
}
