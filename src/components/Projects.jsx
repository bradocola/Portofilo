import { useEffect, useState } from 'react'
import './Projects.css'

const GITHUB_USERNAME = 'bradocola'

function formatRepoName(name) {
    return name.replace(/[-_]+/g, ' ')
}

function Projects() {
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

    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__subtitle">Pulled live from my GitHub</p>

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
        </section>
    )
}

export default Projects
