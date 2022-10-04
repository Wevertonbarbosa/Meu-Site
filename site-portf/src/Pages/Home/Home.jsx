import { Link } from 'react-router-dom';

function Home() {



    return (
        <>
            <header>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div id="container-geral-menu" class="p-2 text-center">
                        <div className="titulo-inicio-navbar">
                            <h2 id="text-navbar">
                                Well<span>Dev</span>
                            </h2>
                        </div>

                        <div className="sub-rede-links">
                            <figure className="redes-sociais">
                                <a
                                    target="blank"
                                    href="https://github.com/Wevertonbarbosa"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/779/779088.png"
                                        alt="github"
                                    />
                                </a>

                                <a
                                    target="blank"
                                    href="https://www.linkedin.com/in/wevertonbarbosa00/"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1377/1377213.png"
                                        alt="Linkedin"
                                    />
                                </a>
                            </figure>
                            <div className="container-links-navbar">
                                <ul className="list-link">
                                    <li>
                                        <h4>
                                            <Link to="/">Home</Link>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <Link to="/sobre">Sobre</Link>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <Link to="/skill">Hard Skills</Link>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <Link to="/projetos">Projetos</Link>
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NavBar menu parte frente */}

                <nav id="nav-front" class="navbar p-2">
                    <div id="container-media-textNav" class="container-fluid">
                        <div className="container">
                            <div className="estatico">
                                <h2>Eu sou</h2>
                            </div>
                            <ul className="dinamico">
                                <li>
                                    <span>Weverton Lima</span>
                                </li>
                                <li>
                                    <span>Desenvolvedor Front-End</span>
                                </li>
                                <li>
                                    <span>Estudante</span>
                                </li>
                                <li>
                                    <span>Sonhador</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            id="btn-geral"
                        >
                            <span>
                                <img
                                    id="btn-navbar"
                                    src="https://cdn-icons-png.flaticon.com/512/945/945178.png"
                                    alt=""
                                />
                            </span>
                        </button>

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Home;
