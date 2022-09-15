//Importando o Routed-dom v6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Conteudo do Css Home
import './App.css';
//Conteudo do CSS Perfil
import './Pages/PaginaSobre/Perfil.css'
//Conteudo do Css Habilidade
import './Pages/PaginaSofts/Habilidade.css'
//Conteudo do CSS Projetos
import './Pages/PaginaProjects/Projetos.css'


//Componentes importados
import Home from '../src/Pages/Home/Home';

import Slides from './Pages/Home/Slides';
//componente pagina 2 (Sobre)
import Sobre from './Pages/PaginaSobre/Sobre';
//Componentes Pagina 3  (Softs)
import Softs from './Pages/PaginaSofts/Softs';
//Componentes pagina 4   (Sites)
import Sites from './Pages/PaginaProjects/Sites';



function App() {
    return (
        <div className="App">
            <Router>
                <Home />
                <Routes>
                    {/* Inicio no Home */}
                    <Route path="/" element={<Slides />} />  
                    {/* Pagina Sobre Mim*/}
                    <Route path="/sobre" element={<Sobre />} />
                    {/* Pagina Softs Skills */}
                    <Route path='/skill' element={<Softs />}/>
                    {/* Pagina Projetos */}
                    <Route path="/projetos" element={<Sites/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
