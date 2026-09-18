import './Resume.css'

const SKILLS = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'C', 'VHDL', 'Verilog', 'Assembly'] },
  { label: 'Frameworks & Tools', items: ['React', 'React Native', 'Expo', 'Node.js', 'Express', 'Socket.io', 'Git', 'ModelSim'] },
  { label: 'Backend & Data', items: ['PostgreSQL', 'WebRTC'] },
  { label: 'Embedded Platforms', items: ['ESP32', 'STM32'] },
  { label: 'Foundations', items: ['OOP', 'Data Structures & Algorithms'] },
]

const EXPERIENCE = [
  {
    role: 'Mobile Developer Intern — Park St. Developments',
    place: 'Al Sheikh Zayed City, Giza',
    time: 'Jun 2026 - Present',
    points: [
      'Architected and developed FaceGame, a real-time multi-user interactive app with custom networking logic.',
      'Built a cinema booking application with Node.js, Express, and PostgreSQL, using Socket.io for real-time booking updates.',
      'Completed a 2-week IT infrastructure rotation covering CCNA fundamentals, NAT configuration, and router/switch data flow.',
    ],
  },
]

const EDUCATION = {
  school: 'Faculty of Engineering, Cairo University',
  degree: 'B.Sc. in Computer Engineering',
  time: '2023 - 2028 (Expected)',
}

const CERTIFICATIONS = ['CS50x & CS50P: Computer Science & Python Programming, Harvard University']

function Resume() {
  return (
    <div className="resume">
      <div className="resume__grid">
        <div className="resume__block">
          <h3 className="resume__block-title">Skills</h3>
          <div className="resume__skills">
            {SKILLS.map((group) => (
              <div key={group.label} className="resume__skill-group">
                <span className="resume__skill-label">{group.label}</span>
                <div className="resume__tags">
                  {group.items.map((item) => (
                    <span key={item} className="resume__tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume__block">
          <h3 className="resume__block-title">Experience</h3>
          {EXPERIENCE.map((job) => (
            <div key={job.role} className="resume__entry">
              <div className="resume__entry-head">
                <span className="resume__entry-title">{job.role}</span>
                <span className="resume__entry-time">{job.time}</span>
              </div>
              <span className="resume__entry-sub">{job.place}</span>
              <ul className="resume__entry-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume__block">
          <h3 className="resume__block-title">Education</h3>
          <div className="resume__entry">
            <div className="resume__entry-head">
              <span className="resume__entry-title">{EDUCATION.school}</span>
              <span className="resume__entry-time">{EDUCATION.time}</span>
            </div>
            <span className="resume__entry-sub">{EDUCATION.degree}</span>
          </div>
        </div>

        <div className="resume__block">
          <h3 className="resume__block-title">Certifications</h3>
          <ul className="resume__entry-points">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
