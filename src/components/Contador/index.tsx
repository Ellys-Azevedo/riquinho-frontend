import { useEffect, useState } from "react"
// import { clearTimeout } from "timers"

export function Contador(){

    const [cliks , setCliks] = useState(0)
    const [cor, setCor] = useState("red")

    useEffect(() => {
        console.log("Toda vez que rodar, o console aparecerá")
    })


    useEffect(()=> {
        console.log("Eu apareso toda vez que aconte um evento com o cliks")
    },[cliks])//o clikis está diretamente ligado ao botão clique aqui


    useEffect(()=> {
        console.log("Eu só apareço quando recarrego a página")
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`Esse evento foi clicado ${cliks} vezes`)
        }, 2000)// quantas vezes foi cliciado em 2 segundo, dessa forma vai se repetirtodas as vezes o console

        return () => {
            clearTimeout(timer);
        }
    },[cliks])




    return(
        <div>
          <p>Você clicou {cliks} vezes no botão</p>
            <button
                onClick={() => {
                    setCliks((value)=> value + 1)
                }}
            >
                Clique aqui!
            </button>

            <br />
            <br />
            <br />

            <button
                onClick={() => {
                    setCor("blue")
                }}
            >
                Mudar para Azul
            </button>

            <button
                onClick={() => {
                    setCor("red")
                }}
            >
                Mudar para Vermelho
            </button>

            <div style={{ background: cor, height: "50px", width: "50px"  }}>
                
            </div> 

        </div>
    )
}

