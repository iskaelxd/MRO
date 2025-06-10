
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './Interfaz/Login.tsx'
import IndexPage from './Interfaz/Index.tsx';


function App() {  

  return (
 <Router>
   <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/Interfaz" element={<IndexPage />} />
    </Routes>
 </Router>

 );

}
export default App
