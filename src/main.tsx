import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/styles.css'
import { RouterProvider } from 'react-router';
import { browserRoutes } from './routes';
import { ThemeProvider } from './components/context/theme-provider';
import { RecommendationProvider } from './components/context/recommendation-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="bellaport-ui-theme">
      <RouterProvider router={browserRoutes} />
    </ThemeProvider>
  </StrictMode>,
)
