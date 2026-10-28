
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

      <main>
        <Outlet />
      </main>

      <Footer
        year={2026}
        name="Bakyt Arina"
        week="Week 7"
      />
    </>
  )
}

export default Layout
