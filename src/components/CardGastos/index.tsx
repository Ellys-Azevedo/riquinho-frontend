export interface ICardGastos{
    nome: String,
    valor: number,
    formaDePagamento: 'Débito' | 'Crédito',
    descricao?: string,
}

export function CardGastos(props:ICardGastos){
    return(
    <div>
        <h3>Nome: {props.nome}</h3>
        <h3>Valor:{props.valor}</h3>
        <h3>Forma de pagamento: {props.formaDePagamento}</h3>
        <h3>Descrição: {props.descricao}</h3>
    </div>
    )
}