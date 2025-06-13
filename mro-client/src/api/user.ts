
// src/api/auth.ts
import axios from "axios"


export interface LoginPayload {
  numeroEmpleado: string
  contrasena: string
}

export async function loginEmpleado(payload: LoginPayload) {
  const response = await fetch("https://localhost:44365/api/Empleado/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error("Credenciales inválidas")
  }

  return response.json() // ← Aquí esperas que el backend te devuelva los datos del empleado
}


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://localhost:44365/api",
   headers: {
      "Content-Type": "application/json",
    }
})



