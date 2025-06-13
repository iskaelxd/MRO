//src/app.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './Interfaz/Login.tsx'
import IndexPage from './Interfaz/Index.tsx';
import DashboardLayout from "./Interfaz/DashboardLayout"
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext';

function App() {  

  return (
    <AuthProvider>
      <Router>
  <Routes>
    <Route path="/" element={<LoginPage />} />

    {/* TODO: todo lo que cuelgue de /interfaz está protegido */}
    <Route
      path="/Interfaz/*"
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      {/*  index => /interfaz  */}
      <Route index element={<IndexPage />} />
      {/* <Route path="reportes" element={<Reports />} /> etc. */}
    </Route>
  </Routes>
</Router>
    </AuthProvider>

 );

}
export default App
