import SkillBadge from './SkillBadge'
import LikeButton from './LikeButton' 
import Card from './ui/card'

type Skill = {
  id: number
  name: string
  label: string
}

type ProfileCardProps = {
  name: string
  bio: string
  avatarUrl: string
  email: string
  githubUrl: string
  skills: Skill[]
}

function ProfileCard({
  name,
  bio,
  avatarUrl,
  email,
  githubUrl,
  skills,
}: ProfileCardProps) {
  return (
    <main>
      <Card>
        <div className="card-content">
          <img
            src={avatarUrl}
            alt={`Photo of ${name}`}
            width="200"
            height="200"
            className="profile-image"
          />

          <div className="profile-info">
            <h2>{name}</h2>

            <p>{bio}</p>

            <div className="links">
              <a href={`mailto:${email}`}>Email Me</a>

              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="skills">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))
              ) : (
                <p>No skills added yet.</p>
              )}
            </div>

            <LikeButton />
          </div>
        </div>
      </Card>
    </main>
  )
}

export default ProfileCard