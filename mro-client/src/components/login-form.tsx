/* LoginForm.tsx */

import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    navigate("/Interfaz")

  }

  return (

    /* 🔑 Ocupar 100 vw × 100 vh, ignorando contenedores padres */
<div

      className={cn(

        "fixed inset-0 flex overflow-x-hidden", // ← fixed + inset-0 = pantalla completa

        className

      )}

      {...props}
>

      {/* 50 % izquierda */}
<aside className="basis-1/2 flex flex-col items-center justify-center bg-neutral-900 p-8 text-white">
<h1 className="text-6xl font-bold">MRO</h1>
<p className="mt-4 max-w-sm text-center text-xl">

          Mantenimiento Reparación y Operaciones
</p>
</aside>

  
<section className="basis-1/2 flex flex-col items-center justify-center bg-muted px-6">
<form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
<div className="grid gap-2">
<Label htmlFor="number">Número de Empleado</Label>
<Input

              id="number"

              name="number"

              type="text"

              placeholder="Introduce tu número de empleado"

              required

            />
</div>
<div className="grid gap-2">
<Label htmlFor="password">Contraseña</Label>
<Input

              id="password"

              name="password"

              type="password"

              placeholder="Introduce tu contraseña"

              required

            />
</div>
<Button type="submit" className="w-full">

            Iniciar Sesión
</Button>
</form>
</section>
</div>

  )

}
 