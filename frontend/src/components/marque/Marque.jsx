import React from 'react'
// import Marquee from 'react-fast-marquee'
import wito from '../../assets/wito.png'
import orange from '../../assets/orange.png'
import find from '../../assets/find.png'
import france from '../../assets/france.png'
import eclo from '../../assets/eclo.png'
import voda from '../../assets/voda.png'

const  Marque =()=>{
  return (

    <div className="container mx-auto px-4 pt-10">
    <h1 className="text-3xl font-bold text-center mb-5">Ils nous ont approuvés</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10">
      <div className="flex flex-col items-center">
        <img src={wito} alt="Goma Serena Hotel" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Goma Serena Hotel</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={orange}  alt="Parc National des Virunga" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Parc National des Virunga</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={find} alt="Institut Français de Goma" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Institut français de Goma</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={eclo}  alt="Katembo Group" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Katembo group</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={voda}  alt="Ambassade de France en RDC" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Ambassade de France en RDC</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={wito}  alt="Forum Creation Africa" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Forum Création Africa</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={france}  alt="Union Africaine" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Union Africaine</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={orange} alt="Ministère de la Culture (France)" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Ministère de la Culture (France)</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={find}  alt="Adyne Netherlands" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">Adyne Netherlands</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://i.imgur.com/V1K9b86.png" alt="AR/VR Africa" className="w-24 h-24" />
        <p className="text-center font-medium mt-2">AR/VR Africa</p>
      </div>
    </div>
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Membre de</h2>
      <img src={wito}  alt="Afrilabs" className="w-24 h-24" />
      <p className="text-center font-medium mt-2">Afrilabs</p>
    </div>
  </div>
    // <div className=' overflow-hidden'>

    //     <Marquee>
    //         <div className='flex justify-center items-center h-100'>
    //             <img src={wito} alt='ohh'/>
    //             {/* <img src={orange} alt='ohh'/> */}
    //             {/* <img src={france} alt='ohh'/> */}
    //             {/* <img src={find} alt='ohh'/> */}
    //             <img src={eclo} alt='ohh'/>
    //             <img src={voda} alt='ohh'/>
    //         </div>


    //     </Marquee>
   
    // </div>
  )
}
export default Marque;