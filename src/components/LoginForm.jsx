import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMiniUserPlus } from 'react-icons/hi2';

function LoginForm() {
  const [LoginType, setLoginType] = useState('Business');

  return (
    <form className="space-y-20  px-8">
      <div
        className="flex w-full border border-gray-300 py-4 px-2 gap-4 bg-[#f6f6f9]
       items-center justify-center rounded-md select-none"
      >
        <p
          className={` text-center w-full px-4 py-4 rounded-md cursor-pointer ${
            LoginType === 'Individual'
              ? 'bg-[#ffffff] text-primary-light border'
              : null
          }`}
          onClick={() => setLoginType('Individual')}
        >
          Individual
        </p>
        <p
          className={` text-center w-full px-4 py-4 rounded-md 
        cursor-pointer ${
          LoginType === 'Business'
            ? 'bg-[#ffffff] text-primary-light border'
            : null
        }`}
          onClick={() => setLoginType('Business')}
        >
          Business
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <label htmlFor="emailOrUsername" className="block text-gray-700">
            Email Address or Username
          </label>
          <input
            id="emailOrUsername"
            name="emailOrUsername"
            type="email"
            placeholder="janedoe@xxx.com"
            className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="w-full border border-gray-300 p-4 outline-none rounded-2xl"
          />
        </div>
        <p className=" text-2xl ">
          Forgot password?{' '}
          <span className="font-bold cursor-pointer hover:underline">
            Reset Here
          </span>
        </p>
        <div
          className="w-full bg-primary-light text-white font-semibold py-4 rounded-full hover:bg-primary-dark 
        transition duration-300 flex gap-4 items-center justify-center cursor-pointer"
        >
          <NavLink to="/business-dashboard">
            <button
              type="submit"
              className="flex items-center justify-center gap-4"
            >
              <HiMiniUserPlus className="text-4xl " />
              <p>Login</p>
            </button>
          </NavLink>
        </div>

        <div className="text-center text-2xl">
          <NavLink to="/business-signUp">
            {`Don't `} Have an account,{' '}
            <span className="font-semibold hover:underline-offset-1">
              Sign up as Business
            </span>
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
