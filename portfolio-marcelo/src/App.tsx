import { About } from './components/About';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Projects } from './components/Projects';
import './styles/global.css';
import './styles/theme.css';

function App() {

  return (
    
    <div className='container'>
        <Menu />
        <Home />
        <Projects />
        <About />
    </div>
  )
}

export default App
