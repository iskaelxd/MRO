
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login.tsx'
import Index from './components/index.tsx';

function App() {  

  return (
 <Router>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/index" element={<Index />} />
    </Routes>
 </Router>
 );

}
export default App
