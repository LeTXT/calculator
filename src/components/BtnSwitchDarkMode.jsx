import React from "react"

import { calculatorColor, mode } from '../util/changeDarkModeClass'

import Moon from '../img/moon.svg'
import Sun from '../img/sun.svg'

export default function ModeCa({setDarkModeActive, darkModeActive}) {

    return(
        <div className="mode">
            <button className='modeSize' onClick={() => setDarkModeActive(calculatorColor(darkModeActive))}>{mode(darkModeActive, Moon, Sun)}</button>
        </div>
    )
}