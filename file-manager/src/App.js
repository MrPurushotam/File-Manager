import './App.css';
import Header from './component/header';
import FileManager from './component/fileManager';
import Test from './component/test';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
        <Routes>
          <Route path='/' Component={FileManager}/>
          <Route path='/test' Component={Test}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
