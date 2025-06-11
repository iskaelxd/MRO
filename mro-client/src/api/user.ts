
// src/api/auth.ts
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




