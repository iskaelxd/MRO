import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'

// 👇 Importa React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 👇 Crea una instancia del cliente
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position='top-center' />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
