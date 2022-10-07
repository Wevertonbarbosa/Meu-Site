import curriculo from '../assets/WellDev.pdf';


import Projects from './Projects';

function Slides() {
    return (
        <div className="geral-slides">
            <div className="content-curriculo">
                <figure className="img-header-curriculo">
                    <img
                        src="http://3.bp.blogspot.com/-qvVxnN3DL84/U7CV9uxCfHI/AAAAAAAAJrQ/XtgknjA567Y/s1600/gif-code-programme-12.gif"
                        alt="gif-dev"
                    />
                </figure>

                <div className="curriculo-text">
                    <h2 id="welcome-cv">Olá, Seja Bem-Vindo (a)</h2>
                    <h3>Eu Sou:</h3>
                    <h2 id="text-navbar">
                        Well<span>Dev</span>
                    </h2>
                    <h3 id="ocupation-cv">Desenvolvedor Front-End</h3>

                    <div className="container-download-cv">
                        <h4>Download Currículo</h4>

                        <a
                            href={curriculo}
                            id="download-curriculo"
                            download={curriculo}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4007/4007698.png"
                                alt="curriculo"
                            />
                        </a>
                    </div>
                    
                </div>
            </div>

            <Projects />
        </div>
    );
}

export default Slides;
