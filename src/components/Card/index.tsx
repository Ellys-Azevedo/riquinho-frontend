//Minha interface
export interface Ipessoa{
    nomeCompleto: string,
    dataDeNascimento: string,
    profissao?: string,
    estadoCivil: string
}

//Componente

export function Card(props: Ipessoa){
    return(
        <div>
            <h3>Nome completo: {props.nomeCompleto}</h3>
            <h3>Data de nascimento: {props.dataDeNascimento}</h3>
            <h3>Profissão: {props.profissao || "a procura de um emprego"}</h3>
            <h3>Estado Civil:{props.estadoCivil} </h3>
        </div>
    )
}


