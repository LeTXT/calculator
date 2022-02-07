import React, { useState } from "react"

import Button from '../components/Button'
import BtnSwitch from "../components/BtnSwitchDarkMode"
import Screen from '../components/Screen'

import {arrB, array} from '../components/Array'

import { operationsOrDot, test } from "../util/OperationsOrDot"

import { btnIcon } from '../util/validateIcon'

export default function Calculator() {
    const [stateCalculator, setStateCalculator] = useState([])
    const [darkModeActive, setDarkModeActive] = useState('black classCalculator')

    console.log(stateCalculator)
    return (
        
        <div className={darkModeActive} >
            <div>
                <BtnSwitch darkModeActive={darkModeActive} setDarkModeActive={setDarkModeActive}/>
            </div>
            <div>
                <Screen darkModeActive={darkModeActive} stateCalculator={stateCalculator}/>
            </div>
            <div className="line"></div>
            <div className="flex">
            {
                arrB.map((
                    valueArrB, index) => {
                return <Button valueArrB={valueArrB} btnIcon={btnIcon(valueArrB, darkModeActive)} darkModeActive={darkModeActive} stateCalculator={stateCalculator} key={index} onClick={() => operationsOrDot(setStateCalculator, stateCalculator, valueArrB)} />
                })
            }
            </div>
            

        </div>
   
    )
}