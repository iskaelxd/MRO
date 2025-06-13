// src/hooks/useMenu.ts
import { useQuery } from "@tanstack/react-query"
import { api } from "@/api/user"
import type { ModuleMenu } from "@/lib/menu"
import { useAuth } from "@/context/AuthContext"

export const useMenu = () =>
  useQuery<ModuleMenu[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      const { empleado } = useAuth()  // 👈 ver nota abajo
      if (!empleado) throw new Error("Sin usuario")
      const { data } = await api.get(
        `/Empleado/ObtenerMenu/${empleado.id}`
      )
      return data
    },
  })

/*
 Nota: si useAuth es un hook normal, no puedes llamarlo aquí
 fuera de un componente. Dos opciones:

 1. Mueve el código a dentro de AppSidebar y pásale el id,
    algo así:
         const { empleado } = useAuth();
         const { data } = useQuery({...}, { enabled: !!empleado });

 2. Usa un store tipo Zustand para auth y lee el id sin hook,
    pero para no complicar, ve con la opción 1:
*/
