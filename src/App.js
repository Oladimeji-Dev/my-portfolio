import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage/HomePage';
import { Works } from './pages/Works/Works';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>    
          <Route path='/works' element={<Works />}/>    
          <Route path='*' element={<NotFound />}/>    
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
