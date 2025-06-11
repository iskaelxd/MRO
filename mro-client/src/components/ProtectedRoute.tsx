// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom"
import { isAuthenticated } from "@/lib/auth"

interface ProtectedRouteProps {
  children: React.ReactElement
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  return children
}
