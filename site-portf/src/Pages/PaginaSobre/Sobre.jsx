import Cards from './Cards';
import escola from './img/Escola.jpeg';
import Photo from './Photo';
import sobre from './img/sobre.jpeg'

function Sobre() {
    return (
        <div className="container-principal-geral">
            <div className="container-perfil">
            
                <figure>  
                    <img
                        src={sobre}
                        alt="Minha imagem de perfil"
                    />
                    
                </figure>
                <div className="container-text-about">
                    <h2>Sobre Mim</h2>
                    <p>
                        Iniciando na área da Tecnologia da informação, com
                        objetivo de trabalhar na mesma área.
                    </p>
                    <h4>·Habilidades de programação/Programming Skill:</h4>
                    <p>
                        HTML5, CSS3, Bootstrap, JavaScript, React.Js, Java,
                        Styled-Components
                    </p>
                    <h4>·Ferramentas/Tools:</h4>
                    <p>Visual Studio Code, Git e Github e IntelliJ IDEA</p>
                    <p>
                        Formado como Desenvolvedor de Front-end/Web no Instituto
                        da Oportunidade Social (IOS). Curso intensivo de 5
                        meses, desenvolvendo Hard Skills e Softs Skills.
                    </p>
                
                </div>
            </div>

            <div className="container-academicos">
                <div id="titulo-school">
                    <h2>Formação acadêmica</h2>
                </div>

                <div className="container-school">
                    <figure>
                        <img src={escola} alt="Formação escola" />
                    </figure>

                    <div className="contente-text-school">
                        <h3>Escola: E.E.Dr.Genésio de Almeida Moura</h3>
                        <h5>Formado, Ensino Médio completo</h5>
                        <h5>02/2007 até 12/2017</h5>
                    </div>
                </div>

                <Cards />
            </div>

            <div className="container-cursos">
                <div className="titulo-cursos">
                    <h2>Curso Profissionalizante</h2>
                </div>

                <div className="container-cursos-conteudos">
                    <figure>
                        <img
                            src="https://www.sisutec.com.br/wp-content/uploads/2016/02/instituto-da-oportunidade-social-IOS.jpg"
                            alt=""
                        />
                    </figure>

                    <div className="contente-cursos-text">
                        <h3>Instituto da Oportunidade Social (IOS)</h3>
                        <h5>Formado, Curso Profissionalizante Intensivo</h5>
                        <h5>03/2022 até 07/2022</h5>
                    </div>
                </div>

                <Photo />
            </div>

            
            <div className="atual-estudos">
                <div className="titulo-atual-estudo">
                    <h2>Atualmente estudando</h2>
                </div>

                <div className="container-principal-atual">

                    <div className="container-atual-geral">

                        <div className="card-atual">
                            <div class="card-sobre">
                                <img
                                    src="https://www.phpro.be/uploads/media/sulu-400x400/00/440-react%404x.png?v=2-0?e6deb5871a14d5e29ad583954ce98c7f"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div className="content-text-geral">
                                    <div
                                        id="content-text-atual"
                                        class="card-body"
                                    >
                                        <h4 class="card-title">React.Js</h4>
                                        <p class="card-text">
                                            Abordando asssutos como
                                            React-Route-Dom v6 conhecendo e
                                            praticando alguns Hooks do React.Js,
                                            etc... Meus estudos são feitos pelas
                                            plataformas digitais.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-atual">
                            <div class="card-sobre">
                                <img
                                    src="http://www.johanngauss.com.br/images/ingles.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div className="content-text-geral">
                                    <div
                                        id="content-text-atual"
                                        class="card-body"
                                    >
                                        <h4 class="card-title">Inglês</h4>
                                        <p class="card-text">
                                            Estou estudando pelas plataformas
                                            digitais e por alguns Apps, meu
                                            nivel é básico, estou em constante
                                            aprendizado sempre procurando
                                            evoluir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-atual">
                            <div class="card-sobre">
                                <img
                                    src="https://www.goodworklabs.com/wp-content/uploads/2017/05/9a_Angular-JS-development.jpg"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div className="content-text-geral">
                                    <div
                                        id="content-text-atual"
                                        class="card-body"
                                    >
                                        <h4 class="card-title">Angular.Js</h4>
                                        <p class="card-text">
                                          Irei iniciar meus estudos em Angular...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
