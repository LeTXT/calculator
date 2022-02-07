import timeBlack from '../img/timeBlack.svg'
import timeWhite from '../img/timeWhite.svg'

import divisionBlack from '../img/divisionBlack.svg'
import divisionWhite from '../img/divisionWhite.svg'

import backspaceBlack from '../img/backspaceBlack.svg'
import backspaceWhite from '../img/backspaceWhite.svg'

import minusBlack from '../img/minusBlack.svg'
import minusWhite from '../img/minusWhite.svg'

import plusBlack from '../img/plusBlack.svg'
import plusWhite from '../img/plusWhite.svg'

import percentBlack from '../img/percentBlack.svg'
import percentWhite from '../img/percentWhite.svg'

import cBlack from '../img/CBlack.svg'
import cWhite from '../img/CWhite.svg'

import equal from '../img/equal.svg'

// Create an img tag
const img = (icon) => {
    return <img src={icon} />
}

// checks if the class is dark or white
const findIcon = (darkModeActive, white, black) => {
    const icon = darkModeActive === 'black classCalculator' ? img(white) : img(black)
    return icon
}

// Change the button with icons to image
export const btnIcon = (value, darkModeActive) => {
    if(value === 'C') {
        return findIcon(darkModeActive, cWhite, cBlack)
    } 
    if(value === 'BS') {
        return findIcon(darkModeActive, backspaceWhite, backspaceBlack)
    }
    if(value === '%') {
        return findIcon(darkModeActive, percentWhite, percentBlack)
    }
    if(value === '/') {
        return findIcon(darkModeActive, divisionWhite, divisionBlack)
    }
    if(value === '*') {
        return findIcon(darkModeActive, timeWhite, timeBlack)
    }
    if(value === '-') {
        return findIcon(darkModeActive, minusWhite, minusBlack)
    }
    if(value === '+') {
        return findIcon(darkModeActive, plusWhite, plusBlack)
    }
    if(value === '=') {
        return img(equal)
    }
    else {
        return value
    }
}

export default { btnIcon }