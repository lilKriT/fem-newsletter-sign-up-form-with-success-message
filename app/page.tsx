import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Sign-up form start */}

      <p>Stay updated!</p>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <p>
        Product discovery and building what matters Measuring to ensure updates
        are a success And much more!
      </p>

      <p>Email address email@company.com</p>

      <p>Subscribe to monthly newsletter</p>

      {/* Sign-up form end */}

      {/* Success message start */}

      <p>Thanks for subscribing!</p>

      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>

      <p>Dismiss message</p>

      {/* Success message end */}
    </div>
  );
}
