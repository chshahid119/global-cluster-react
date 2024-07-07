import React from 'react';
import Header from '../../components/ui/Header';
import GenealogyTree from './../../components/ui/GenealogyTree';
// import RegisterUser from '../../components/RegisterUser'

function Network() {
  return (
    <div className=" bg-gray-50  ">
      <Header />
      <div className="bg-white m-10 border">
        <div className="bg-gray-50 m-10">
          <GenealogyTree />
        </div>
      </div>
    </div>
  );
}

export default Network;
