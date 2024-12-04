import '../css/login.css';
import {useState} from 'react';

//import nome from '../img/nome.png';
import senhaImg from '../img/senha.png';
import emailImg from '../img/gmail.png';
//import info from '../img/info.png';
import seta from '../img/seta.png';

/*<button id="info">
<img src={info} alt="botao de informações sobre segurança e recursos após o cadastro ou login"/>
</button>
<div id="fundo"></div>
<div id="infotexto">
<h2><u>Sua Segurança</u></h2>
<p>
    &ThickSpace;&ThickSpace; &ThickSpace;Você terá uma senha, criada por você, criptografada, 
    que dará acesso à sua conta somente você. Caso 
    esqueça-a, poderá ser redefinida.
</p>
<h2><u>Recursos após o Cadastro</u></h2>
<p>
    &ThickSpace;&ThickSpace; &ThickSpace;Você terá acesso a jogos podendo competir atravéz de um rank 
    das melhores classificações, e também terá acesso a conteúdos de 
    importante relevância à consiência das pessoas e principalente das 
    crianças.
</p>
</div>*/

function Login (){

    const [login, setLogin] = useState("col-xl-5 col-lg-6 d-flex");    
    const [cadastro, setCadastro] = useState("col-xl-7 col-lg-6 col-12 d-none d-lg-flex");
    function celular (){
        setLogin("col-xl-5 col-lg-6 d-none");
        setCadastro("col-xl-7 col-lg-6 col-12 d-flex");
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function entrarConta (e){
        e.preventDefault();
        console.log(email);
        console.log(senha);
    }

    return(
        <>
            <div className="conatiner-fluid">
                <a href="/" id="voltar">
                    <img src={seta} alt="seta indicando para voltar"/>
                </a>
                <div className="row">
                    <div className={login} id="ca">
                        <div id="bemvindo">
                            <h2>Bem-Vindo</h2>
                            <hr className="col-lg-8 col-6"/>
                            <p className="px-5 col-12 col-sm-10 col-md-7 col-lg-12">
                                Cadastre-se e aproveite o conteúdo 
                                divertido e educativo grátris do site, compita com seus amigos!
                            </p>    
                        </div>
                        
                        <div>
                            <a id="botao" href="/cadastro" className="p-1">
                                <p className="m-0 py-2">Cadastrar-se</p>
                            </a>
                            <button id="botao" onClick={celular} className="p-1 mt-4 d-lg-none d-block">
                                <p className="m-0 py-2"> Entrar</p>
                            </button>    
                        </div>
                        
                    </div>
                    <div id="lo" className={cadastro}>
                        <div id="bemvindo">
                            <h2>Bem-Vindo de Volta!</h2>
                            <hr className="col-lg-12"/>    
                        </div>
                        
                        <form onSubmit={entrarConta}>
                            <div className="row px-4">
                                <div className="col-12">
                                    <div id="gmail" className="w-100">
                                        <h3>e-mail</h3>
                                        <div id="entrada" className="w-100">
                                            <div id="simbolo">
                                                <img src={emailImg} alt="simbolo de e-mail"/>
                                            </div>
                                            <input type="email" onChange={e => setEmail(e.target.value)} id="inputgmail"/>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-12">
                                    <div id="senha" className="w-100">
                                        <h3>senha</h3>
                                        <div id="entrada" className="w-100">
                                            <div id="simbolo">
                                                <img src={senhaImg} alt="chave simbolizando a senha"/>
                                            </div>
                                            <input type="password" onChange={e => setSenha(e.target.value)} id="inputsenha"/>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            
                            <a href="conta.html" id="esquecer"><p>Esqueci a senha</p></a>
                            <input id="botao2" type="submit" value="Entrar" className="py-2"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;