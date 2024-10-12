import React from 'react'

const Stat = () => {
  return (
    <>
                <section className="pt-8 pb-2 bg-blueGray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-3">
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Followers</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Monthly</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">250 324</p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-green-600">+18%</span>
            Since last week
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Customers</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Monthly</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">250 324</p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-green-600">+18%</span>
            Since last week
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Projects</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Monthly</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">252</p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-red-500">-18.5%</span>
            Since last week
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
  )
}

export default Stat