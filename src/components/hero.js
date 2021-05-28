import * as React from 'react'
import {
    hero,
    heroContent,
    logoAnimate,
    heroBackground,
    heroBackgroundImg
} from '../styles/hero.module.scss'
import {
    scrollSvg
} from '../styles/index.module.scss'

const Hero = () => {
    return (
        <section id="hero" className={ hero }>
            <div className={ heroContent }>
                <div className={ logoAnimate }></div>

                <br />
                <div></div>
                <br />

                <a href="#home" title="Start" id="scroll-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                    <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                    <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                    </svg>
                </a>
            </div>

            <div className={ heroBackground }>
                <div className={ heroBackgroundImg }></div>
            </div>
        </section>
    )
}

export default Hero
