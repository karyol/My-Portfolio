import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
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

const GlobalStyle = createGlobalStyle`
    html, body
    {
        overflow: hidden;
    }
`;

const ScrollToDesc = styled.div`
    display: ${({ dispScrDesc }) => dispScrDesc ? 'block' : 'none' };
`;

const ScrollToHero = styled.div`
    display: ${({ dispScrHero }) => dispScrHero ? 'block' : 'none' };
`;

const PortTemplate = () => {
    const[dispD, dispScrToDesc] = React.useState(true);
    const[dispH, dispScrToHero] = React.useState(false);

    var loc = 'http://localhost:8000/portTemplate/';
    window.addEventListener('popstate', () => {
        if(window.location.href === loc + '#hero')
        {
            dispScrToDesc(true);
            dispScrToHero(false);
        }
        else if(window.location.href === loc + '#description')
        {
            dispScrToDesc(false);
            dispScrToHero(true);
        }
    });

    return (
        <main className={ mainPort }>
            <GlobalStyle />
            <title>Portfolio Template</title>
            <nav className={ navbar }>
                <a href="#hero">
                    <h3>Home</h3>
                </a>

                <a href="#description">
                    <h3>Description</h3>
                </a>
            </nav>

            <section id="hero" className={ hero }>
                <div className={ heroContent }>
                    <div className={ heroDiv }>
                        <h1>Template</h1>
                        <img src={ Screen } alt="Screenshot" />
                    </div>
                </div>

                <ScrollToDesc className={ scrollRight } dispScrDesc={ dispD }>
                    <a href="#description" title="Description">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </ScrollToDesc>
            </section>

            <section id="description" className={ description }>
                <div className={ descContent }>
                    <div className={ descDiv }>
                        <p>Sample text</p>
                    </div>
                </div>

                <ScrollToHero className={ scrollLeft } dispScrHero={ dispH }>
                    <a href="#hero" title="Hero">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </ScrollToHero>
            </section>
        </main>
    )
}

export default PortTemplate
