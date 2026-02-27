import Image from "next/image";

type IProps = {
  email: string;
  dismissMessage: () => void;
  animate: boolean;
};

const SuccessMessage = ({ email, dismissMessage, animate }: IProps) => {
  return (
    <div
      className={`bg-white flex flex-col gap-8 px-8 lg:px-12 py-8 min-h-dvh lg:min-h-0 lg:rounded-4xl max-w-[50ch] lg:motion-safe:animate-slideIn ${animate && "lg:motion-safe:animate-slideOut"}`}
    >
      <Image
        src={"/icon-success.svg"}
        alt="Success Checkmark"
        width={64}
        height={64}
      />

      <h1 className="text-blue-800 text-[clamp(2.25rem,6vw,3.25rem)] font-bold leading-none">
        Thanks for subscribing!
      </h1>

      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button className="btn mt-auto lg:mt-none" onClick={dismissMessage}>
        <div>
          <span>Dismiss message</span>
        </div>
      </button>
    </div>
  );
};

export default SuccessMessage;
