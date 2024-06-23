import React from 'react';

function ProductsBusiness() {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Products</h2>
          <select className="border rounded px-2 py-1">
            <option>Grid view</option>
          </select>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-4">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Description</th>
              <th className="p-4">No of Shares</th>
              <th className="p-4">Traffic</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                    </svg>
                  </div>
                  <span className="ml-2">Lorem ipsum</span>
                </div>
              </td>
              <td className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </td>
              <td className="p-4">423</td>
              <td className="p-4">1200</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Active
                </span>
              </td>
              <td className="p-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </td>
            </tr>
            {/* Additional rows can be added below */}
            <tr className="border-b">
              <td className="p-4">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v2h2v-2zm0-8H9v6h2V5z"></path>
                    </svg>
                  </div>
                  <span className="ml-2">Product B</span>
                </div>
              </td>
              <td className="p-4">Another description here...</td>
              <td className="p-4">567</td>
              <td className="p-4">1500</td>
              <td className="p-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Pending
                </span>
              </td>
              <td className="p-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-4">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5.5-5.5 1.4-1.4L10 12.2l7.1-7.1 1.4 1.4L10 15z"></path>
                    </svg>
                  </div>
                  <span className="ml-2">Product C</span>
                </div>
              </td>
              <td className="p-4">Different product description...</td>
              <td className="p-4">789</td>
              <td className="p-4">2000</td>
              <td className="p-4">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Inactive
                </span>
              </td>
              <td className="p-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsBusiness;
