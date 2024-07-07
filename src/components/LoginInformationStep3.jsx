import React from 'react';

function LoginInformationStep3() {
  return (
    <from className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          className="py-6  px-2 border outline-none rounded-md"
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          className="py-6 px-2 border outline-none rounded-md"
          type="password"
          id="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          className="py-6 px-2 border outline-none rounded-md"
          type="text"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <div className="flex gap-2">
        <input className="py-6 px-2 " type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms" className="uppercase">
          i accept terms and conditions <span className="text-red-500">*</span>
        </label>
      </div>
    </from>
  );
}

export default LoginInformationStep3;
