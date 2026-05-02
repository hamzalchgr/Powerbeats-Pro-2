import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Checkbox from "../../components/ui/Checkbox";
import Password from "./components/Password";

const Auth = () => {
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [emailExist, setEmailExist] = useState(false);

  return (
    <div className="max-w-[532px] px-4 mx-auto flex flex-col gap-10">
      <h1 className="heading-1">Log in or create an account</h1>

      <p className="font-medium">Enter your email to sign up or log in.</p>

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
          onClick={() => {
            setEmailExist(true);
          }}
        >
          {emailExist ? "Login" : email ? "Create account" : "Continue"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;
