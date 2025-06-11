
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './Interfaz/Login.tsx'
import IndexPage from './Interfaz/Index.tsx';
import DashboardLayout from "./Interfaz/DashboardLayout"
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {  

  return (
   <Router>
      <Routes>
        {/* pantalla pública */}
        <Route path="/" element={<LoginPage />} />

        {/* todas las rutas privadas comparten la barra */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/interfaz" index element={<IndexPage />} />
          {/* aquí puedes seguir añadiendo <Route path="reports" element={<Reports />} /> */}
        </Route>
      </Routes>
    </Router>

 );

}
export default App
