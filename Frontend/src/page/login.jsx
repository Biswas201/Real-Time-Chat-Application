import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-3xl font-semibold text-center text-slate-600">
          Login to
          <span className="text-black"> AB Chat Application</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-900 font-bold text-white before:ease relative overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-4 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
