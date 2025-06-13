// src/context/AuthContext.tsx
import { createContext, useContext, useState } from "react"

export interface Empleado {
  id: number
  numeroEmpleado: string
  globalId: string
  correo: string
  puesto: string
  nombreEmpleado: string
  rolId: string
  moduloId: string
  moduloNombre: string
  puedeVer: string
  puedeEditar: string
  puedeCrear: string
  puedeEliminar: string
}

interface AuthState {
  empleado: Empleado | null
  setEmpleado: (emp: Empleado | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthState | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [empleado, setEmpleado] = useState<Empleado | null>(() => {
    // 2️⃣ al iniciar, intenta cargar del localStorage
    try {
    const raw = localStorage.getItem("empleado")
    return raw ? JSON.parse(raw) : null
    } catch (error) {
      console.error("Error al cargar empleado desde localStorage:", error)
      return null
    }
  })

  const logout = () => {
    localStorage.removeItem("empleado")
    setEmpleado(null)
    window.location.href = "/" // regresa al login
  }

  return (
    <AuthContext.Provider value={{ empleado, setEmpleado, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>")
  return ctx
}
