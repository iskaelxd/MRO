import { Outlet } from "react-router-dom"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SectionCards } from "@/components/section-cards"

export default function DashboardLayout() {
  return (
    <SidebarProvider          /* ← maneja el estado “plegado / expandido” */
      style={{ "--sidebar-width": "16rem" } as React.CSSProperties}
      /* opcional: añade className="group/sidebar-wrapper" si piensas usar
         utilidades como group-has:data-[collapsible=icon]/sidebar-wrapper:h-12 */
    >
      <AppSidebar />

      {/* ---------- Zona de la derecha ---------- */}
      <SidebarInset className="flex min-h-screen flex-col bg-background">
        {/* ── HEADER ─────────────────────────────────────────────── */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          {/* botón hamburguesa / chevron */}
          <SidebarTrigger className="-ml-1" />

          {/* separador vertical fino */}
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          {/* migas de pan (opcional) */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Panel</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* ── CONTENIDO DE LA PÁGINA ─────────────────────────────── */}
        {/* <Outlet /> inserta la pantalla actual (Index, Reportes, etc.) */}
        <main className="flex-1 overflow-y-auto">
         <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
