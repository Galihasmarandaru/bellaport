import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/styles.css'
import { RouterProvider } from 'react-router';
import { browserRoutes } from './routes';
import { ThemeProvider } from './components/context/theme-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="bellaport-ui-theme">
      <RouterProvider router={browserRoutes} />
    </ThemeProvider>
  </StrictMode>,
)
