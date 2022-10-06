import medidas from '../videos/Lima.mp4'
import attack from '../videos/attack.mp4';
import grid from '../videos/grid.mp4';
import cent from "../videos/cent.mp4"
import botao from "../videos/botoes.mp4"
import compras from "../videos/compras.mp4"
import tarefas from "../videos/tarefas.mp4"
import cine from "../videos/wellcine.mp4"


function Sites() {
    return (
        <div className="geral-container-projects">
            <div className="titulo-todos-projects">
                <h1>Meus Projetos</h1>
            </div>

            {/* Parte HTML5 */}

            <div className="geral-cards-projects">
                <div className="projetos-titulos">
                    <h3>Projetos em HTML5</h3>
                    <figure>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
                            alt="Html5"
                        />
                    </figure>
                </div>

                <div className="sub-cards-principal">
                    <div class="card mb-5 w-25">
                        <img
                            src="http://2.bp.blogspot.com/-SITChsTu2A4/UFuT_coD7MI/AAAAAAAADCI/8h2bXQVX28A/s1600/html5.jpg"
                            class="card-img-top"
                            id="img-cards"
                            alt="..."
                        />

                        <div class="card-body-projetos">
                            <h5 class="card-title">Formulário em Html5</h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. Criação de um
                                simples Fomulário, estavamos conhecendo algumas
                                Tags novas, veja como ficou clicando no botão.
                            </p>

                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://formulariohtml07.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="http://2.bp.blogspot.com/-SITChsTu2A4/UFuT_coD7MI/AAAAAAAADCI/8h2bXQVX28A/s1600/html5.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Atributo Colspan Html5</h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. Aprendendo a
                                utilizar o atributo colspan em uma tabela com
                                Html5 puro, veja como ficou clicando no botão.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://colspanhtml06.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="http://2.bp.blogspot.com/-SITChsTu2A4/UFuT_coD7MI/AAAAAAAADCI/8h2bXQVX28A/s1600/html5.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Atributo Rowspan Html5</h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. utilizando o
                                atributo Rowspan em uma tabela, veja como ficou
                                clicando no botão.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://rowspanhtml06.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="http://2.bp.blogspot.com/-SITChsTu2A4/UFuT_coD7MI/AAAAAAAADCI/8h2bXQVX28A/s1600/html5.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">
                                Rowspan e Colspan na Tabela Html5
                            </h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. Conjunto dos
                                atributos criando uma tabela com dados de
                                vendas, clique no botão e veja como ficou.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://tablehtml06.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projetos-titulos">
                    <h3>Projetos em CSS3</h3>
                    <figure>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                            alt="CSS3"
                        />
                    </figure>
                </div>

                {/* Parte de CSS3 */}

                <div className="sub-cards-principal">
                    <div class="card mb-5 w-25">
                        <video className='video-project' src={medidas} loop controls type="video/mp4"></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">Medidas em CSS3</h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. Estavamos
                                aprendendo as medidas e suas respectivas
                                proporções em CSS3, no trabalho em casa criei
                                uma página com um design incrível.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://medidascss07.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <video src={attack} loop controls type="video/mp4"  className='video-project'></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">
                                Aprendendo Pseudo-elementos e Pseudo-Classes em
                                CSS3
                            </h5>
                            <p class="card-text">
                                Trabalho realizado no curso intensivo no
                                Instituto da Oportunidade Social. Aprendendo
                                sobre Pseudo-elementos e Pseudo-classes,
                                eles foram utilizados na página em que criei cujo tema era um
                                anime Attack on Titan.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://pseudoscss3.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <video src={grid} loop controls type="video/mp4" className='video-project'></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">Grid no CSS3</h5>
                            <p class="card-text">
                                Nesta aplicação estavamos conhecendo o Grid do
                                CSS3, peguei um conjunto de imagens e com
                                auxílio de um video no You Tube criei diversas
                                divisões na tela com as imagens.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://grid12css.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <video src={cent} loop controls type="video/mp4" className='video-project'></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">Elementos Visuais CSS3</h5>
                            <p class="card-text">
                                Criei uma página com alguns elementos visuais
                                como imagens e com um design incrível, vale a
                                pena conferir.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://elementovisualcss3.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projetos-titulos">
                    <h3>Projetos em JavaScript</h3>
                    <figure>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                            alt="JavaScript"
                        />
                    </figure>
                </div>

                {/* Parte de JavaScript */}

                <div className="sub-cards-principal">
                    <div class="card mb-5 w-25">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                            class="card-img-top"
                            id="img-cards"
                            alt="..."
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Estrutura Condicional JS</h5>
                            <p class="card-text">
                                Criei um array de objetos e formulei uma estrura
                                condicional para averiguar os salários dos
                                colaboradores e o vínculo empregatício para
                                fazer o desconto do INSS.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://estruturacondicionaljs.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Classes e Funções JS</h5>
                            <p class="card-text">
                                Criei uma classe e um array com 10 posições de
                                pessoas e suas datas de nascimento. Utilizando o
                                New Date gerei uma condição para inspecionar
                                quem fez aniversário ou ainda não realizou de
                                uma forma dinâmica.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://classesfuncoesjs.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <video src={botao} loop controls type="video/mp4" className='video-project'></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">Utilizando o DOM do JS</h5>
                            <p class="card-text">
                                Utilizando o DOM do JS criei algumas interações
                                com o usuário adicionando alguns eventos no
                                clique dos botões fazendo uma ligação entre HTML
                                e JavaScript
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://domjs13.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <video src={compras} loop controls type="video/mp4" className='video-project'></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">
                                Funções, DOM, Estruturas condicionais e laços de
                                Repetições JS
                            </h5>
                            <p class="card-text">
                                Criei um carrinho de compras aonde você pode
                                adicionar o item, valor e quantidade no
                                carrinho, clicando em adicionar o produto de
                                uma forma dinâmica gerará o valor total.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://carrinhojs.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projetos-titulos">
                    <h3>Projetos em Java</h3>
                    <figure>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                            alt="Java"
                        />
                    </figure>
                </div>

                {/* Parte de Java  */}

                <div className="sub-cards-principal">
                    <div class="card mb-5 w-25">
                        <img
                            src="https://immibbilisim.com/uploads/images/articles/jxyNdwxDRtiIZkcQhZ6d.jpg"
                            class="card-img-top"
                            id="img-cards"
                            alt="..."
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Desvios encadeados Java</h5>
                            <p class="card-text">
                                Utilizando a lógica criei um jogo de adivinhação
                                utilizando as classes Scanner e Random, você
                                chuta um número aleatório e conforme as dicas
                                você fica mais próximo de acertar.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://github.com/Wevertonbarbosa/Dev_Web_IOS/blob/master/Java/Aula04_Desvios_Encadeados_JAVA/Projeto_08_Adivinha/src/AdivRandom.java"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="https://immibbilisim.com/uploads/images/articles/jxyNdwxDRtiIZkcQhZ6d.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Calculadora Java</h5>
                            <p class="card-text">
                                Utilizando o Switch case criei uma calculadora
                                com a interação do usuário no Java, com as
                                seguintes operações matemáticas adição,
                                subtração e divisão.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://github.com/Wevertonbarbosa/Dev_Web_IOS/blob/master/Java/Aula04_Desvios_Encadeados_JAVA/Projeto_10_Swich_case/src/Calculadora.java"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="https://immibbilisim.com/uploads/images/articles/jxyNdwxDRtiIZkcQhZ6d.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Vetor Java</h5>
                            <p class="card-text">
                                Utilizando a classe Scanner o usuário digita 5
                                números aleatórios, utilizando o laço de
                                repetição dentro dos 5 números digitados consigo
                                extrair o maior entre os 5 números.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://github.com/Wevertonbarbosa/Dev_Web_IOS/blob/master/Java/Aula08_Vetor_JAVA/Projeto_25_Vetores/src/MaiorValor.java"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="https://immibbilisim.com/uploads/images/articles/jxyNdwxDRtiIZkcQhZ6d.jpg"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">Strings Java</h5>
                            <p class="card-text">
                                Aprendendo alguns métodos de Strings, como
                                verificar se a String está vazia, seu tamanho,
                                comparações de strings, ToUpperCase, eliminar
                                caracteres em branco e alterar conteúdo.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://github.com/Wevertonbarbosa/Dev_Web_IOS/blob/master/Java/Aula09_String_JAVA/Exercicio_aula09/src/Frutas.java"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projetos-titulos">
                    <h3>Projetos em React.Js</h3>
                    <figure>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
                            alt="React.Js"
                        />
                    </figure>
                </div>

                {/* Projeto com React   */}

                <div className="sub-cards-principal">
                    <div class="card mb-5 w-25">
                        <video src={tarefas} className='video-project' loop controls type="video/mp4" ></video>
                        <div class="card-body-projetos">
                            <h5 class="card-title">ToDo List React.Js</h5>
                            <p class="card-text">
                                Criei uma lista de tarefas utilizando um dos
                                Hooks do React.Js o useState, estilização do meu ToDo List utilizei o
                                Styled-components e CSS puro.

                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://usestatehooks.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        <img
                            src="https://tse2.mm.bing.net/th?id=OIP.K-TFDN5_cyJWJ_HqUyP4_gAAAA&pid=Api&P=0"
                            class="card-img-top"
                            alt="..."
                            id="img-cards"
                        />
                        <div class="card-body-projetos">
                            <h5 class="card-title">
                                React-Router-DOM v6 React.Js
                            </h5>
                            <p class="card-text">
                                Em breve completo! Veja como está no
                                repositório.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://github.com/Wevertonbarbosa/Router-v6"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-5 w-25">
                        
                    <video src={cine} className='video-project' loop controls type="video/mp4" ></video>
                        
                        <div class="card-body-projetos">
                            <h5 class="card-title">Well Cine React.Js</h5>
                            <p class="card-text">
                            Construi uma landing page de filmes, inspirado no site da Netflix e Telecine. O projeto foi criado com Vite uma das ferramentas mais utilizadas e moderna atualmente.
                            </p>
                            <div className="geral-btn-project">
                                <button>
                                    <a
                                        href="https://usestatehooks.netlify.app/"
                                        target="blank"
                                    >
                                        Saiba Mais
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Sites;
