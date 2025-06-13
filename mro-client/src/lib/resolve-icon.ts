// src/lib/resolve-icon.ts
import * as Lucide from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const resolveIcon = (name: string): LucideIcon => {
  // si no existe devolvemos Circle como fallback
  return (Lucide as unknown as Record<string, LucideIcon>)[name] ?? Lucide.Circle
}
