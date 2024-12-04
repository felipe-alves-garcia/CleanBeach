import '../css/CB.css';

import tresLixeiras from '../img/header2.png';
import elipse1 from '../img/eli1.png';
import elipse2 from '../img/eli2.png';
import homeImg from '../img/fhome.png';
import cbImg from '../img/fcb.png';
import feedbackImg from '../img/fconta.png';
import lixosImg from '../img/flixos.png';
import jogosImg from '../img/fjogos.png';

function CB (){


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
                        <a href="/clean-beach" className="a"><p id="anavPri">Clean Beach</p></a>
                        <a href="/feedback" className="a me-4"><p id="anavSec" className="hover1">Feedback</p></a>
                        <hr className="hrNav"/>
                    </nav>
                </div>
            </div>
            <div id="nav2" className="d-block d-sm-none">
                <hr id="selecionadoCB"/>
                <a href="/clean-beach"><img src={cbImg} alt="Clean Beach (Explicações)" id="fcb"/></a>
                <a href="/feedback"><img src={feedbackImg} alt="Feedback" id="fco" className="aNav2"/></a>
                <a href="/"><img src={homeImg} alt="Home (Início)" id="fho" className="aNav2"/></a>
                <a href="https://divert-fish.vercel.app"><img src={jogosImg} alt="Jogos" id="fjo" className="aNav2"/></a>
                <a href="/lixos"><img src={lixosImg} alt="Lixos (Curiosidades e Conscientização)" id="fli" className="aNav2"/></a>
                <img src={elipse1} id="eli1" alt="nav"/>
                <img src={elipse2} id="eli2" alt="detalhe da nav"/>
            </div>
            
            <div className="container-fluid mb-5 pb-5 pb-sm-0">
                <div className="row d-none">
                    <div id="conhecer" className="col-12">
                        <p>Conheça Nosso TCC</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <div className="row py-5">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo" className="ps-0">
                                    <h2 id="titulo" className="px-4 px-sm-5">O que Clean Beach?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            Clean Beach é um trabalho de conclusão de curso (TCC) composto pelos integrantes
                            Airon Lazzaretti e Felipe Alves Garcia, ambos estudantes estão no
                            terceiro ano da Escola Técnica Estadual Monteiro Lobato (CIMOL). O tema 
                            do TCC é descobrir se existe uma possível solução ou um possível amenizador
                            para os problemas de lixos no ambiente litorâneo. O objeto do trabalho é o desenvolvimento
                            de um site educacional e inteativo que terá diversas ferramentas de ensino.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <div className="row py-5">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo">
                                    <h2 id="titulo" className="px-4 px-sm-5">Qual é a finalidade?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            O site tem objetivo de trazer aos usuários informações educativas sobre a poluição, como,
                            por exemplo, curiosidades de impactos negativos da poluição na praia, que podem 
                            manter os usuários informados sobre os problemas da poluição. O foco do site é no ambiente litorâneo, 
                            englobando a vida marítima e os ambientes de lazer. O site não possui nenhuma restrinção de público, 
                            mas o tema dele é destinado ao publíco infantil. O site possui varias ferramentas de ensino, como 
                            textos, imagens, GIFs, jogo etc. A sua principal ferramenta de ensino é o jogo, pois ao mesmo 
                            tempo que traz ensinamentos, ele traz entretedimento aos usuários.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <div className="row py-5">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
                                <div id="bgTitulo">
                                    <h2 id="titulo" className="px-4 px-sm-5">Como funciona o jogo?</h2>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-11 col-lg-10 px-3">
                        <p id="texto">
                            O jogo pode ser jogado pelo celular ou no teclado, sendo que no celular o jogador 
                            faz o uso de um joystick e botões, e no teclado o jogador joga através de teclas. O 
                            cenário do jogo retrata a vida de um peixe, na corrente marítima, em um cenário 2D que 
                            segue seu fluxo de movimento, entretanto ele necessita da habilidade de desviar de lixos, 
                            de origem praiana,  e petróleo que estão na frente de seu caminho, dificultando seu percurso 
                            e liberdade. Para conseguir alcançar essa habilidade, o peixe precisa de muita agilidade de 
                            movimento e raciocínio rápido. O jogador do jogo controla o peixe e seu objetivo principal é ir 
                            o mais longe possível, tendo, como auxílio, bolhas mágicas limitadas ao uso.
                        </p>
                    </div>
                </div>
                <div className="row mt-4 pb-5 pb-sm-0">
                    <div className="col-12 d-flex justify-content-center">
                        <a className="a raio bg1 py-3 px-5 hover1" id="pdf" href="https://drive.usercontent.google.com/u/0/uc?id=1z2JHLV5rZ3ms-Kk8_02d72Z0cILphtem&export=download">
                            <p>Click aqui e veja nosso PDF</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CB;