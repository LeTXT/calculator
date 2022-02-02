import React, { useState } from "react"

import {array} from './Array'

import timeBlack from './img/timeBlack.svg'
import timeWhite from './img/timeWhite.svg'

import divisionBlack from './img/divisionBlack.svg'
import divisionWhite from './img/divisionWhite.svg'


export default function Screen({stateCa, state}) {
    const [screenState, setScreenState] = useState(state)

    
    
    return(
        <div className="flex screen">
            <h1 className={stateCa}>{screenState}</h1>
        </div>
    )

}