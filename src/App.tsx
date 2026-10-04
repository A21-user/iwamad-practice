import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import type { Skill } from './components/SkillBadge'

import './style.css'

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
]

function App() {
  return (
    <>
      <Header
        name="Bakyt Arina"
        role="Junior Web Developer"
      />

      <ProfileCard
        name="Bakyt Arina"
        bio="I'm a KBTU student learning web development. I'm taking the IWaMAD course to grow a portfolio."
        avatarUrl={`${import.meta.env.BASE_URL}arina.jpeg`}
        email="ar_bakyt@kbtu.kz"
        githubUrl="https://github.com/"
        skills={skills}
      />

      <Footer
        year={2026}
        name="Bakyt Arina"
        week="Week 3"
      />
    </>
  )
}

export default App