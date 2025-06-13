// src/components/skeletons.tsx
import { Sidebar, SidebarHeader, SidebarContent } from "@/components/ui/sidebar"

export const SkeletonSidebar = () => (
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <p className="p-4 text-sm text-muted-foreground">Cargando…</p>
    </SidebarContent>
  </Sidebar>
)
