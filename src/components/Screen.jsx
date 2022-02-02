import React, { useState } from "react"


export default function Screen({stateCa, state}) {
    const [screenState, setScreenState] = useState(state)

    
    
    return(
        <div className="flex screen">
            <h1 className={stateCa}>{screenState}</h1>
        </div>
    )

}