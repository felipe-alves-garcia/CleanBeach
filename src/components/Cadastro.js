import '../css/cadastro.css'
import {useState} from 'react';

import nomeImg from '../img/nome.png';
import senhaImg from '../img/senha.png';
import emailImg from '../img/gmail.png';
import seta from '../img/seta.png';

function Cadastro (){
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhano, setSenhano] = useState("");
    const [nome, setNome] = useState("");
    const [infoSenha, setInfoSenha] = useState("senha");
    const [infoSenhano, setInfoSenhano] = useState("senha novamente");

    function cadastrar (e){
        e.preventDefault();

        if(senha !== senhano){
            setInfoSenha("senhas diferentes!")
            setInfoSenhano("senhas diferentes!")
            setSenha("");
            setSenhano("");
            console.log("oi")
        }
        else{
            //setInfoSenha("senha");
            //setInfoSenhano("senha novamente");
        }

        console.log(email);
        console.log(senha);
        console.log(senhano);
        console.log(nome);
    }

    return (
        <>
            <div className="'container-fluid d-flex justify-content-evenly flex-column align-items-center" id="divCadastro">
                <a href="/login" id="voltar">
                    <img src={seta} alt="seta indicando para voltar"/>
                </a>
                <div className="row">   
                    <div className="col-12">
                        <h2 id="tituloCadastro" className="mt-5 px-5 py-1">Informações</h2>
                    </div>
                </div>
                <form onSubmit={cadastrar} className="row d-flex flex-column align-items-center w-100">
                    <div className="col-12 col-md-9">
                        <div className="w-100 mt-3">
                            <h3 id="cadastroH3">nome de usuário</h3>
                            <div id="cadastroEntrada">
                                <div id="cadastroSimbolo">
                                    <img src={nomeImg} alt="simbolo de usuário"/>
                                </div>
                                <input type="text" onChange={(e) => setNome(e.target.value)} id="cadastroInput"/>
                            </div>
                        </div>
                        <div className="w-100 mt-3">
                            <h3 id="cadastroH3">e-mail</h3>
                            <div id="cadastroEntrada">
                                <div id="cadastroSimbolo">
                                    <img src={emailImg} alt="simbolo de e-mail"/>
                                </div>
                                <input type="email" onChange={e => setEmail(e.target.value)} id="cadastroInput"/>
                            </div>
                        </div>
                        <div className="w-100 mt-3">
                            <h3 id="cadastroH3">{infoSenha}</h3>
                            <div id="cadastroEntrada">
                                <div id="cadastroSimbolo">
                                    <img src={senhaImg} alt="simbolo de senha"/>
                                </div>
                                <input type="password" onChange={e => setSenha(e.target.value)} id="cadastroInput"/>
                            </div>
                        </div>
                        <div className="w-100 mt-3">
                            <h3 id="cadastroH3">{infoSenhano}</h3>
                            <div id="cadastroEntrada">
                                <div id="cadastroSimbolo">
                                    <img src={emailImg} alt="simbolo de senha"/>
                                </div>
                                <input type="password" onChange={e => setSenhano(e.target.value)} id="cadastroInput"/>
                            </div>
                        </div>
                        <input id="botaoCadastro" type="submit" value="Cadastrar" className="py-2"/>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;