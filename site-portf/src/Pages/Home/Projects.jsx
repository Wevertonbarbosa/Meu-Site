import { Link } from "react-router-dom";

function Projects() {
    return (
        <main>
            <div className="principal-geral-project">
                <div id="seta-baixo">
                    <figure>
                        <img
                            id="seta-img"
                            src="https://cdn-icons-png.flaticon.com/512/7243/7243360.png"
                            alt="Seta para baixo"
                        />
                    </figure>
                </div>

                <div id="titulo-cards-project">
                    <h2>Conheça meus Projetos</h2>
                </div>

                <div className="container-pai-cards">
                    <div className="container-main-cards">
                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="" />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto Html5</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                    />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto JavaScript</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img
                                        src="https://tse4.mm.bing.net/th?id=OIP.6Xt1oJKMnXX1F1jgNcjh7QEsEB&pid=Api&P=0"
                                        alt=""
                                    />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto Css3</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                                        alt=""
                                    />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto Java</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                        alt=""
                                    />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto JavaScript</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-cards-sub">
                            <div className="card-content">
                                <figure>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
                                        alt=""
                                    />
                                </figure>
                                <div className="card-descricao-text">
                                    <h5 class="text-white">Projeto React.Js</h5>
                                    <p>Veja meus projetos, clique no botão e veja mais.</p>
                                    <Link to="/projetos" id="link-card" href="/">
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Projects;
