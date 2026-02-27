import Image from "next/image";

type IProps = {
  email: string;
  dismissMessage: () => void;
  animate: boolean;
};

const SuccessMessage = ({ email, dismissMessage, animate }: IProps) => {
  return (
    <div
      className={`bg-white flex flex-col gap-8 px-12 py-8 rounded-4xl max-w-[50ch] animate-slideIn ${animate && "animate-slideOut"}`}
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

      <button className="btn" onClick={dismissMessage}>
        <div>
          <span>Dismiss message</span>
        </div>
      </button>
    </div>
  );
};

export default SuccessMessage;
