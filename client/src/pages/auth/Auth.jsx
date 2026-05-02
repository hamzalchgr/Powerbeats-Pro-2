import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Checkbox from "../../components/ui/Checkbox";
import Password from "./components/Password";
import { Link } from "react-router-dom";

const Auth = () => {
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [emailExist, setEmailExist] = useState(false);

  return (
    <div className="max-w-[532px] h-screen px-4 mx-auto flex justify-center flex-col gap-10">
      <h1 className="heading-1">
        {emailExist ? "Enter password" : "Log in or create an account"}
      </h1>

      <p className="font-medium">
        {emailExist
          ? "Enter password to log in."
          : email && emailExist
            ? "Enter your email to sign up or log in."
            : "Create a password for your account."}
      </p>

      <form action="" className="flex flex-col gap-5">
        <label
          htmlFor=""
          className="flex flex-col gap-2 text-sm font-medium text-text-muted w-full"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        >
          Email address (Required)
          <Input type="email" placeholder="" />
        </label>

        {email && emailExist && (
          <>
            <Password password={password} setpassword={setpassword} />

            <Checkbox checked={checked} setChecked={setChecked}>
              <span>
                Stay in the loop, with exclusive offers and product previews.
              </span>
              <span>
                Your personal data will be passed on to On AG so we can contact
                you about our products and send you surveys via email. Data
                processing and the statistical analysis of the data will be
                carried out by our service provider, Sailthru (USA). You can
                unsubscribe at any time by using the unsubscribe link in each
                email.
              </span>
            </Checkbox>
          </>
        )}

        <Button
          size="md"
          type="button"
          className=""
          onClick={() => {
            setEmailExist(true);
          }}
        >
          {emailExist ? "Login" : email ? "Create account" : "Continue"}
        </Button>
        <div className="flex justify-center">
          <Link to="resetPassword">Forgot your password?</Link>
        </div>
      </form>

      <div className="py-5 flex flex-col items-center gap-4">
        <p className="font-medium py-5">Or</p>

        <div className="flex gap-2 w-full">
          <Button variant="outline" size="lg" className="w-full py-0">
            <img
              className="h-5"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
            />
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <img
              className="h-5"
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-logo-icons-31.png"
              alt=""
            />
          </Button>
        </div>

        <p className="text-sm font-medium flex gap-1 flex-wrap">
        By continuing, I confirm that I have read and accept the{" "}<Link className="text-nowrap" to="/terms">
          Terms and Conditions
        </Link>
        . and the{" "}<Link className="text-nowrap" to="/policy">
          Privacy Policy
        </Link>.
      </p>
      </div>
    </div>
  );
};

export default Auth;
