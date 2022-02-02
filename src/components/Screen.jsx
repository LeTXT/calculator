import React, { useState } from "react"


export default function Screen({stateCa, state}) {
    const [screenState] = useState(state)

    const classS = () => stateCa === 'black' ? 'blackS' : 'whiteS'
    
    return(
        <div className="flex screen">
            <h1 className={classS()}>{screenState}</h1>
        </div>
    )

}