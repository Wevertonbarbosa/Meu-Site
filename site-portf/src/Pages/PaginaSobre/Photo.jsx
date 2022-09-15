import curso1 from './img/Curso1.jpeg';
import curso2 from './img/Curso2.jpeg';
import curso3 from './img/Curso3.jpeg';
import curso4 from './img/Curso4.jpeg';

function Photo() {
    return (
        <>
            <div className="container-geral-photos">

                <div className="container-card-principal">
                    <div className="cards-photos">
                        <img src={curso1} class="card-img-top" alt="..." />
                        <div className="content-text-photo">
                            <h5 class="card-title">Diploma</h5>
                            <p class="card-text">
                                Momento da foto com minha equipe da turma do TCC
                                juntamente com minha professora Heloisa.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-card-principal">
                    <div className="cards-photos">
                        <img src={curso2} alt="..." />
                        <div className="content-text-photo">
                            <h5 class="card-title">Sala de Aula</h5>
                            <p class="card-text">
                                Dentro da sala de aula em momento de exercícios
                                juntamente com a turma.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-card-principal">
                    <div className="cards-photos">
                        <img src={curso3} class="card-img-top" alt="..." />
                        <div className="content-text-photo">
                            <h5 class="card-title">Diploma</h5>
                            <p class="card-text">
                                Colegas de classe e o nosso professor Rafael
                                Duran em nosso momento da formatura.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-card-principal">
                    <div className="cards-photos">
                        <img src={curso4} class="card-img-top" alt="..." />
                        <div className="content-text-photo">
                            <h5 class="card-title">Fotos</h5>
                            <p class="card-text">
                                Momento das fotos com minha professora Heloisa e
                                meu colega de classe Eric.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Photo;
