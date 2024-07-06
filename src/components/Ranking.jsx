import React from 'react';
import RankingCupImg from "./../assets/images/cup.jpeg"

function Ranking() {
  return (
    <div className=''>
        <p className='font-semibold border-b pb-2'>Ranking</p>
            <div className=' flex flex-col py-10 mt-10 w-full h-full justify-center gap-4 items-center'>
              <img  className='w-1/4' src={RankingCupImg} alt="Ranking in the contest" />
             <div className='flex items-center justify-center flex-col gap-2'>
               <p className='text-4xl font-bold'>Field Marsha</p>
              <p className='text-gray-400'>Current Ranking</p>
             </div>
            </div>
    </div>
  )
}

export default Ranking