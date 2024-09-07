import { useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Toaster } from "react-hot-toast";
import logo from "../../../public/rabbit.png";
import Input from "../../reuse/Input";
import PasswordInput from "../../reuse/PasswordIput";
import Button from "../../reuse/Button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [state, setState] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    // e.preventDefault();
    setLoading(true);
    // const val = { email: state, password };
  };

  return (
    <div className=" w-full min-h-[94vh] flex flex-col justify-center items-center ">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <Link to="/">
          <img className="mb-5  h-24 object-contain" src={logo} />
        </Link>
        <div className="text-[26px] font-bold mb-3 text-black">
          Welcome Back
        </div>
        <div className="text-[14px] -mt-3 w-[70%] leading-tight">
          {" "}
          Sign in as Student or Parent to continue your Experience.
        </div>
      </div>

      <div
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        // onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          className="w-[97%]"
          type="email"
          required
          value={state}
          onChange={(e: any) => {
            setState(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Your Password"
          className="w-[97%]"
          show
          //   errorText="Password has to be passed"
          errorText={password && "Ensure your Password correct"}
          required
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />

        <div>
          <Button
            name={loading ? "Loading..." : "Login"}
            className="w-[97%] bg-orange-600 text-white h-14 hover:bg-orange-700 transition-all duration-300"
            type="submit"
            onClick={handleSubmit}
            icon={loading && <ClipLoader color="white" size={18} />}
          />

          <div className="text-[12px] ml-2 font-bold cursor-pointer">
            {/* Teacher and Student, Switch Login */}
          </div>
        </div>
        <div className="mt-10 mb-0 mx-2 text-[13px] font-medium flex  justify-between ">
          <div>Sign in with social network</div>
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google (coming soon)"
            className="h-14 bg-red-500 hover:bg-red-600 opacity-100 hover:text-white  transition-all duration-300 font-medium text-white leading-tight w-[97%]text-center text-[12px] sm:text-base "
            icon={<FaGoogle />}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Don’t have an account yet?{" "}
        <span className="font-bold text-orange-600">
          <Link to="/auth">Register here</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
