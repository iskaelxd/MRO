// src/utils/auth.ts
export function isAuthenticated(): boolean {
  const empleado = localStorage.getItem("empleado")
  return !!empleado
}

