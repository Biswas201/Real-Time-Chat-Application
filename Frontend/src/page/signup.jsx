import React, { useState } from "react";
import { Link } from "react-router-dom";
import GendercheckBox from "../component/GendercheckBox";
import useSignup from "../hooks/useSignup.js";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setData({ ...data, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-cyan-300">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Signup to
          <span className="text-blue-500"> AB Chat Application</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="enter your email"
              className="w-full input input-bordered h-10"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
          </div>

          <GendercheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={data.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-900 font-bold text-white before:ease relative overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              disabled={loading}
            >
              {!loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
