import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { signup, loading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label p-2">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="input input-bordered h-10 w-full"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label p-2">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="input input-bordered h-10 w-full"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label p-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered h-10 w-full"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label p-2">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Confirm Password"
              className="input input-bordered h-10 w-full"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>
          {/* gender component goes here  */}
          <GenderCheckbox inputs={inputs} setInputs={setInputs} />
          <Link
            to={"/login"}
            className="hover:text-blue-600 text-sm hover:underline mt-2 inline-block "
          >
            Already have an account? Login
          </Link>
          <div className="flex justify-center items-center mt-4">
            <button className="btn  w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
