import { useState } from "react";
import Input from "../../../components/ui/Input";
import { Eye, EyeClosed } from "lucide-react";

const Password = ({ password, setPassword }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <label
      htmlFor=""
      className="flex flex-col gap-2 text-sm font-medium text-text-muted relative w-full"
    >
      Password (Required)
      <Input type={passwordVisible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        type="button"
        className="absolute right-0 bottom-0 h-12 w-12 grid place-items-center cursor-pointer"
        onClick={() => {
          setPasswordVisible(!passwordVisible);
        }}
      >
        {passwordVisible ? <EyeClosed size={20} /> : <Eye size={20} />}
      </button>
    </label>
  );
};

export default Password;
