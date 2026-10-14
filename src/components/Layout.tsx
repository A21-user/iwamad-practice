import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header
        name="Bakyt Arina"
        role="Junior Web Developer"
      />

      <Outlet />

      <Footer
        year={2026}
        name="Bakyt Arina"
        week="Week 6"
      />
    </>
  )
}

export default Layout