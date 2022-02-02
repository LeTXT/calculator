import React, { useState } from "react"

import Button from './Button'
import ModeCa from "./ModeCa"
import Screen from './Screen'

import {arrB, array} from './Array'

export default function Calculator(key) {
    const [state, setState] = useState(array)
    const [stateCa, setStateCa] = useState('black')
    
    


    return (
        
        <div className={stateCa} >
            <div>
                <ModeCa stateCa={stateCa} setStateCa={setStateCa}/>
            </div>
            <div>
                <Screen stateCa={stateCa} state={state}/>
            </div>
            <div className="flex">
            {
                arrB.map((
                    value, index) => {
                return <Button value={value} stateCa={stateCa} state={state} setState={setState} key={index} />
                })
            }
            </div>
            

        </div>
   
    )
}