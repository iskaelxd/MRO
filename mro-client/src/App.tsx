//src/app.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './Interfaz/Login.tsx'
import IndexPage from './Interfaz/Index.tsx';
import DashboardLayout from "./Interfaz/DashboardLayout"
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext';
import CrearUsuario from './Interfaz/admin/usuarios/CrearUsuario';
import ListarUsuario from './Interfaz/admin/usuarios/ListarUsuario.tsx';
import CrearMenu from './Interfaz/admin/menu/CrearMenu.tsx';
import PermisosMenu from './Interfaz/admin/menu/PermisosMenu.tsx';
import { GestionModulo } from './Interfaz/admin/modulo/GestionModulos.tsx';


function App() {  

  return (
    <AuthProvider>
      <Router>
  <Routes>
    <Route path="/" element={<LoginPage />} />

    <Route
      path="/Interfaz/*"
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<IndexPage />} />
      <Route path="admin/usuarios/crear" element={<CrearUsuario />} />
      <Route path="admin/usuarios/listar" element={<ListarUsuario />} />
       <Route path="admin/menu/crear" element={<CrearMenu />} />
       <Route path="admin/menu/permiso" element={<PermisosMenu />} />
     <Route path="admin/modulo/gestion" element={<GestionModulo />} />

    </Route>
  </Routes>
</Router>
    </AuthProvider>

 );

}
export default App
