import { Link } from 'gatsby'
import * as React from 'react'
import {
    mainPort,
    hero,
    heroContent,
    heroDiv,
    description,
    descContent,
    descDiv,
    navbar,
    scrollRight,
    scrollLeft
} from '../styles/portTemplate.module.scss'
import {
    scrollSvg
} from '../styles/index.module.scss'
import Screen from '../images/screen.png'

const portTemplate = () => {
    return (
        <main className={ mainPort }>
            <title>Portfolio Template</title>
            <nav className={ navbar }>
                <Link to="#hero">
                    <h3>Home</h3>
                </Link>

                <Link to="#description">
                    <h3>Description</h3>
                </Link>
            </nav>

            <section id="hero" className={ hero }>
                <div class={ heroContent }>
                    <div class={ heroDiv }>
                        <h1>Template</h1>
                        <img src={ Screen } alt="Screenshot" />
                    </div>
                </div>

                <div class={ scrollRight }>
                    <a href="#description" title="Description">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </div>
            </section>

            <section id="description" className={ description }>
                <div class={ descContent }>
                    <div class={ descDiv }>
                        <p>Sample text</p>
                    </div>
                </div>

                <div class={ scrollLeft }>
                    <a href="#hero" title="Hero">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default portTemplate
