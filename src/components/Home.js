import '../css/home.css';

import coqueiro from '../img/coqueiro.png';
import ave from '../img/ave.gif';
import tresLixeiras from '../img/header2.png';
import tartaruga from '../img/tartaruga.png';
import DF from '../img/DFba.png';
import coco from '../img/coco.png';
import bola from '../img/bola.png';
import caranguejo from '../img/caranguejo.gif';
import concha1 from '../img/concha1.png';
import concha2 from '../img/concha2.png';
import concha3 from '../img/concha3.png';
import elipse1 from '../img/eli1.png';
import elipse2 from '../img/eli2.png';
import homeImg from '../img/fhome.png';
import cbImg from '../img/fcb.png';
import feedbackImg from '../img/fconta.png';
import lixosImg from '../img/flixos.png';
import jogosImg from '../img/fjogos.png';

function Home (){

    /*VW
    let vh = window.innerHeight || document.documentElement.clientHeight
    let vwtamanho = window.innerWidth || document.documentElement.clientWidth
    let vw = vwtamanho / 100;
    */

    //Tartaruga(fonte)
    /*const tarfonte = document.getElementById("tarfonte");
    const tar = document.getElementById("tar");

    tar.addEventListener("mouseover", function (){
        tarfonte.style.display = "block";
    });
    tarfonte.addEventListener("mouseover", function (){
        tarfonte.style.display = "block";
    });
    tar.addEventListener("mouseout", function (){
        tarfonte.style.display = "none";
    });
    //*/

    return(
        <>
            <header className="container-fluid">
                <div className="row align-items-center d-flex py-3">
                    <div className="col-8 d-flex align-items-center">
                        <a href="/clean-beach" className="ms-3 a hover1 mt-1"><h1 id="cleanBeach">Clean Beach</h1></a>
                    </div>
                    <div className="col-4 d-none d-sm-none justify-content-end pe-4">
                        <div>
                            <div id="loginCadastro" className="d-inline-block py-2 mt-2">
                                <a href="/login" id="login" className="a m-0 p-3 px-4 hover1">
                                    Login
                                </a>
                                <a href="/cadastro" id="cadastro" className="a m-0 p-3 px-4 hover1">
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
                        <a href="/" className="a"><p id="anavPri">Home</p></a>
                        <a href="https://divert-fish.vercel.app" className="a"><p id="anavSec" className="hover1">Divert Fish</p></a>
                        <a href="/lixos" className="a"><p id="anavSec" className="hover1">Lixos</p></a>
                        <a href="/clean-beach" className="a"><p id="anavSec" className="hover1">Clean Beach</p></a>
                        <a href="/feedback" className="a me-4"><p id="anavSec" className="hover1">Feedback</p></a>
                        <hr className="hrNav"/>
                    </nav>
                </div>
            </div>
            <div id="nav2" className="d-block d-sm-none">
                <hr id="selecionadoHome"/>
                <a href="/clean-beach"><img src={cbImg} alt="Clean Beach (Explicações)" id="fcb" className="aNav2"/></a>
                <a href="/feedback"><img src={feedbackImg} alt="Feedback" id="fco" className="aNav2"/></a>
                <a href="/"><img src={homeImg} alt="Home (Início)" id="fho"/></a>
                <a href="https://divert-fish.vercel.app"><img src={jogosImg} alt="Jogos" id="fjo" className="aNav2"/></a>
                <a href="/lixos"><img src={lixosImg} alt="Lixos (Curiosidades e Conscientização)" id="fli" className="aNav2"/></a>
                <img src={elipse1} id="eli1" alt="nav"/>
                <img src={elipse2} id="eli2" alt="detalhe da nav"/>
            </div>
            
            <div className="container mt-4 d-block d-sm-none">
                <div className="row justify-content-center py-4 py-lg-5 px-4">
                        <div className="col-12 position-relative">
                            <a id="jogarDF" className="jogar" href="https://divert-fish.vercel.app/">
                                Jogar
                            </a>    
                            <img src={DF} alt="banner do Recycle Garbage" className="jogo w-100"/>
                        </div>
                    </div>
            </div>
            
            <main className="container-fluid position-relative">
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8">
                        <div className="row d-flex justify-content-end">
                            <div className="col-4 d-xl-flex justify-content-center d-none">
                                
                            </div>
                            <div className="col-12 col-lg-9 col-xl-8 px-0 px-lg-5 px-xl-0">
                                <h2 id="curiosidadeH2">Você Sabia?</h2>
                                <div className="col-12">
                                    <p className="mb-4 mt-3 text-white fs-4 text-justify mx-3 mx-sm-0">
                                        Uma TARTARUGA foi estudada, no seu corpo <b>tinha 742 
                                        resíduos de lixo</b>, em que boa parte desse lixo era plástico.
                                    </p>
                                    <div className="d-flex justify-content-center position-relative">
                                        <img className="w-100 px-3 px-md-5" id="tar" src={tartaruga} alt="tartaruga com lixos dentro do casco"/>
                                        <a id="tarfonte" href="https://images.app.goo.gl/hzUR8BwXQ7NM2xdT7">
                                            <p>fonte: https://images.app.goo.gl/hzUR8BwXQ7NM2xdT7</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-none d-sm-none  justify-content-center m-4">
                                    <div id="loginCadastro" className="d-inline-block py-2 mt-2">
                                        <a href="/login" id="login" className="a m-0 p-3 px-4 hover1">
                                            Login
                                        </a>
                                        <a href="/cadastro" id="cadastro" className="a m-0 p-3 px-4 hover1">
                                            Cadastrar
                                        </a>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block ps-0 ps-xl-5">
                        <div id="tcc" className="bg1 pb-5 me-2">
                            <h2 className="text-center font1 py-4 pb-3"><u><b>Clean Beach</b></u></h2>
                            <p className="text-justify px-3 pb-4 font2">
                                Olá, nossos nomes são Felipe e Airon, e este site faz parte do nosso  projeto
                                de conclusão de curso, onde o objetivo do projeto é conscientizar as crianças
                                a não poluírem as praias, para que assim, tenhamos um ambiente mais saudável
                                e agradável.
                            </p>
                            <p className="text-center my-4 font2">
                                <a href="/clean-beach" className="raio text-center p-3 text-white a px-4 hover1 conhecer">
                                    <b>Conheça o nosso TCC</b>
                                </a>
                            </p>
                        </div>
                    </div>    
                </div>
            </main>
            
            <section id="jogos" className="d-sm-block mt-3 pb-5 pb-sm-0">
                <div className="container-fluid pt-0 pt-sm-5 pb-5 pb-sm-5">
                    <div className="row justify-content-center py-4 py-lg-5 d-none d-sm-flex">
                        <div className="col-12 col-sm-11 col-md-8 position-relative">
                            <a id="jogarDF" className="jogar" href="https://divert-fish.vercel.app/">
                                Jogar
                            </a>    
                            <img src={DF} alt="banner do Recycle Garbage" className="jogo w-100"/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-10 d-block d-lg-none ps-sm-0 ps-xl-5 my-5">
                            <div id="tcc" className="bg1 pb-5 raio">
                                <h2 className="text-center font1 py-4 pb-3"><u><b>Clean Beach</b></u></h2>
                                <p className="text-justify px-4 pb-4 font2">
                                    Olá, nossos nomes são Felipe e Airon, e este site faz parte do nosso  projeto
                                    de conclusão de curso, onde o objetivo do projeto é conscientizar as crianças
                                    a não poluírem as praias, para que assim, tenhamos um ambiente mais saudável
                                    e agradável.
                                </p>
                                <p className="text-center my-4 font2">
                                    <a href="/clean-beach" className="raio text-center p-3 text-white a px-4 hover1 conhecer">
                                        <b>Conheça o nosso TCC</b>
                                    </a>
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
                
                <img id="ave" src={ave} alt="ave voando"/>
                <img id="coqueiro" src={coqueiro} alt="coqueiro"/>
                <img id="coco" src={coco} alt="coco"/>
                <img id="concha1" src={concha1} alt="concha do mar rosa claro"/>
                <img id="concha2" src={concha2} alt="concha do mar roxa"/>
                <img id="concha3" src={concha3} alt="concha do mar amarelo claro"/>
                <img id="caranguejo" src={caranguejo} alt="caranguejo"/>
                <img src={bola} alt="bola de praia quicando" id="bola" className="d-none d-sm-block"/>
            </section>
        </>
    )
}

export default Home;