import Cards from './Cards';
import escola from './img/Escola.jpeg';
import Photo from './Photo';
import sobre from './img/sobre.jpeg';
import faculdade from './img/logo-fiap.png'
import startCurso from './img/start-logo.png'

function Sobre() {
    return (
        <div className="container-principal-geral">
            <div className="container-perfil">
                <figure>
                    <img src={sobre} alt="Minha imagem de perfil" />
                </figure>
                <div className="container-text-about">
                    <h2>Sobre Mim</h2>
                    <p>
                        Estudando na área da Tecnologia da informação, com
                        objetivo de trabalhar na mesma área. Sou bolsista em uma
                        das melhores faculdades de tecnologia do Brasil, a FIAP.
                    </p>
                    <h4>·Habilidades de programação/Programming Skill:</h4>
                    <p>
                        HTML5, CSS3, Bootstrap, JavaScript, React.Js, Java,
                        Styled-Components
                    </p>
                    <h4>·Ferramentas/Tools:</h4>
                    <p>Visual Studio Code, Git e Github e IntelliJ IDEA</p>
                    <p>
                        Formado como Desenvolvedor Front-end/Web no Instituto da
                        Oportunidade Social, desenvolvendo Hard Skills e Softs
                        Skills.
                    </p>
                    <h4>·Atualmente:</h4>
                    <p>
                        Estudando: Java no curso Start tech, desenvolvedor Java
                        na maior empresa de tecnologia do Brasil, TOTVS e
                        parceria com Let 's code from Ada. <br /> Aguardando o início
                        das aulas na faculdade de Analise e Desenvolvimento de
                        Sistema na FIAP.
                    </p>
                </div>
            </div>

            <div className="container-academicos">
                <div id="titulo-school">
                    <h2>Formação acadêmica</h2>
                </div>
                <div className="container-school">
                    <figure>
                        <img src={faculdade} alt="Formação escola" />
                    </figure>

                    <div className="contente-text-school">
                        <h3>FIAP</h3>
                        <h5>Iniciando, Ensino Superior</h5>
                        <h5>02/2023 até 12/2025</h5>
                    </div>
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
                    <h2>Cursos Profissionalizante</h2>
                </div>

                <div className="container-cursos-conteudos">
                    <figure>
                        <img
                            src={startCurso}
                            alt="startCurso"
                        />
                    </figure>

                    <div className="contente-cursos-text">
                        <h3>TOTVS e Let's code from Ada</h3>
                        <h5>Estudando, Treinamento Intensivo</h5>
                        <h5>10/2022 até 04/2023</h5>
                    </div>
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
                                    src="https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png"
                                    class="card-img-top"
                                    alt="..."
                                />
                                <div className="content-text-geral">
                                    <div
                                        id="content-text-atual"
                                        class="card-body"
                                    >
                                        <h4 class="card-title">Java</h4>
                                        <p class="card-text">
                                            Estou estudando Java e abordando diversos assuntos sobre Java, no curso Start tech na maior empresa de Softwares do Brasil TOTVS
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
