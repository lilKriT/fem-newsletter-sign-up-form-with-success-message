import Image from "next/image";

type IProps = {
  email: string;
  dismissMessage: () => void;
};

const SuccessMessage = ({ email, dismissMessage }: IProps) => {
  return (
    <div className="bg-white flex flex-col gap-8 px-12 py-8 rounded-4xl max-w-[50ch] animate-slideIn 1animate-[slideIn_.3s_ease-in-out_reverse_forwards]">
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
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
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
