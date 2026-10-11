import Tag from './ui/tag'

export type Skill = {
  id: number
  label: string
}

type SkillBadgeProps = {
  skill: Skill
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return <Tag label={skill.label} />
}

export default SkillBadge