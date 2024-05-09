import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom'
import Sobre from './components/pages/Sobre'
import Skills from './components/pages/skills'
import Projetos from './components/pages/Projetos'
import Contatos from './components/pages/Contatos'

import Container from './components/pages/layout/Container'

function App() {
  return (
  <Router>
    <div>
      <Link to="/">Sobre Mim</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/contatos">Contatos</Link>
    </div>
    <Switch>
      <Container customClass="min-height">
        <Route  exact path="/">
          <Sobre />
        </Route>
        <Route  exact path="/skills">
          <Skills />
        </Route>  
        <Route  exact path="/projetos">
          <Projetos />
        </Route>
        <Route  exact path="/contatos">
          <Contatos />
        </Route>
      </Container>  
    
    </Switch>
    <p>Footer</p>
  </Router>
  );
}

export default App;
