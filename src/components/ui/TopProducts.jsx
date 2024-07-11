import PropTypes from 'prop-types'
import React from 'react'
import BusinessProductImg from './../../assets/images/productImg.png'

const dumyproducts = [
  { name: 'Lorem Ipsum', shares: 195 },
  { name: 'Lorem Ipsum', shares: 146 },
  { name: 'Lorem Ipsum', shares: 122 },
  { name: 'Lorem Ipsum', shares: 110 },
  { name: 'Lorem Ipsum', shares: 87 },
]

const TopProducts = ({ products }) => {
  return (
    <div className="bg-white p-6 flex-1 flex flex-col gap-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Top Products</h2>
      <div className="flex  justify-between text-xl text-gray-500 mb-4 border-b">
        <span>Name</span>
        <span>Shares</span>
      </div>
      <ul className="divide-y divide-gray-200 flex-1 overflow-y-auto">
        {products
          ? products.map((product, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-md mr-3 ">
                    <img
                      className="w-10"
                      src={BusinessProductImg}
                      alt="Top Products Images "
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
                <span className="font-semibold">{product.shares}</span>
              </li>
            ))
          : dumyproducts.map((product, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-md mr-3 ">
                    <img
                      className="w-10"
                      src={BusinessProductImg}
                      alt="Top Products Images "
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
                <span className="font-semibold">{product.shares}</span>
              </li>
            ))}
      </ul>
    </div>
  )
}

TopProducts.propTypes = {
  products: PropTypes.array,
}

export default TopProducts
