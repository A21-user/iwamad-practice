import ProfileCard from '../components/ProfileCard'

type Skill = {
  id: number
  name: string
  label: string
}

const skills: Skill[] = [
  { id: 1, name: 'HTML', label: 'HTML' },
  { id: 2, name: 'CSS', label: 'CSS' },
  { id: 3, name: 'JavaScript', label: 'JavaScript' },
  { id: 4, name: 'React', label: 'React' },
  { id: 5, name: 'TypeScript', label: 'TypeScript' },
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