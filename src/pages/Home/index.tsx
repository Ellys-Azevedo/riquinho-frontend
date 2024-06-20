import { Botoes } from "../../components/Botoes";
import { Card, Ipessoa } from "../../components/Card";

export function Home(){    
    let familia = [{
        nomeCompleto: "Ellys R.F.Azevedo", 
        dataDeNascimento: "30/09/2003", 
        profissao:"", 
        estadoCivil:"Noiva"
      },
      {
        nomeCompleto: "Atania M.F.Azevedo", 
        dataDeNascimento: "30/07/1975", 
        profissao: "Cabelereira", 
        estadoCivil:"Casada"
      },
      {
        nomeCompleto: "Lameque F.Azevedo", 
        dataDeNascimento: "22/05/2000", 
        profissao:"programador", 
        estadoCivil:"Casado" 
      },
      {
        nomeCompleto: "Ronaldo de Azevedo", 
        dataDeNascimento: "25/10/1968", 
        profissao:"Supervisor", 
        estadoCivil:"Casado" 
      },
    ]
    return(
        <>
           {familia.map((item : Ipessoa)=>{
                return(
                    <Card 
                        nomeCompleto={item.nomeCompleto} 
                        dataDeNascimento={item.dataDeNascimento} 
                        estadoCivil={item.estadoCivil}  
                        profissao={item.profissao}                  
                    />
                )

           })}
           <Botoes/>
        </> 
    )
}


