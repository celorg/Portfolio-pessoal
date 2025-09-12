import { About } from './components/About';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Projects } from './components/Projects';
import { Qualificantions } from './components/Qualificantins';
import { Skills } from './components/Skills';
import './styles/global.css';
import './styles/theme.css';

function App() {

  return (
    
    <div className='container'>
        <Menu />
        <Home />
        <Projects />
        <About />
        <Skills />
        <Qualificantions />
        <Footer />
    </div>
  )
}

export default App
