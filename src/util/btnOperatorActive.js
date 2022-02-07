import { searchOperator } from "./OperationsOrDot"

export const activeBtn = (state, value, darkModeActive) => {
    if (darkModeActive === 'black classCalculator') {
        if(searchOperator(state) === value && searchOperator(state) !== undefined) {
            return 'btnOperatorActiveBlack black'
        } else {
            return 'black'
        }
    } else {
        if(searchOperator(state) === value && searchOperator(state) !== undefined) {
            return 'btnOperatorActiveWhite white'
        } else {
            return 'white'
        }
    }
    
}

export default { activeBtn }