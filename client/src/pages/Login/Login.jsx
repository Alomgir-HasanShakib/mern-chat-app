import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login <span className="text-blue-500">ChatApp</span></h1>

        <form >
          <div className="form-control">
            <label className="label p-2">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="input input-bordered h-10 w-full"
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
            />
          </div>
          <a href="#" className="hover:text-blue-600 text-sm hover:underline mt-2 inline-block">Don't have an account? Signup</a>
          <div className="flex justify-center items-center mt-4">
            <button className="btn  w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
