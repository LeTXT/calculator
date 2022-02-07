import React from "react"
import { activeBtn } from '../util/btnOperatorActive'

export default function Button({darkModeActive, valueArrB, onClick, stateCalculator, btnIcon}) {
    
    return(
        <div className="btn-size">
            <button className={activeBtn(stateCalculator, valueArrB, darkModeActive)} onClick={onClick} disabled={valueArrB === undefined}>{btnIcon}</button>
        </div>
    )
}
