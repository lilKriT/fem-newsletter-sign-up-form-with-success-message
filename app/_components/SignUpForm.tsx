"use client";

const SignUpForm = () => {
  return (
    <div className="bg-white w-full max-w-4xl grid grid-cols-2 gap-16  mx-8 p-8 pl-16 rounded-4xl">
      <div className="flex flex-col gap-6 justify-center">
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
          Email address
          <input
            type="text"
            placeholder="email@company.com"
            autoComplete="email"
            className="border border-gray rounded-lg px-6 py-4 text-lg font-normal"
          />
        </label>

        <button className="btn">Subscribe to monthly newsletter</button>
      </div>
      <div className="bg-[url(/illustration-sign-up-desktop.svg)] bg-cover aspect-400/593"></div>
    </div>
  );
};

export default SignUpForm;
