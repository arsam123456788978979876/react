import "./styles.css"
import Add from "../components/add";
import Render from "../components/render";
import obj from "../jsCodes/obj";
import { useState } from "react";
 
export function App() {
    
    
    
    let [add1 , setAdd] = useState([])
    return (
        <>
        <Add handel = {(e) => {
            setAdd ( [
                ...add1,
                {
                    title: e,
                }
            ])
        }} />
        <br/>
        <br/>



        {add1.map((e) => {
            return <Render price = {e.title} />
        })}

        {/* <button onClick={() => {
            
           
            let object = [
                ...add1,
                 {
                title: "number5",
                status: true,
            }]
            setAdd(object)
        }} >click</button> */}
        </>
        
    );
  }