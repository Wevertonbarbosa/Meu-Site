function Cards() {
    return (
        <section className="sessao-cards">

            <div id="container-geral-cards">
                <img id="img-school-slide" src="https://i.ytimg.com/vi/yuHvxo21_Zk/maxresdefault.jpg" class="card-img-top" alt="..." />
                <div id="content-text-school" class="card-body">
                    <h5 class="card-title text-center">Sala de Aula</h5>
                    <p class="card-text text-center">
                        Foto tirada dentro da sala de aula, momento de atividade dentro da escola: E.E.Dr.Genésio de Almeida Moura.
                    </p>
                    <div className="btn-school">
                        <button><a target="blank" href="https://www.escol.as/192479-genesio-de-almeida-moura-doutor">Saiba mais</a></button>
                    </div>
                </div>
            </div>

            <div id="container-geral-cards">
                <img id="img-school-slide" src="https://i.ytimg.com/vi/XhPt8h2IPto/maxresdefault.jpg" class="card-img-top" alt="..." />
                <div id="content-text-school" class="card-body">
                    <h5 class="card-title text-center">Pintura</h5>
                    <p class="card-text text-center">
                        Momento de atividade fora da sala de aula com a colaboração dos alunos em atividade de pinturas.
                    </p>
                    <div  className="btn-school">
                        <button><a target="blank" href="https://www.escol.as/192479-genesio-de-almeida-moura-doutor">Saiba mais</a></button>
                    </div>
                </div>
            </div>

            
        </section>
    );
}

export default Cards;
