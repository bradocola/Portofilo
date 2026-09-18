import { useEffect, useState } from 'react'
import { FEATURED_PROJECTS, TRACKS } from '../data/projects.js'
import '../components/Projects.css'

const GITHUB_USERNAME = 'bradocola'

function formatRepoName(name) {
    return name.replace(/[-_]+/g, ' ')
}

function FeaturedCard({ project }) {
    return (
        <article className="project-card">
            <h3 className="project-card__title">{project.name}</h3>
            {project.status && <span className="project-card__tag project-card__tag--status">{project.status}</span>}
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tags">
                {project.tech.map((tech) => (
                    <span key={tech} className="project-card__tag">{tech}</span>
                ))}
            </div>
            {(project.code || project.live || project.video) && (
                <div className="project-card__links">
                    {project.code && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer">Code →</a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live →</a>
                    )}
                    {project.video && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer">Video →</a>
                    )}
                </div>
            )}
        </article>
    )
}

function ProjectsPage() {
    const [repos, setRepos] = useState([])
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
            .then((res) => {
                if (!res.ok) throw new Error('GitHub request failed')
                return res.json()
            })
            .then((data) => {
                const filtered = data.filter(
                    (repo) =>
                        !repo.fork &&
                        !repo.archived &&
                        repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
                )
                setRepos(filtered)
                setStatus('done')
            })
            .catch(() => setStatus('error'))
    }, [])

    const tracks = [TRACKS.software, TRACKS.embedded]

    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__subtitle">Featured work across software and embedded systems</p>

            {tracks.map((track) => {
                const trackProjects = FEATURED_PROJECTS.filter((p) => p.track === track)
                if (trackProjects.length === 0) return null
                return (
                    <div key={track} className="projects__track">
                        <h3 className="projects__track-title">{track}</h3>
                        <div className="projects__grid">
                            {trackProjects.map((project) => (
                                <FeaturedCard key={project.name} project={project} />
                            ))}
                        </div>
                    </div>
                )
            })}

            <div className="projects__track">
                <h3 className="projects__track-title">More from GitHub</h3>

                {status === 'loading' && <p className="projects__status">Loading projects…</p>}
                {status === 'error' && (
                    <p className="projects__status">
                        Couldn't load projects right now — check{' '}
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                            my GitHub
                        </a>{' '}
                        directly.
                    </p>
                )}
                {status === 'done' && repos.length === 0 && (
                    <p className="projects__status">No public repos to show yet.</p>
                )}

                {status === 'done' && repos.length > 0 && (
                    <div className="projects__grid">
                        {repos.map((repo) => (
                            <article key={repo.id} className="project-card">
                                <h3 className="project-card__title">{formatRepoName(repo.name)}</h3>
                                {repo.description && (
                                    <p className="project-card__desc">{repo.description}</p>
                                )}
                                {repo.language && (
                                    <span className="project-card__tag">{repo.language}</span>
                                )}
                                <div className="project-card__links">
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        Code →
                                    </a>
                                    {repo.homepage && (
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                            Live →
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsPage
