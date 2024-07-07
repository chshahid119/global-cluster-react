import PropTypes from 'prop-types';
import React from 'react';

function OverviewCard({ type }) {
  if (type === 'sponsorAndMembershipInfo') {
    return (
      <div className="bg-white p-10 text-gray-500">
        <div className="flex flex-col gap-10">
          <p className="border px-8 py-6 rounded-lg bg-gray-50">
            Sponsor And Membership Package
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex w-3/6 justify-between">
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Membership Package</p>
                <p className="text-lg">Individual Package</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Sponsor</p>
                <p className="text-lg">INF00123</p>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex w-3/6 justify-between">
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Membership Package</p>
                <p className="text-lg">Individual Package</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold">Sponsor</p>
                <p className="text-lg">INF00123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ContactInfo') {
    return (
      <div className="bg-white p-10 text-gray-500">
        <div className="flex flex-col gap-10">
          <p className="border px-8 py-6 rounded-lg bg-gray-50">
            Sponsor And Membership Package
          </p>
          <div className="bg-white p-6 rounded-lg ">
            <div className="flex flex-wrap justify-between gap-y-6">
              <div className="w-1/3">
                <p className="font-semibold">First Name</p>
                <p className="text-lg">Silas</p>
              </div>
              <div className="w-1/3">
                <p className="font-semibold ">Last Name</p>
                <p className="text-lg">Dahunzy</p>
              </div>
              <div className="w-1/3">
                <p className="font-semibold ">Address</p>
                <p className="text-lg">
                  20 Cooper Square, New York, NY 10003, USA
                </p>
              </div>
              <div className="w-1/3">
                <p className="font-semibold ">Gender</p>
                <p className="text-lg">M</p>
              </div>
              <div className="w-1/3">
                <p className="font-semibold ">Email Address</p>
                <p className="text-lg">dahunzy@gmail.com</p>
              </div>
              <div className="w-1/3">
                <p className="font-semibold ">Country</p>
                <p className="text-lg">USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'loginInfo') {
    return (
      <div className="bg-white p-10 text-gray-500">
        <div className="flex flex-col gap-10">
          <p className="border px-8 py-6 rounded-lg bg-gray-50">
            Sponsor And Membership Package
          </p>
          <div className="flex p-6 w-2/6 justify-between">
            <div>
              <p className="font-semibold">Usernmae</p>
              <p className="text-xl">Dahunzy</p>
            </div>
            <div>
              <p className="font-semibold">Password</p>
              <p className="text-xl"> **********</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Please give a Type to use that component</div>;
  }
}

OverviewCard.propTypes = {
  type: PropTypes.string,
};

export default OverviewCard;
