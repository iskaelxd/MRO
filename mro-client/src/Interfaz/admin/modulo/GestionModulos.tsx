"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const moduloSchema = z.object({
  modulo: z.string().min(2, { message: "El nombre del módulo es requerido." }),
  codigo: z.string().min(1, { message: "El código del módulo es requerido." }),
})

const rolSchema = z.object({
  rol: z.string().min(2, { message: "El nombre del rol es requerido." }),
})

export function GestionModulo() {
  const [tipoRegistro, setTipoRegistro] = useState<"modulo" | "rol">("modulo")

  const moduloForm = useForm<z.infer<typeof moduloSchema>>({
    resolver: zodResolver(moduloSchema),
    defaultValues: { modulo: "", codigo: "" },
  })

  const rolForm = useForm<z.infer<typeof rolSchema>>({
    resolver: zodResolver(rolSchema),
    defaultValues: { rol: "" },
  })

  const onSubmitModulo = (data: z.infer<typeof moduloSchema>) => {
    toast("Módulo registrado", { description: JSON.stringify(data, null, 2) })
  }

  const onSubmitRol = (data: z.infer<typeof rolSchema>) => {
    toast("Rol registrado", { description: JSON.stringify(data, null, 2) })
  }

  const modulos = [
    { id: 1, nombre: "Usuarios", codigo: "MOD001" },
    { id: 2, nombre: "Reportes", codigo: "MOD002" },
  ]

  const roles = [
    { id: 1, nombre: "Administrador", modulo: "Usuarios" },
    { id: 2, nombre: "Editor", modulo: "Reportes" },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Módulos y Roles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={(value) => setTipoRegistro(value as "modulo" | "rol")} defaultValue="modulo">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona qué deseas registrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modulo">Registrar Módulo</SelectItem>
              <SelectItem value="rol">Registrar Rol</SelectItem>
            </SelectContent>
          </Select>

          {tipoRegistro === "modulo" ? (
            <Form {...moduloForm}>
              <form onSubmit={moduloForm.handleSubmit(onSubmitModulo)} className="space-y-4">
                <FormField
                  control={moduloForm.control}
                  name="modulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Módulo</FormLabel>
                      <FormControl><Input placeholder="Ej. Gestión de Usuarios" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={moduloForm.control}
                  name="codigo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código del Módulo</FormLabel>
                      <FormControl><Input placeholder="Ej. MOD001" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Registrar Módulo</Button>
              </form>
            </Form>
          ) : (
            <Form {...rolForm}>
              <form onSubmit={rolForm.handleSubmit(onSubmitRol)} className="space-y-4">
                <FormField
                  control={rolForm.control}
                  name="rol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Rol</FormLabel>
                      <FormControl><Input placeholder="Ej. Administrador" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Registrar Rol</Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{tipoRegistro === "modulo" ? "Lista de Módulos" : "Lista de Roles"}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="table-fixed w-full">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[33%]">Nombre</TableHead>
      <TableHead className="w-[33%]">
        {tipoRegistro === "modulo" ? "Código" : "Módulo"}
      </TableHead>
      <TableHead className="w-[34%] text-right">Acciones</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {(tipoRegistro === "modulo" ? modulos : roles).map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.nombre}</TableCell>
        <TableCell>
          {"codigo" in item ? item.codigo : item.modulo}
        </TableCell>
        <TableCell className="text-right space-x-2">
          <Button variant="outline" size="sm">Editar</Button>
          <Button variant="destructive" size="sm">Eliminar</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>


        </CardContent>
      </Card>
    </div>
  )
}
