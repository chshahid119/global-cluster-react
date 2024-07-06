import React from 'react';
import RowData from './RowData';
import DollarImg from "./../assets/images/dollar.png"

// Assuming RowData is a custom component you've defined elsewhere
// and you import it here. For example:
// import RowData from './RowData';

function Payout() {
  return (
    <div className=''>
     <p className='font-semibold border-b pb-2'>Ranking</p>
     <div className='mt-10'>
     <RowData memberName='Requested' img={DollarImg}
     >
            <p className='text-primary-dark text-semibold'>$1500</p>
     </RowData>
     <RowData memberName='Requested' img={DollarImg}
     >
            <p className='text-primary-dark text-semibold'>$1500</p>
     </RowData>
     <RowData memberName='Approved' img={DollarImg}
     >
            <p className='text-green-400 text-semibold'>$1500</p>
     </RowData>
     <RowData memberName='Rejected' img={DollarImg}
     >
            <p className='text-red-500 text-semibold'>$1500</p>
     </RowData>
     </div>
     
    </div>
  );
}

export default Payout;
