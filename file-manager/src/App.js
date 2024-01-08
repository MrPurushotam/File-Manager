import './App.css';
import Header from './component/header';
import FileManager from './component/fileManager';
import Test from './component/test';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { createToast } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/blue-dusk.css'; 
import 'react-simple-toasts/dist/theme/success.css'; 
import 'react-simple-toasts/dist/theme/failure.css'; 

export const normalToast=createToast({
  theme: 'blue-dusk',
  duration:5000,
  clickClosable:true,
  position:'top-right',
})
export const successToast=createToast({
  theme: 'success',
  duration:5000,
  clickClosable:true,
  position:'top-right',
})
export const failurToast=createToast({
  theme: 'failure',
  duration:5000,
  clickClosable:true,
  position:'top-right',
})

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
