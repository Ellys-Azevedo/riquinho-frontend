import { useState, useEffect } from "react"

export function Botoes(){
    const [cor, setCor] = useState("black")

    useEffect (() => {
        console.log("O botão foiacionado")
    },[cor])

    return (
        <div>
            <button 
                onClick={() => {
                    setCor("green")
                }}
            >Fica verde</button>

            <button 
            
                onClick={() => {
                    setCor("blue")
                }}
            >Ficar azul</button>

            <div style={{background:cor, height: "100px", width: "100px"}  }></div>

        </div>
    
        )
}