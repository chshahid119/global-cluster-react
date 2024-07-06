import React from 'react';
import Header from '../../components/ui/Header'
// import RegisterUser from '../../components/RegisterUser'

function Register() {
  return (
     <div className=' bg-gray-50 '>
      <Header/>
      <div className='bg-white m-10 border rounded-xl'>
        Main Box
        <div className='bg-gray-50 border m-10 rounded-xl'>
        <div className=' w-fit mx-auto my-10 flex gap-10 p-10  items-center'>
         <div className='flex flex-col gap-2 items-center justify-center'>
          <p className='bg-primary-light text-white px-6 py-2'>1</p>
          <p className='font-semibold'>Register Now</p>
         </div>
         <div className="border-b border-dashed border-primary-light w-[8rem]"/>
          <div className='flex flex-col gap-2 items-center justify-center'>
          <p className='bg-primary-light text-white px-6 py-2'>2</p>
          <p className='font-semibold'>Contact Information</p>
         </div>
         <div className="border-b border-dashed border-primary-light w-[8rem]"/>  
          <div className='flex flex-col gap-2 items-center justify-center'>
          <p className='bg-primary-light text-white px-6 py-2'>3</p>
          <p className='font-semibold'>Login Information</p>
         </div>
         <div className="border-b border-dashed border-primary-light w-[8rem]"/>
          <div className='flex flex-col gap-2 items-center justify-center'>
          <p className='bg-primary-light text-white px-6 py-2'>4</p>
          <p className='font-semibold'>Overview</p>
         </div>
        </div>
        </div>


        <form className='w-3/6 border mx-auto my-6'> 
          <div className='flex gap-4'>
           <div className='flex flex-col gap-4'> <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' name='firstName' /></div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="lastName">Last Name</label>
            <input type="text" id='LastName' name='LastName' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
               <label htmlFor="gender">Gender</label>
            <input type="text" id='gender' name='gender' />
            </div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="email">Email Address</label>
            <input type="email" id='email' name='email' />
            </div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="address">Address</label>
            <input type="text" id='address' name='address' />
            </div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="country">Country</label>
            <input type="text" id='country' name='country' />
            </div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="state">State</label>
            <input type="text" id='state' name='state' />
            </div>
            <div className='flex flex-col gap-4'>
               <label htmlFor="phone">Phone No</label>
            <input type="tel" id='phone' name='phone' />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register