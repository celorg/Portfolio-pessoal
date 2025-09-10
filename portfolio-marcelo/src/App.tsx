import { Home } from './components/Home';
import { Menu } from './components/Menu';
import './styles/global.css';
import './styles/theme.css';

function App() {

  return (
    
    <div className='container'>
        <Menu />
        <Home />
    </div>
  )
}

export default App
