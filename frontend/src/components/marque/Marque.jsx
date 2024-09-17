import React from 'react'
import Marquee from 'react-fast-marquee'
import wito from '../../assets/wito.png'
import orange from '../../assets/orange.png'
import find from '../../assets/find.png'
import france from '../../assets/france.png'
import eclo from '../../assets/eclo.png' 
import voda from '../../assets/voda.png'

const  Marque =()=>{
  return (

 
  

      <div className='container mx-auto h-70 text-center' >
        <h1 className='text-3xl font-bold text-gray-500 mt-10 mb-10'> Ils nous sponsorisent</h1>
          <Marquee>
            
            <div className='flex justify-center items-center h-100 pl-10'>
                <img src={wito} size={40} alt='ohh'/>
                <img src={orange} size={40} alt='ohh'/>
                <img src={france} size={40} alt='ohh'/>
                <img src={find} size={40} alt='ohh'/>
                <img src={eclo} size={40} alt='ohh'/>
                <img src={voda} size={40} alt='ohh'/>
            </div>


        </Marquee>
      </div>
   

  )
}
export default Marque;