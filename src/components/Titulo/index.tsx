interface ITitulo{
    texto: string;

}

export function Titulo(props:ITitulo){
    return(
        
        <h1>{props.texto}</h1>
    )
}


