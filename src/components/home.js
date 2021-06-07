import * as React from 'react'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {
    home,
    homeContent
} from '../styles/home.module.scss'
import {
    scrollSvg
} from '../styles/index.module.scss'

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
        loadPath: '/static/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className={ home }>
            <div className={ homeContent }>
                <div>
                    <h2>{t('htr1')}</h2>
                    <h1>{t('htr2')}</h1>
                </div>

                <div>
                    <h2>{t('htr3')}</h2>
                    <h1>{t('htr4')}</h1>
                </div>

                <div>
                    <h2>{t('htr5')}</h2>
                    <h1>{t('htr6')}</h1>
                </div>

                <br />
                <br />

                <div>
                    <a href="#what" title={t('scrollWhat')} id="scroll-what">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
