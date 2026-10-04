import ProfileCard from '../components/ProfileCard'
import type { Skill } from '../components/SkillBadge'

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
]

function HomePage() {
  return (
    <ProfileCard
      name="Bakyt Arina"
      bio="I'm a KBTU student learning web development. I'm taking the IWaMAD course to grow a portfolio."
      avatarUrl={`${import.meta.env.BASE_URL}arina.jpeg`}
      email="ar_bakyt@kbtu.kz"
      githubUrl="https://github.com/"
      skills={skills}
    />
  )
}

export default HomePage
