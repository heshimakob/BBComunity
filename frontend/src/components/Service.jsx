import React from 'react'

const Service = () => {
  return (

    <div className="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-green-900 overflow-hidden">
    <div className=" flex justify-center items-center  text-white px-4 py-16 ml-12 mr-12">
    <div className='w-1/2'>  
  <h1 className="text-4xl font-bold text-left mb-8">Nos processus integral</h1>
  <p className="text-lg text-left mb-8">Do you want to augment your  productivity? Then welcome one of our apprentices into your team! Black Born Community Apprenticeship Program connects the Africa's apprentices from our Andela Technical Leadership Program</p>
  <div className="flex ">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Apply now</button>
  </div>
</div>

    <div className='w-1/2 '>
    <div className="grid grid-cols-1 gap-8 mt-10">
      <div className=" items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">1</div>
        <h3 className="text-xl font-bold mt-4">Application</h3>
        <p className="text-gray-100 mt-2">Submit your application and tell us what skillsets you need. We will then assess our talent pool to find the perfect fit for your team.</p>
      </div>
      <div className="items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">2</div>
        <h3 className="text-xl font-bold mt-4">Matching</h3>
        <p className="text-gray-100 mt-2">We'll match you with our talented apprentices, who will seamlessly integrate into your organization and add value.</p>
      </div>
      <div className="items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">3</div>
        <h3 className="text-xl font-bold mt-4">Continued Support</h3>
        <p className="text-gray-100 mt-2">We'll provide a flawless feedback process between your engineering manager/team lead and the apprentice, alongside additional coaching and technical sessions to help them become even more of an asset to your team.</p>
      </div>
      <div className="items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">4</div>
        <h3 className="text-xl font-bold mt-4">Talent Retention</h3>
        <p className="text-gray-100 mt-2">Option to hire the apprentice at the completion of the 12 weeks or before if you're happy with their work.</p>
      </div>
    </div>
    </div>


  </div>

  </div>
  )
}

export default Service