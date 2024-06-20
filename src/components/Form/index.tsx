import { useState } from "react"

export function Form(){
    function cadastrarUsuario(e:any) {
        e.preventDefault() //Isoo pq não tenho banco de dados,sem processo de requisição

        console.log(`O usuario com o número ${tel} e com o nome${name} e senha ${password} foi cadastrado`)
    }

    const [tel, setTel] = useState<string>()
    const [name, setName] = useState<string>()
    const [password, setPassword] = useState<string>()
   

    return(
        <>
            <div style={{
                backgroundColor: "#F1F1F1", 
                display:"flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                width:"100vw",
                height: "100vh"

            }}>
                <div style={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "calc(7px + 2vmin)",
                    color: "#868686",
                    padding: "50px",
                    borderRadius: "10px",
                    boxShadow:"0px 0px 10px",
                    margin: "auto",
                    width:"430px",
                    height: "550px"
                }}>
                    <p>Criar conta!</p>
                    <form onSubmit= {cadastrarUsuario}> 
                        <style>
                            { `
                                input{
                                    width:430px;
                                    height:30px;
                                    margin-bottom: 15px;
                                    padding:7px;
                                    border: 1px solid #94FD42;
                                    border-radius: 12px;
                                    background-color:#F1F1F1;
                                    font-size: 18px;

                                }
                                
                                .botaoCadastrar, .botaoTenhoConta{
                                    width: 300px;
                                    height: 30px;
                                    display: block;
                                    margin-left: auto;
                                    margin-right:auto;
                                    margin-bottom: 1px solid;
                                    padding: 5px;
                                    border-radius: 7px;
                                    color: white;
                                }

                                .botaoCadastrar{
                                    background-color: #94FD42;
                                }

                                .botaoTenhoConta{
                                     background-color:#6329AF;
                                }
                                
                            
                            `}
                        </style>

                        <div>
                            <input 
                            placeholder="(00) 0000-0000"  
                            onChange={(e) => setTel(e.target.value)}/>
                        </div>
                        <div>

                            <input
                            placeholder="Digite o seu nome: " 
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <input
                            type="password"
                            placeholder=" Digite sua senha:"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="submit" value="CADASTRAR" className="botaoCadastrar"/>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=y-STe_g795o&list=RD6-u3gr9jQf4&index=17" ><input type="button" value="ACESSAR MINHA CONTA" className="botaoTenhoConta"/></a>
                        </div>
                    </form>
                </div>
            </div>   
        </> 
    )
}