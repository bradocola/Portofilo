import './Hero.css'
import softwareCv from '../assets/Omar_Nagy_CV_Software.pdf'
import embeddedCv from '../assets/Omar_Nagy_CV_Embedded.pdf'

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__name">Omar Nagy</h1>
            <p className="hero__hook">
                Building software and hardware that work — from full-stack web apps to embedded systems.
            </p>
            <div className="hero__cvs">
                <a className="hero__cv" href={softwareCv} download="Omar_Nagy_CV_Software.pdf">
                    <i className="fa-solid fa-download"></i>
                    <span>Software Engineering CV</span>
                </a>
                <a className="hero__cv" href={embeddedCv} download="Omar_Nagy_CV_Embedded.pdf">
                    <i className="fa-solid fa-download"></i>
                    <span>Embedded Systems CV</span>
                </a>
            </div>
        </section>
    )
}

export default Hero
