// src/components/ProtectedRoute.js

// src/components/ProtectedRoute.js
import type { ReactNode } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';



export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { empleado } = useAuth();

  if (empleado === undefined ) {
    return <p>Cargando...</p>
  }

  if (!empleado) {
    // Si no hay empleado, redirige al login
    return <Navigate to="/" replace />;
  }

  return <>{children}</>
}
