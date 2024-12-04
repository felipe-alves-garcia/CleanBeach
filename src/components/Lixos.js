import '../css/lixos.css';

import tresLixeiras from '../img/header2.png';
import elipse1 from '../img/eli1.png';
import elipse2 from '../img/eli2.png';
import homeImg from '../img/fhome.png';
import cbImg from '../img/fcb.png';
import feedbackImg from '../img/fconta.png';
import lixosImg from '../img/flixos.png';
import jogosImg from '../img/fjogos.png';
import bolhas from '../img/bolhas.png';
import tartarura from '../img/tar.png';
import sacola from '../img/sacola.png';
import garrafa from '../img/garrafa.png';
import placaVerde from '../img/placa.png';
import criança from '../img/mergulhando.png';
import alga1 from '../img/alga1.png';
import alga2 from '../img/alga2.png';
import alga22 from '../img/alga22.png';
import alga222 from '../img/alga222.png';
import alga3 from '../img/alga3.png';
import alga33 from '../img/alga33.png';
import alga333 from '../img/alga333.png';
import alga4 from '../img/alga4.png';
import alga5 from '../img/alga5.png';
import alga55 from '../img/alga55.png';
import alga6 from '../img/alga6.png';

function Lixos (){

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
                        <a href="/lixos" className="a"><p id="anavPri">Lixos</p></a>
                        <a href="/clean-beach" className="a"><p id="anavSec" className="hover1">Clean Beach</p></a>
                        <a href="/feedback" className="a me-4"><p id="anavSec" className="hover1">Feedback</p></a>
                        <hr className="hrNav"/>
                    </nav>
                </div>
            </div>
            <div id="nav2" className="d-block d-sm-none">
                <hr id="selecionadoLixos"/>
                <a href="/clean-beach"><img src={cbImg} alt="Clean Beach (Explicações)" id="fcb" className="aNav2"/></a>
                <a href="/feedback"><img src={feedbackImg} alt="Feedback" id="fco" className="aNav2"/></a>
                <a href="/"><img src={homeImg} alt="Home (Início)" id="fho" className="aNav2"/></a>
                <a href="https://divert-fish.vercel.app"><img src={jogosImg} alt="Jogos" id="fjo" className="aNav2"/></a>
                <a href="/lixos"><img src={lixosImg} alt="Lixos (Curiosidades e Conscientização)" id="fli"/></a>
                <img src={elipse1} id="eli1" alt="nav"/>
                <img src={elipse2} id="eli2" alt="detalhe da nav"/>
            </div>
            
            <main className="mainLixos">
                <img src={alga1} alt="coral rosa pequeo em cima de areia" id="alga1"/>
                <img src={alga1} alt="coral rosa pequeo em cima de areia" id="alga11"/>
                <img src={alga2} alt="algas atraz de pedras" id="alga2"/>
                <img src={alga22} alt="algas" id="alga22"/>
                <img src={alga222} alt="algas" id="alga222"/>
                <img src={alga222} alt="algas" id="alga2222"/>
                <img src={alga3} alt="algas e ervas marinhas" id="alga3"/>
                <img src={alga33} alt="algas e ervas marinhas" id="alga33"/>
                <img src={alga333} alt="algas e ervas marinhas" id="alga333"/>
                <img src={alga4} alt="algas amareladas" id="alga4"/>
                <img src={alga5} alt="coral laranja" id="alga5"/>
                <img src={alga55} alt="coral laranja" id="alga55"/>
                <img src={alga6} alt="coral rosa grande" id="alga6"/>
                <img src={garrafa} alt="garrafa pet amassada caindo para o fundo do mar" id="garrafa"/>
                <img src={bolhas} alt="bolhas" id="bo1"/>
                <img src={bolhas} alt="bolhas" id="bo11"/>
                <div className="row d-flex justify-content-end">
                    <div id="texto1">
                        <p>
                            O momento que a praia fica mais poluida é após datas comemorativas, segundo Trashin 
                            (2023), após o Réveillon de 2021 do Rio de Janeiro, a prefeitura de Rio de Janeiro 
                            recolheu <b><u>320 TONELADAS</u></b> de lixos deixados na areia.
                        </p>
                    </div>    
                </div>
                <img src={criança} alt="Criança mergulhando no mar" id="merg"/>
                <div className="row d-flex justify-content-center">
                    <div id="texto2">
                        <img src={placaVerde} alt="placa verde de rodovias"/>
                        <p>
                            O lixo que é jogado na praia acaba indo para o mar, então jogue o lixo na lixeira, 
                            assim você ajudará as pessoas e a vida marinha!
                        </p>
                    </div>    
                </div>
                
                <img src={bolhas} alt="bolhas" id="bo2"/>
                <img src={bolhas} alt="bolhas" id="bo21"/>
                <img src={bolhas} alt="bolhas" id="bo3"/>
                <img src={bolhas} alt="bolhas" id="bo31"/>
                <img src={bolhas} alt="bolhas" id="bo4"/>
                <img src={bolhas} alt="bolhas" id="bo5"/>
                <img src={sacola} alt="sacola no meio do mar" id="sacola"/>
                <img src={bolhas} alt="bolhas" id="bo6"/>
                <img src={bolhas} alt="bolhas" id="bo61"/>
                <div className="row d-flex justify-content-center">
                    <div id="texto3">
                        <p>
                            O plástico é o resíduo que mais polui a praia e o mar, 
                            segundo Evanildo da Silveira (23 de janeiro 2018), 
                            mais de <u>95% dos lixos</u> encontradas na praia são compostos por <u>plástico!</u>
                        </p>
                    </div>    
                </div>
                
                <img src={tartarura} alt="tartaruga nadando" id="tartaruga"/>
                <img src={bolhas} alt="bolhas" id="bo7"/>
                <img src={bolhas} alt="bolhas" id="bo71"/>
            </main>
        </>
    )
}

export default Lixos;