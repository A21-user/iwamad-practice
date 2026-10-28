
import { NavLink } from 'react-router'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>

      <nav>
        <NavLink to="/">Home</NavLink>
        {' | '}
        <NavLink to="/skills">Skills</NavLink>
        {' | '}
        <NavLink to="/contact">Contact</NavLink>
        {' | '}
        <NavLink to="/register">Register</NavLink>
        {' | '}
        <NavLink to="/events">Events</NavLink>
      </nav>
    </header>
  )
}

export default Header
