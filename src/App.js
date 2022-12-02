import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage/HomePage';
import { Works } from './pages/Works/Works';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>    
          <Route path='/works' element={<Works />}/>    
          <Route path='*' element={<><h1>Page Not Found</h1></>}/>    
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
