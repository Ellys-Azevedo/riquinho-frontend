import React from "react"
import { ICardGastos } from "../../components/CardGastos"
import { CardGastos } from "../../components/CardGastos"
import { Contador } from "../../components/Contador"
import { Form } from "../../components/Form"



export function MeusGastos(){
    let gastos : ICardGastos[] = [
        {
        nome: "Ellys",
        valor: 1200,
        formaDePagamento: 'Crédito',
        descricao: "Curso online",
        },

        {
        nome: "Oziel",
        valor: 3000,
        formaDePagamento: 'Débito',
        descricao: "Passagem",
    
        },

        {
        nome: "Lameque",
        valor: 11200,
        formaDePagamento: 'Débito',
        descricao: "Móveis",
    
        }

    ]

    return(
        <>
            {gastos.map((pessoa : ICardGastos)=>{
                return(
                     <CardGastos 
                        nome={pessoa.nome} 
                        valor={pessoa.valor} 
                        formaDePagamento={pessoa.formaDePagamento}
                        descricao={pessoa.descricao}     
                                />
                 )
            })}

            <Contador/>

    </>
    )
}