import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import { useState } from 'react'
import PetMainPage from './components/PetMainPage'
import PetDetail from './components/PetDetail'

function AppProvider() {
  // const initialState = [{ name: 'Typescript', difficulty: 1 }]
  // const [languages, setLanguages] = useState(initialState)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<PetMainPage />} />
        <Route path="/detail" element={<PetDetail />} />
      </Route>
    )
  )
  return <RouterProvider router={routes} />
}

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <AppProvider />
  )
})
