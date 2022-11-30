import './App.css';
import { HomePage } from './pages/Homepage/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>    
          <Route path='*' element={<><h1>Page Not Found</h1></>}/>    
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
