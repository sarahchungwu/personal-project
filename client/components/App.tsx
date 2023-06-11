import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <div className="body-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
