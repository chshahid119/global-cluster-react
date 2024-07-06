import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import PropTypes from 'prop-types'
import ProductDetailImage from "./../assets/images/detailsImg.jpeg"



function ShowProductDetail({productDetail,setShowProductDetail}) {
    // console.log('thsi si in product detail components:' , productDetail)
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-gray-500'>
      
         <div className='w-[60rem] font-thin flex flex-col gap-2 bg-gray-100 border overflow-hidden rounded-xl'>
          <div className='flex justify-between items-center px-8 py-5 bg-white rounded-xl'>
          <h2 className='font-semibold text-2xl'>Product Details</h2>
            <ImCancelCircle style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={()=>setShowProductDetail(false)}/>
            </div>
            <div className='mx-10 my-7 p-8 bg-white flex flex-col gap-6 rounded-xl'>
            
                          <div className='border-b pb-3'>
                            Product Images
                          </div>
                          <div>
                            <img className='w-2/6' src={ProductDetailImage} alt="Product details images for show" />
                          </div>

                           <div className='border-b p-3'>Product Details</div>
                         <div className='p-4 flex items-center justify-between'>
                            <div>
                                <p>Product Name</p>
                                <p className='font-bold'>{productDetail.name}</p>
                            </div>
                            <div>
                                <p>Status</p>
                                <p className='font-bold '>{productDetail.status}</p>
                            </div>
                            <div>
                                <p>Link</p>
                                <p className='font-bold'>{productDetail.link}</p>
                            </div>

                         </div>
                         <div className='flex flex-col gap-4 p-4'>
                            <p>PRODUCT DESCRIPTION</p>
                            <p>{productDetail.description}</p>
                         </div>
            </div>
        </div>
       
       
    </div>
  )
}


ShowProductDetail.propTypes={
    productDetail: PropTypes.object,
    setShowProductDetail: PropTypes.func
}

export default ShowProductDetail