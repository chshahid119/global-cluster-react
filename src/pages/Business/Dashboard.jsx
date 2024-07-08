import React, { useEffect, useState } from 'react';
import GrowBusinessCard from '../../components/ui/GrowBusinessCard';
import BusinessDashboardHeader from '../../components/ui/Header';
import InsightsCard from '../../components/ui/InsightsCard';
import TableData from '../../components/ui/TableData';
import TopProducts from '../../components/ui/TopProducts';
import TrafficReportGraph from '../../components/ui/TrafficReportGraph';
import { fetchProducts } from './../../services/api.js';

const productsDumyData = [
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Pending',
    traffic: '1200',
    action: 'Edit',
  },
  // ... other dummy products
];

function Dashboard() {
  const [productsData, setProducts] = useState(productsDumyData);

  async function handleShowProductDetails(productId) {
    // console.log(productId)

    const apiUrl = `192.168.100.214:8000/api/products/${productId}/`;
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const productData = await response.json();

      return productData;
    } catch (error) {
      console.error('Failed to fetch that product:', error.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  // Calculate total shares
  const totalShares = productsData.reduce(
    (sum, product) => sum + (product.shares || 0),
    0,
  );

  // Calculate total product count
  const productCount = productsData.length;

  // Dummy value for TotalIncDec (Replace this with actual logic if required)
  const totalIncDec = 5; // Example static increment/decrement percentage

  const slicedTopData = productsData.slice(0, 5);

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <div className="px-6 py-10 flex gap-6 flex-wrap bg-white">
        <InsightsCard
          CardName="Total Products"
          TotalCount={productCount}
          TotalIncDec={totalIncDec} // This can be replaced with actual calculation logic
        />

        <InsightsCard
          CardName="Total Shares"
          TotalCount={totalShares}
          TotalIncDec={totalIncDec} // This can be replaced with actual calculation logic
        />

        <GrowBusinessCard />
      </div>
      <div className="px-6 py-6 flex gap-6">
        <TrafficReportGraph />
        <TopProducts products={slicedTopData} />
      </div>

      <div className="my-8 mx-8 rounded-2xl flex flex-col gap-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <div className="flex  justify-between px-8 py-8 items-center">
          <h2 className="text-xl font-semibold">Products</h2>
          <select
            className="bg-[#f9f9fc] p-2 text-xl outline-none cursor-pointer"
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Active">January</option>
            <option value="Declined">February</option>
          </select>
        </div>
        <div className="px-4 py-8">
          <TableData
            type="dashboard"
            data={productsData ? slicedTopData : productsDumyData}
            tableHeadNames={[
              'Product Name',
              'Description',
              'No of Shares',
              'Traffic',
              'Status',
              'Action',
            ]}
            handleShowProductDetails={handleShowProductDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
