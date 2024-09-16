import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-cyan-300">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Signup to
          <span className="text-blue-500"> AB Chat Application</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full input input-bordered h-10"
              // value={formData.email}
              // onChange={(e) =>
              //   setFormData({ ...formData, email: e.target.value })
              // }
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
              // value={formData.password}
              // onChange={(e) =>
              //   setFormData({ ...formData, password: e.target.value })
              // }
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
              // value={formData.confirmPassword}
              // onChange={(e) =>
              //   setFormData({ ...formData, confirmPassword: e.target.value })
              // }
            />
          </div>
          {/* <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={formData.gender}
          /> */}

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
          <button className="btn btn-block btn-sm mt-2 bg-gray-900 font-bold text-white before:ease relative overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
              <span className="relative z-10">Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
