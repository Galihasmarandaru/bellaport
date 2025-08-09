import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/styles.css'
import { RouterProvider } from 'react-router';
import { browserRoutes } from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRoutes} />
  </StrictMode>,
)
