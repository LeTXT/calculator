import React from "react"
import { showScreen } from '../util/showScreen'

export default function Screen({stateCalculator}) {
    
    return(
        <div className="flex fixScreen">
            <h1 className='classScreen'>{showScreen(stateCalculator)}</h1>
        </div>
    )

}