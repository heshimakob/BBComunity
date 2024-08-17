import React from 'react'

export const Post = () => {
  return (
    <div className="flex flex-wrap justify-center">
                  
    <div  className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
                {/* les images poster */}
            </div>
            <div className="w-full md:w-2/3 p-4">
            {/* subscription */}
                <h2 className="text-2xl font-bold"></h2>
                <p className="text-gray-600">date</p>
            </div>
        </div>
        <div className="flex justify-between p-4">
            <p className="text-gray-600">By</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Read More
            </button>
        </div>
    </div>

</div>
  )
}
