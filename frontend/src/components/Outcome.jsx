import React from 'react'
import quote from "../assets/icons/quote.svg"
import intersect   from "../assets/background/intersect.svg"


const  Outcome =()=>{
  return (
    <>
    <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: `url(${intersect})`}}>
<div className="max-w-7xl px-4 mx-auto">
<div className="max-w-lg mx-auto mb-12 text-center">
<img className="mx-auto" src={quote} alt />
<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar domor</h2>
<p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
</div>
<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-in-out -m-10">
<div className="flex-shrink-0 w-full md:w-1/3 p-10">
<div className="p-8 mb-6 bg-white shadow rounded md:opacity-25 hover:opacity-100 transition duration-200">
<img src={quote}  alt />
<p className="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
<div className="flex items-center">
  <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
  <div className="pl-4">
    <p className="text-xl">Julie Brown</p>
    <p className="text-blue-600">Head of Development</p>
  </div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-1/3 p-10">
<div className="p-8 mb-6 bg-white shadow rounded hover:opacity-100 transition duration-200">
<img src={quote}  alt />
<p className="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
<div className="flex items-center">
  <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
  <div className="pl-4">
    <p className="text-xl">Julie Brown</p>
    <p className="text-blue-600">Head of Development</p>
  </div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-1/3 p-10">
<div className="p-8 mb-6 bg-white shadow rounded opacity-25 hover:opacity-100 transition duration-200">
<img src={quote}  alt />
<p className="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
<div className="flex items-center">
  <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
  <div className="pl-4">
    <p className="text-xl">Julie Brown</p>
    <p className="text-blue-600">Head of Development</p>
  </div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-1/3 p-10">
<div className="p-8 mb-6 bg-white shadow rounded opacity-25 hover:opacity-100 transition duration-200">
<img src={quote}  alt />
<p className="my-4 leading-loose text-blueGray-400">In et sagittis risus, sed molestie sapien. Suspendisse potenti. Sed pharetra, leo quis dignissim tristique, arcu arcu varius libero, ut vestibulum sapien odio facilisis nunc.</p>
<div className="flex items-center">
  <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt />
  <div className="pl-4">
    <p className="text-xl">Julie Brown</p>
    <p className="text-blue-600">Head of Development</p>
  </div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center space-x-2">
<button className="h-2 w-2 bg-blue-500 rounded-full" />
<button className="h-2 w-2 bg-blueGray-300 rounded-full" />
<button className="h-2 w-2 bg-blueGray-300 rounded-full" />
<button className="md:hidden h-2 w-2 bg-blueGray-300 rounded-full" />
</div>
</div>
</section>


</>
  )
}
export default Outcome;