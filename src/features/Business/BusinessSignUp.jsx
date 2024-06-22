import React from 'react';

import LoginHeader from './../../components/LoginHeader';
import LoginPageImg from './../../assets/images/loginPageSideImg.jpeg';
import BusinessSignUpForm from './../../components/BusinessSignUpForm';

function BusinessSignUp() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoginHeader />
      <div className="flex flex-1 justify-between ">
        {/* Left side - Login Form */}
        <div className="w-full flex flex-col p-8 ">
          <div className="flex-grow flex flex-col  justify-center items-center">
            <div className="mt-20 w-[50%] flex flex-col gap-2">
              <h2 className="text-4xl font-semibold mb-6 ml-6">
                Get Started with Global Cluster as a Business
              </h2>
              <BusinessSignUpForm />
            </div>
          </div>
        </div>

        {/* Right side - Image with Gradient Overlay */}
        <div className="hidden lg:block w-8/12 relative">
          <div className="absolute inset-0 bg-gradient-to-b  from-sky-800 to-sky-700 opacity-70"></div>
          <img
            className="w-full h-full object-center object-cover"
            src={LoginPageImg}
            alt="Login Page Earth with gradient Img"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessSignUp;
