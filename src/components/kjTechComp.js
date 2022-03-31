import React from 'react'
import Cookies from 'js-cookie'
import styled, { createGlobalStyle } from 'styled-components';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
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
    scrollLeft,
    language
} from '../styles/portTemplate.module.scss'
import {
    scrollSvg
} from '../styles/index.module.scss'
import Screen1 from '../images/kjt/screen1.png'
import Screen2 from '../images/kjt/screen1.png'
import Screen3 from '../images/kjt/screen1.png'
import Screen4 from '../images/kjt/screen1.png'
import Screen5 from '../images/kjt/screen1.png'
import Screen6 from '../images/kjt/screen1.png'
import Screen7 from '../images/kjt/screen1.png'
import Screen8 from '../images/kjt/screen1.png'
import Screen9 from '../images/kjt/screen1.png'
import Screen10 from '../images/kjt/screen1.png'
import Screen11 from '../images/kjt/screen1.png'
import Screen12 from '../images/kjt/screen1.png'
import Screen13 from '../images/kjt/screen1.png'
import ERD from '../images/kjt/ERD.png'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'pl'],
    fallbackLng: 'en',
    detection: {
        order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

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

const KJTechComp = () => {
    const { t } = useTranslation();
    const[dispD, dispScrToDesc] = React.useState(true);
    const[dispH, dispScrToHero] = React.useState(false);

    React.useEffect(() => {
        if(document.readyState === 'complete')
        {
            document.getElementById('languageSelect').value = Cookies.get('i18next');
        }

        if(window.location.href.split('#')[1] === 'hero')
        {
            dispScrToDesc(true);
            dispScrToHero(false);
        }
        else if(window.location.href.split('#')[1] === 'description')
        {
            dispScrToDesc(false);
            dispScrToHero(true);
        }

        window.addEventListener('popstate', () => {
            if(window.location.href.split('#')[1] === 'hero')
            {
                dispScrToDesc(true);
                dispScrToHero(false);
            }
            else if(window.location.href.split('#')[1] === 'description')
            {
                dispScrToDesc(false);
                dispScrToHero(true);
            }
        });
    });

    function changeLang(e)
    {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <main className={ mainPort }>
            <GlobalStyle />
            <title>{t('portItem3')}</title>
            <nav className={ navbar }>
                <a href="#hero">
                    <h3>{t('home')}</h3>
                </a>

                <a href="#description">
                    <h3>{t('description')}</h3>
                </a>

                <section id="language" className={ language }>
                    <select id="languageSelect" onChange={ changeLang }>
                        <option value="en">EN</option>
                        <option value="pl">PL</option>
                    </select>
                </section>
            </nav>

            <section id="hero" className={ hero }>
                <div className={ heroContent }>
                    <div className={ heroDiv }>
                        <h1>{t('portItem3')}</h1>
                        <img src={ Screen1 } alt="Screenshot" />
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
                        <p>{t('kjTechDesc1')}</p>
                        <p>{t('kjTechDesc2')}</p>
                        <p>
                            {t('kjTechDesc3')}
                            <img src={ ERD } alt="ERD" />
                        </p>
                        <p>{t('kjTechDesc4')}</p>
                        <ol>
                            <li>{t('kjTechDesc41')}</li>
                            <li>{t('kjTechDesc42')}</li>
                            <li>{t('kjTechDesc43')}</li>
                            <li>{t('kjTechDesc44')}</li>
                            <li>{t('kjTechDesc45')}</li>
                            <li>{t('kjTechDesc46')}</li>
                        </ol>
                        <p>{t('kjTechDesc5')}</p>
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

export default KJTechComp
