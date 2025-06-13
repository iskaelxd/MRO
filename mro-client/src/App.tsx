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


    <Route
      path="/Interfaz/*"
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<IndexPage />} />

    </Route>
  </Routes>
</Router>
    </AuthProvider>

 );

}
export default App
