import { useState } from 'react';
import '../css/feed.css';

import tresLixeiras from '../img/header2.png';
import golfinho from '../img/golfinho.png';
import estrelaApagada from '../img/estrela2.png';
import estrelaLigada from '../img/estrela.png';
import elipse1 from '../img/eli1.png';
import elipse2 from '../img/eli2.png';
import homeImg from '../img/fhome.png';
import cbImg from '../img/fcb.png';
import feedbackImg from '../img/fconta.png';
import lixosImg from '../img/flixos.png';
import jogosImg from '../img/fjogos.png';

function Feedback () {
    const [estrelaImg1, setEstrelaImg1] = useState(estrelaApagada);
    const [estrelaImg2, setEstrelaImg2] = useState(estrelaApagada);
    const [estrelaImg3, setEstrelaImg3] = useState(estrelaApagada);
    const [estrelaImg4, setEstrelaImg4] = useState(estrelaApagada);
    const [estrelaImg5, setEstrelaImg5] = useState(estrelaApagada);
    var num;
    var estrela = true;

    const [textoFeed, setTextoFeed] = useState("");
    function estrelas (nu) {
        var apaga = nu;
        num = nu;
        var i = 5;
        for(nu; nu>=1; nu--)
        {
            switch (nu)
            {
                case 5:
                    setEstrelaImg5(estrelaLigada);
                break;
                case 4:
                    setEstrelaImg4(estrelaLigada);
                break;
                case 3:
                    setEstrelaImg3(estrelaLigada);
                break;
                case 2:
                    setEstrelaImg2(estrelaLigada);
                break;
                case 1:
                    setEstrelaImg1(estrelaLigada);
                break;
                default: break;
            }
        }
        for(i; i>apaga; i--)
        {
            switch (i)
            {
                case 5:
                    setEstrelaImg5(estrelaApagada);
                break;
                case 4:
                    setEstrelaImg4(estrelaApagada);
                break;
                case 3:
                    setEstrelaImg3(estrelaApagada);
                break;
                case 2:
                    setEstrelaImg2(estrelaApagada);
                break;
                default: break;
            }
        }
    }
    function estrela1 (){
        num = 1;
        estrelas(num);
        if (estrela)
        {
            setEstrelaImg1(estrelaLigada);
            estrela = false;
        }
        else
        {
            setEstrelaImg1(estrelaApagada);
            estrela = true;
        }
    }
    function estrela2 (){
        num = 2;
        estrelas(num);
    }
    function estrela3 (){
        num = 3;
        estrelas(num);
    }
    function estrela4 (){
        num = 4;
        estrelas(num);
    }
    function estrela5 (){
        num = 5;
        estrelas(num);
    }

    function mandarFeed (e){
        //e.preventDefault();
        console.log("Estrelas = "+num);
        console.log(textoFeed);
    }

    //
    return(
        <>
            <header className="container-fluid">
                <div className="row align-items-center d-flex py-3">
                    <div className="col-8 d-flex align-items-center">
                        <a href="index.html" className="ms-3 a hover1 mt-1"><h1 id="cleanBeach">Clean Beach</h1></a>
                    </div>
                    <div className="col-4 d-none d-sm-none justify-content-end pe-4">
                        <div>
                            <div id="loginCadastro" className="d-inline-block py-2 mt-2">
                                <a href="login.html" id="login" className="a m-0 p-3 px-4 hover1">
                                    Login
                                </a>
                                <a href="cadastro.html" id="cadastro" className="a m-0 p-3 px-4 hover1">
                                    Cadastrar
                                </a>        
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end d-none">
                        <div>
                            <a href="lixos.html" className="a"><img src={tresLixeiras} className="hover1" id="imgHeader" alt="Três lixeiras, uma verde, uma amarela e uma vermelha (representando a reciclagem na praia)"/></a>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container-fluid">
                <div className="row mt-4 d-sm-flex justify-content-center d-none">
                    <nav className="col-11 col-md-9 col-lg-7 d-flex justify-content-around">
                        <a href="/" className="a"><p id="anavSec" className="hover1">Home</p></a>
                        <a href="https://divert-fish.vercel.app" className="a"><p id="anavSec" className="hover1">Divert Fish</p></a>
                        <a href="/lixos" className="a"><p id="anavSec" className="hover1">Lixos</p></a>
                        <a href="/clean-beach" className="a"><p id="anavSec" className="hover1">Clean Beach</p></a>
                        <a href="/feedback" className="a me-4"><p id="anavPri">Feedback</p></a>
                        <hr className="hrNav"/>
                    </nav>
                </div>
            </div>
            <div id="nav2" className="d-block d-sm-none">
                <hr id="selecionadoFeedback"/>
                <a href="/clean-beach"><img src={cbImg} alt="Clean Beach (Explicações)" id="fcb" className="aNav2"/></a>
                <a href="/feedback"><img src={feedbackImg} alt="Feedback" id="fco"/></a>
                <a href="/"><img src={homeImg} alt="Home (Início)" id="fho" className="aNav2"/></a>
                <a href="https://divert-fish.vercel.app"><img src={jogosImg} alt="Jogos" id="fjo" className="aNav2"/></a>
                <a href="/lixos"><img src={lixosImg} alt="Lixos (Curiosidades e Conscientização)" id="fli" className="aNav2"/></a>
                <img src={elipse1} id="eli1" alt="nav"/>
                <img src={elipse2} id="eli2" alt="detalhe da nav"/>
            </div>
            
            <main className="container-fluid mt-4 px-4 px-md-5 pb-5 pb-sm-0 mainFeedback">
                <div className="row d-flex justify-content-center px-0 px-lg-5">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5">
                        <h2 className="mt-5" id="subtitulo">Escreva sua opinião para nós!</h2>
                        <hr id="hrpergu"/>
                    </div>
                </div>
                <div className="row mt-4 mt-md-5 px-0 px-lg-5 mb-4 mb-sm-0">
                    <div className="col-12 col-md-6">
                        <h3 id="sugestao">Algum erro  ou bug no site?</h3>
                        <h3 id="sugestao">Você tem alguma ideia para nós?</h3>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 id="sugestao">Não gostou de algo?</h3>  
                        <h3 id="sugestao">Alguma informação incorreta?</h3>
                    </div>
                    <form className="col-12 col-lg-9 mt-4 mt-md-5 mb-3" onSubmit={mandarFeed}>
                        <div className="position-relative">
                            <textarea id="textoFeedback" onChange={e => setTextoFeed(e.target.value)} className="w-100 px-4 pt-4 px-sm-5 pt-sm-5" type="text" placeholder="Digite aqui..."></textarea>
                            <div className="position-absolute bottom-0 mb-2 d-flex justify-content-center w-100">
                                <div id="estrelas">
                                    <button type="button" onClick={estrela1}><img src={estrelaImg1} alt="estrela"/></button>
                                    <button type="button" onClick={estrela2}><img src={estrelaImg2} alt="estrela"/></button>
                                    <button type="button" onClick={estrela3}><img src={estrelaImg3} alt="estrela"/></button>
                                    <button type="button" onClick={estrela4}><img src={estrelaImg4} alt="estrela"/></button>
                                    <button type="button" onClick={estrela5}><img src={estrelaImg5} alt="estrela"/></button>
                                </div>    
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 mb-5 mb-sm-0">
                            <input id="mandar" className="p-3 px-5" type="submit" value="Mandar Feedback"/>
                        </div>
                    </form>
                    <div className="col-3 position-absolute bottom-0 end-0 d-none d-lg-flex justify-content-end">
                        <div className="col-12">
                            <img src={golfinho} alt="golfinho" className="w-100"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Feedback;