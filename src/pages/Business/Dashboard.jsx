import React, { useEffect, useState } from 'react'
import GrowBusinessCard from '../../components/ui/GrowBusinessCard'
import BusinessDashboardHeader from '../../components/ui/Header'
import InsightsCard from '../../components/ui/InsightsCard'
import TableData from '../../components/ui/TableData'
import TopProducts from '../../components/ui/TopProducts'
import TrafficReportGraph from '../../components/ui/TrafficReportGraph'
import { fetchProducts } from './../../services/api.js'

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
]

// Sample data for the bar chart
const graphDummyData = [
  { month: 'Jan', views: 230 },
  { month: 'Feb', views: 180 },
  { month: 'Mar', views: 450 },
  { month: 'Apr', views: 400 },
  { month: 'May', views: 350 },
  { month: 'Jun', views: 250 },
  { month: 'Jul', views: 330 },
  { month: 'Aug', views: 390 },
  { month: 'Sep', views: 200 },
  { month: 'Oct', views: 240 },
  { month: 'Nov', views: 280 },
  { month: 'Dec', views: 180 },
]

function Dashboard() {
  const [productsData, setProducts] = useState(productsDumyData)

  async function handleShowProductDetails(productId) {
    // console.log(productId)

    const apiUrl = `192.168.100.214:8000/api/products/${productId}/`
    console.log(apiUrl)

    try {
      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const productData = await response.json()

      return productData
    } catch (error) {
      console.error('Failed to fetch that product:', error.message)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts()
      setProducts(data)
    }

    fetchData()
  }, [])

  // Calculate total shares
  const totalShares = productsData.reduce(
    (sum, product) => sum + (product.shares || 0),
    0,
  )

  // Calculate total product count
  const productCount = productsData.length

  // Dummy value for TotalIncDec (Replace this with actual logic if required)
  const totalIncDec = 5 // Example static increment/decrement percentage

  const slicedTopData = productsData.slice(0, 5)

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

      <section className="px-6 py-6 flex gap-6 ">
        <div className="flex p-8 gap-6 flex-col shadow-[0_0_10px_rgba(0,0,0,0.1)] w-2/3 bg-white rounded-xl">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold px-6">Traffic Report</h2>
            <div className="cursor-pointer">
              <select
                className="p-2 outline-none cursor-pointer bg-white text-xl text-gray-500"
                name="month"
                id="month"
                defaultValue="last12Months"
              >
                <option value="last12Months">Last 12 Months</option>
                <option value="last6Months">Last 6 Months</option>
                <option value="last3Months">Last 3 Months</option>
              </select>
            </div>
          </div>

          <TrafficReportGraph data={graphDummyData} />
        </div>
        <TopProducts products={slicedTopData} />
      </section>

      <div className="my-8 mx-8 rounded-2xl flex flex-col gap-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex  justify-between px-8 py-8 items-center">
          <h2 className="text-xl font-semibold">Products</h2>
          <select
            className="bg-white text-gray-500 p-2 text-xl outline-none cursor-pointer"
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Active">January</option>
            <option value="Declined">February</option>
          </select>
        </div>
        <div className="px-4 ">
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
  )
}

export default Dashboard
