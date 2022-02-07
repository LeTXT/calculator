import { operations } from "../components/Array"
import { searchOperator } from './OperationsOrDot'

// search the operator index
export const searchOperatorIndex = (state) => {
    let arr = state.indexOf(searchOperator(state))
    if(arr === -1) {
        return 
    } else {
        return arr +1
    }
}


// this function is for filter the operator
const onlyNumberOnScreen = (state) => {
        const onlyNumber = []
        onlyNumber.push(...state)
        const arr = searchOperatorIndex(state)
        console.log(arr)
        
    if(searchOperator(state) === state[state.length -1]) {
        onlyNumber.pop()
        
        return onlyNumber
    } else {
        onlyNumber.splice(0, arr)
        
        return onlyNumber
    }
}

// the return of this function will be shown on the screen
export const showScreen = (state) => {
    if(searchOperator(state)) {
        return onlyNumberOnScreen(state)
    } else {
        return state
    }
}

export default  { showScreen, searchOperatorIndex }