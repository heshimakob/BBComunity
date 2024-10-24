import React from 'react'
import Marquee from 'react-fast-marquee'
import wito from '../../assets/wito.png'
import orange from '../../assets/pepi.png'

import france from '../../assets/france.png'
import eclo from '../../assets/eclo.png' 
import voda from '../../assets/fbb.png'
import institut from '../../assets/if.png'
import ifb from '../../assets/ifb.png'
import horizon from '../../assets/horizon.png'

const  Marque =()=>{
  return (

 
  

      <div className='container mx-auto h-70 text-center' >
        <h1 className='text-3xl font-bold text-gray-500 mt-10 mb-10'> Ils nous sponsorisent</h1>
          <Marquee>
            
            <div className='flex justify-center items-center h-100 pl-10'>
                <img src={wito} className='h-32'alt='ohh'/>
                <img src={horizon} className='h-32'alt='ohh'/>

                <img src={orange} className='h-32' alt='ohh'/>
                <img src={ifb} className='h-32' alt='ohh'/>
                <img src={france} className='h-32' alt='ohh'/>
    
                <img src={eclo} className='h-32' alt='ohh'/>
                <img src={voda}  className='h-32'alt='ohh'/>
                <img src={institut}  className='h-32'alt='ohh'/>
            </div>


        </Marquee>
      </div>
   

  )
}
export default Marque;