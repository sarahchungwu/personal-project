import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="Nav">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/detail/:id'}>Pet Profile</Link>
          </li>
          <li>
            <Link to={'/shop'}>Shop</Link>
          </li>
          <li>
            <Link to={'/study'}>School</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
