import React, { useState } from "react"

import Moon from './img/moon.svg'
import Sun from './img/sun.svg'

export default function ModeCa({setStateCa, stateCa}) {

    const nColor = () => stateCa === 'black' ? 'white' : 'black' 

    const mode = () => stateCa === 'black' ? <img src={Moon} /> : <img src={Sun} />
            
      

    const handleClick = () => {
        setStateCa(nColor())
        
    }

    return(
        <div className="mode">
            <button className='modeSize' onClick={() => handleClick()}>{mode()}</button>
        </div>
    )
}