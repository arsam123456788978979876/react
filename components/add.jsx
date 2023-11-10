import { useState } from "react"
import obj from "../jsCodes/obj"

export default function Add(props) {
    let [load , setload]= useState("")
    
    
    return (
        <>
        <h1>arsam: {load}</h1>
            <div className="todo">
                <input onKeyDown={(e) => {
                    let char = e.key
                   setload(load +char) 
                }} type="text"/>

                <button onClick={() => {
                    props.handel(load)
                }}>sdfsfsfsfs</button>

                
                
                
            </div>
        </>
    )
}