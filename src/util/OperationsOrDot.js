import { operations } from "../components/Array"

import { searchOperatorIndex } from './showScreen'

// to use with = or operators
const calculateValue = (state, set, value) => {
    const arrValue = state
    if(state.some((e) => e === '.')) {
        const arrEval = eval(arrValue.join([])).toFixed(1)
        set([])
        return set([arrEval, value])
    } else {
        const arrEval = eval(arrValue.join([]))
        set([])
        return set([arrEval, value])
    }
}

// to use to return value
const returnValue = (set, state, value) => set([...state, value])

// search operator inside the state
export const searchOperator = (state) => {
    for(let i = 0; i < state.length; i++) {
        let findOperator = operations.find((e) => e === state[i])
        if(findOperator !== undefined && state.length > 0) {
            return findOperator
        }
    }
}

// used to return decimal value if there is a dot
const valueReturn = (set, arrValue) => {
    if(arrValue.some((e) => e === '.')) {
        const arrEval = eval(arrValue.join([])).toFixed(1)
        set([])
        return set([arrEval, undefined])
    } else {
        const arrEval = eval(arrValue.join([]))
        set([])
        return set([arrEval, undefined])
    }
}

// used to return percentage operations
const calcPercent = (state, set) => {
        const arrValue = state
    if (searchOperator(state) === '+' || searchOperator(state) === '-') {
        const findOperator = state.indexOf(searchOperator(state))
        arrValue.push('/100', '*', state.slice(0, findOperator).join([]))
        console.log(arrValue)
        return valueReturn(set, arrValue)
    } 
    if(searchOperator(state) === '/') {
        arrValue.push('*100')
        return valueReturn(set, arrValue)
    }
    else {
        arrValue.push('/100')
        return valueReturn(set, arrValue)
    }
}


export function operationsOrDot (set, state, value) {
    // clear array
    if(value === 'C') {
        return set([])
    } 

    // backspace
    if(value === 'BS') {
        if(searchOperator(state) === state[state.length -1]) {
            state.pop()
            state.pop()
            return set([...state])
        } else {
            state.pop()
            return set([...state])
        }
        
    }

    // case be operations
    if (operations.some((e) => e === value)) {
        if(state.length === 0) {
            return
            // if there is an operator, change him 
        } else if (searchOperator(state) === state[state.length -1]) {
            state.pop()
            returnValue(set, state, value)
            return 
            
        } else if (value === '%') {
            return calcPercent(state, set, value)
        }
        // if there is already an operator, equates array
        else if (searchOperator(state) && state.length >= 3) {
            return calculateValue(state, set, value)   
        }
        else {
            return returnValue(set, state, value)
        }
    }

    // Equal
    if(value === '=') {
        if(state.length > searchOperatorIndex(state)) {
            return calculateValue(state, set)
        }
        return
    }
    // case be dot
    if(value === '.') {
        if(state.some((e) => e === value) && searchOperator(state) === undefined) {
            return
        } else if (state[1] === undefined && state[state.length -1] === value && state.length === 2) {
            return
        } else if (state[state.length -1] !== searchOperator(state)) {
            return returnValue(set, state, value)
        } else if (searchOperator(state) || state.length === 0) {
            return set([...state, 0, value])
        } else {
            return returnValue(set, state, value)
        }
    }
    // if value is 0
    if (value === 0) {
        if(state[0] === value && state.length === 1) {
            return
        } else if (state[state.length -2] === searchOperator(state) && searchOperator(state) !== undefined && state[state.length -1] === value) {
            return
        } else {
            return returnValue(set, state, value)
        }
    }
    // nothing? return value
    else {
        if(state[1] === undefined && state.length === 2) {
            set([])
            set([value])
            return
        } else {
            return returnValue(set, state, value)
        }
    }
}


    
    


export default {operationsOrDot, searchOperator}