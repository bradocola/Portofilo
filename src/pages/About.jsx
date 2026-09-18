import Profile from '../components/Profile.jsx'
import Resume from '../components/Resume.jsx'
import softwareCv from '../assets/Omar_Nagy_CV_Software.pdf'
import embeddedCv from '../assets/Omar_Nagy_CV_Embedded.pdf'
import './About.css'

function About() {
    return (
        <section className="about">
            <Profile />

            <div className="about__cvs">
                <a className="about__cv" href={softwareCv} download="Omar_Nagy_CV_Software.pdf">
                    <i className="fa-solid fa-download"></i>
                    <span>Software Engineering CV</span>
                </a>
                <a className="about__cv" href={embeddedCv} download="Omar_Nagy_CV_Embedded.pdf">
                    <i className="fa-solid fa-download"></i>
                    <span>Embedded Systems CV</span>
                </a>
            </div>

            <Resume />
        </section>
    )
}

export default About
