// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { empleado } = useAuth()
  return empleado ? <>{children}</> : <Navigate to="/" replace />
}
