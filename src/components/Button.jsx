import React, { useState } from "react"
import { array, icon } from "./Array"

import timeBlack from './img/timeBlack.svg'
import timeWhite from './img/timeWhite.svg'

import divisionBlack from './img/divisionBlack.svg'
import divisionWhite from './img/divisionWhite.svg'

import backspaceBlack from './img/backspaceBlack.svg'
import backspaceWhite from './img/backspaceWhite.svg'

import minusBlack from './img/minusBlack.svg'
import minusWhite from './img/minusWhite.svg'

import plusBlack from './img/plusBlack.svg'
import plusWhite from './img/plusWhite.svg'

import percentBlack from './img/percentBlack.svg'
import percentWhite from './img/percentWhite.svg'

import cBlack from './img/CBlack.svg'
import cWhite from './img/CWhite.svg'

import equal from './img/equal.svg'

export default function Button({stateCa, value, setState, state}) {
    const [stateE, setStateE] = useState(false)

    const pushValue = () => {
        
        if(value === 'C') {
            array.splice(0)
            setState(array)
        } else if(icon.some((e) => e === value)) {

            if (array.length === 0) {
                console.log('aqui');
            } else if (icon.some((e) => e === array[1]) && array.length === 2) {
                array[1] = value
                setState([array])
            } 
            else {
                const arrB = eval(array.join([]))
                console.log('icon');
                array.splice(0)
                array.push(arrB)
                array.push(value)
                setState([array])

            }
            
            
        } else if(value === 'BS') {
            array.pop()
            setState([array])
        } else if(value === '=') {
            if(array.length > 2) {

                const arrB = eval(array.join([]))
                console.log('=');
                array.splice(0)
                array.push(arrB)
                    
                setState([array])
            }
        }
        else if (value === '.') {
            if(array.find((e) => e === value)) {

            } else {
                array.push(value)
                setState([array])
            }
        } 
        else if (value === 0) {
            if(array[0] === value && array.length === 1) {

            } else if (array[2] === value && array.length === 3 && icon.find((e) => e === array[1])) {

            } else {
                array.push(value)
                setState([array])
            }

        }
        
        else {
            array.push(value)
            setState([array])
           
        }
    }

    const valueB = () => {
        if(value === 'BS') {
            if(stateCa === 'black') {
                return <img src={backspaceWhite} />

            } else {
                return <img src={backspaceBlack} />
            }

        } else if (value === '*') {
            if(stateCa === 'black') {
                return <img src={timeWhite} />

            } else {
                return <img src={timeBlack} />
            }
        } else if (value === '/') {
            if(stateCa === 'black') {
                return <img src={divisionWhite} />

            } else {
                return <img src={divisionBlack} />
            }
        } else if (value === '=') {
            return <img src={equal} />
        } 
        else if (value === '+') {
            if(stateCa === 'black') {
                return <img src={plusWhite} />

            } else {
                return <img src={plusBlack} />
            }
        } else if (value === '-') {
            if(stateCa === 'black') {
                return <img src={minusWhite} />

            } else {
                return <img src={minusBlack} />
            }
        } else if (value === '%') {
            if(stateCa === 'black') {
                return <img src={percentWhite} />

            } else {
                return <img src={percentBlack} />
            }
        } else if (value === 'C') {
            if(stateCa === 'black') {
                return <img src={cWhite} />

            } else {
                return <img src={cBlack} />
            }
        }
         else {
            return value
        }

    }

    console.log(array.length)
    

    const handleClick = () => {
        
        pushValue()
        console.log(stateE)
        console.log(value)
        console.log(array)
    }

    const classB = () => stateCa === 'black' ? 'blackB' : 'whiteB'
    
    return(
        <div className="btn-size">
            <button className={classB()} onClick={() => handleClick()} disabled={value === undefined}>{valueB()}</button>
        </div>
    )
}
