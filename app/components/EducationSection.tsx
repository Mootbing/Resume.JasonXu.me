'use client'

import { useState } from 'react'

export default function EducationSection() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleEducation = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <section
      id="educationSection"
      className={isCollapsed ? 'collapsed' : ''}
    >
      <h2
        className={`education-toggle ${isCollapsed ? 'collapsed' : ''}`}
        onClick={toggleEducation}
      >
        Education
      </h2>
      <div className={`education-content ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="education-item">
          <div className="education-header">
            <span className="education-title">
              Candidate for Bachelor of Science in Computer Science
            </span>
            <span className="education-date">2024 - 2028</span>
          </div>
          <div className="education-school">
            University of Pennsylvania, School of Engineering and Applied Science, Philadelphia, PA
          </div>
        </div>
      </div>
    </section>
  )
}
