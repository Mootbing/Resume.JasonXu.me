'use client'

import { useState } from 'react'

const skills = [
  'Python',
  'Java',
  'TypeScript',
  'React',
  'Next.js',
  'C++',
  'HTML',
  'CSS',
  'Tailwind',
  'OCaml',
  'SQL',
  'Unreal Engine',
  'Expo',
  'React Native',
  'Git',
  'Firebase',
  'Supabase',
  'Hasura',
  'GraphQL',
  'Postgres',
  'AWS',
  'GCP',
  'Azure',
  'CI/CD',
  'Figma',
]

export default function SkillsSection() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleSkills = () => {
    if (isCollapsed) {
      setIsCollapsed(false)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1200)
    } else {
      setIsCollapsed(true)
      setIsAnimating(false)
    }
  }

  return (
    <section
      id="skillsSection"
      className={isCollapsed ? 'collapsed' : ''}
    >
      <h2
        className={`skills-toggle ${isCollapsed ? 'collapsed' : ''}`}
        onClick={toggleSkills}
      >
        Technical Skills
      </h2>
      <div
        id="skillsList"
        className={`skills-list ${isCollapsed ? 'collapsed' : ''} ${isAnimating ? 'animating' : ''}`}
      >
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
