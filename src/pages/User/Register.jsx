import React, { useState } from 'react';
import Payment from '../../components/Payment';
import Header from '../../components/ui/Header';
import ContactInformationStep2 from './../../components/ContactInformationStep2';
import LoginInformationStep3 from './../../components/LoginInformationStep3';
import OverviewStep4 from './../../components/OverviewStep4';
import RegisterNowStep1 from './../../components/RegisterNowStep1';

// import RegisterUser from '../../components/RegisterUser'

function Register() {
  const [regForm, setRegForm] = useState(1);

  function PreviousFormPage() {
    if (regForm === 1) return;
    setRegForm(regForm - 1);
  }

  function NextFormPage() {
    //  if (regForm === 4) return;
    setRegForm(regForm + 1);
  }
  return (
    <div className=" bg-gray-50 ">
      <Header />
      <div className="bg-white m-10  border rounded-xl">
        <div className="bg-gray-50  m-10 rounded-xl ">
          <div className=" w-fit mx-auto my-10 flex gap-10 p-10  items-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="bg-primary-light text-white px-6 py-2">1</p>
              <p className="font-thin">Register Now</p>
            </div>
            <div className="border-b border-dashed border-primary-light w-[8rem]" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <p
                className={`${
                  regForm > 1 ? 'bg-primary-light' : 'bg-slate-400'
                } text-white px-6 py-2`}
              >
                2
              </p>
              <p className="font-thin ">Contact Information</p>
            </div>
            <div className="border-b border-dashed border-primary-light w-[8rem]" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <p
                className={`${
                  regForm > 2 ? 'bg-primary-light' : 'bg-slate-400'
                } text-white px-6 py-2`}
              >
                3
              </p>
              <p className="font-thin">Login Information</p>
            </div>
            <div className="border-b border-dashed border-primary-light w-[8rem]" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <p
                className={`${
                  regForm > 3 ? 'bg-primary-light' : 'bg-slate-400'
                } text-white px-6 py-2`}
              >
                4
              </p>
              <p className="font-thin">Overview</p>
            </div>
          </div>

          <div className="w-4/6 mx-auto">
            {regForm === 1 && <RegisterNowStep1 />}
            {regForm === 2 && <ContactInformationStep2 />}
            {regForm === 3 && <LoginInformationStep3 />}
            {regForm === 4 && <OverviewStep4 />}
            {regForm === 5 && (
              <Payment setRegForm={setRegForm} regForm={regForm} />
            )}

            <div className="w-1/2 text-center items-center justify-center flex gap-8 text-white mx-auto py-20">
              <p
                className="px-20 flex-1 py-4 bg-gray-500 rounded-lg cursor-pointer select-none"
                onClick={PreviousFormPage}
              >
                Back
              </p>
              <p
                className="px-20 flex-1 py-4 bg-primary-light rounded-lg cursor-pointer select-none"
                onClick={NextFormPage}
              >
                Next
              </p>
            </div>
          </div>
          {/* Next Button  */}
        </div>
        {/* <*/}
      </div>
    </div>
  );
}

export default Register;
