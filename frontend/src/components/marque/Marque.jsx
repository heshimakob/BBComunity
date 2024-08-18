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
    <div className='h-[200px] overflow-hidden'>

        <Marquee>
            <div className='flex justify-center items-center h-100'>
                <img src={wito} alt='ohh'/>
                {/* <img src={orange} alt='ohh'/> */}
                {/* <img src={france} alt='ohh'/> */}
                {/* <img src={find} alt='ohh'/> */}
                <img src={eclo} alt='ohh'/>
                <img src={voda} alt='ohh'/>
            </div>


        </Marquee>
   
    </div>
  )
}
export default Marque;