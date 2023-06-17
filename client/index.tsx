import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'

import PetMainPage from './components/PetMainPage'
import PetDetail from './components/PetDetail'
import Study from './components/Study'
import Shop from './components/Shop'

function AppProvider() {
  // const initialState = [{ name: 'Typescript', difficulty: 1 }]
  // const [languages, setLanguages] = useState(initialState)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<PetMainPage />} />
        <Route path="/detail" element={<PetDetail />} />
        <Route path="/study" element={<Study />} />
        <Route path="/shop" element={<Shop />} />
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
