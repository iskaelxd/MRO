import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { useAuth } from "@/context/AuthContext"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/api/user"              /* ← usa la instancia global */
import type { ModuleMenu, NavItem } from "@/lib/menu"
import { resolveIcon } from "@/lib/resolve-icon"
import { SkeletonSidebar } from "@/components/SkeletonSidebar"
import { Table } from "lucide-react"         /* icono para el team */

import React from "react"

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const { empleado } = useAuth()

  /* ------------ fetch del menú ------------ */
  const { data: modules, isLoading } = useQuery<ModuleMenu[]>({
    enabled: !!empleado,
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await api.get(
        `/Empleado/ObtenerMenu/${empleado!.id}`
      )
      return data
    },
  })

  if (!empleado || isLoading || !modules) return <SkeletonSidebar />

  /* ------------ adaptadores de tipos ------------ */
  const mapNav = (items: NavItem[]): Array<{
    title: string
    url: string
    icon?: import("lucide-react").LucideIcon
    items?: { title: string; url: string; icon?: import("lucide-react").LucideIcon; items?: any }[]
  }> =>
    items.map((i) => ({
      title: i.title,
      url: i.url,
      icon: resolveIcon(i.icon) as import("lucide-react").LucideIcon | undefined,
      items: i.children ? mapNav(i.children) : undefined,
    }))

  const adaptedModules = modules.map((m) => ({
    ...m,
    nav: mapNav(m.nav),
  }))

  const user = {
    name: empleado.nombreEmpleado,
    email: empleado.correo,
    avatar: "/avatars/shadcn.jpg",
  }

  const teams = [
    {
      name: "MRO",
      logo: Table,                         // ← componente, no string
      plan: empleado.moduloNombre,
    },
  ]

  /* ------------ render ------------ */
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>

      <SidebarContent>
        {adaptedModules.map((mod) => (
          <React.Fragment key={mod.moduloId}>
            <NavMain items={mod.nav} />
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
