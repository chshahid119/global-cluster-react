import React from 'react';

function ContactInformationStep2() {
  return (
    <form className=" mx-auto my-6 text-gray-500">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-1/2">
          {' '}
          <label className="p-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="p-6 border outline-none rounded-md"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <label className="p-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="p-6 border outline-none rounded-md"
            type="text"
            id="LastName"
            name="LastName"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="p-2" htmlFor="gender">
          Gender
        </label>
        <input
          className="p-6 border outline-none rounded-md"
          type="text"
          id="gender"
          name="gender"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="p-6  border outline-none rounded-md"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-2" htmlFor="address">
          Address
        </label>
        <input
          className="p-6 outline-none border  rounded-md"
          type="text"
          id="address"
          name="address"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-2" htmlFor="country">
          Country
        </label>
        <input
          className="p-6 border outline-none rounded-md"
          type="text"
          id="country"
          name="country"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-2" htmlFor="state">
          State
        </label>
        <input
          className="p-6 border outline-none rounded-md"
          type="text"
          id="state"
          name="state"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-2" htmlFor="phone">
          Phone No
        </label>
        <input
          className="p-6 border outline-none rounded-md"
          type="tel"
          id="phone"
          name="phone"
        />
      </div>
    </form>
  );
}

export default ContactInformationStep2;
