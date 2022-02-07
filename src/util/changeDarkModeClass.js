

export const calculatorColor = (darkModeActive) => darkModeActive === 'black classCalculator' ? 'white classCalculator' : 'black classCalculator' 

export const mode = (darkModeActive, Moon, Sun) => darkModeActive === 'black classCalculator' ? <img src={Moon} /> : <img src={Sun} />

export default {calculatorColor, mode}