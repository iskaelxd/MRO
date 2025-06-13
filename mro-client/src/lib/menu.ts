// src/lib/menu.types.ts
export interface NavItem {
  id: number
  title: string
  url: string
  icon: string           // nombre del icono Lucide: "ReceiptText", "UsersRound", …
  sort: number
  children?: NavItem[]
}

export interface ModuleMenu {
  moduloId: number
  moduloNombre: string
  nav: NavItem[]
}
