import React from 'react'
import Marquee from "react-fast-marquee";
import './Marq.css'
const Marq = () => {
  return (
    <>
        <div className='main'>
            <Marquee speed={90}>
                <div className='child'>
                    <h3>#LowCostLiving</h3>
                </div>
            </Marquee>
            
            <Marquee speed={90}>
                <div className='child'>
                    <h3>#LowCostLiving</h3>
                </div>
            </Marquee>

            <Marquee speed={90}>
                <div className='child'>
                    <h3>#LowCostLiving</h3>
                </div>
            </Marquee>
        </div>
    </>
  )
}

export default Marq
