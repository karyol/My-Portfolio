import React from 'react'
import Cookies from 'js-cookie'
import Certificate from './certificate'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {
    certificatesSection,
    certContent,
    certTitleBox,
    certSecContent,
    language
} from '../styles/certificates.module.scss'
import e12 from '../images/certificates/E12_Karol_Jasek.png'
import e13 from '../images/certificates/E13_Karol_Jasek.png'
import e14 from '../images/certificates/E14_Karol_Jasek.png'
import ti from '../images/certificates/TI_Karol_Jasek.png'
import cinel1 from '../images/certificates/CINEL_Karol_Jasek_1.png'

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
        loadPath: '/locales/{{lng}}/translation.json',
    }
  });

const CertificatesComp = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        if(document.readyState === 'complete')
        {
            document.getElementById('languageSelect').value = Cookies.get('i18next');
        }
    });

    function changeLang(e)
    {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <main>
            <title>{t('certSiteTitle')}</title>
            <section className={ certificatesSection }>
                <section id="language" className={ language }>
                    <select id="languageSelect" onChange={ changeLang }>
                        <option value="en">EN</option>
                        <option value="pl">PL</option>
                    </select>
                </section>

                <div className={ certSecContent }>
                    <div className={ certTitleBox }>
                        <h1>{t('crtr1')}</h1>
                    </div>

                    <div className={ certContent }>
                        <Certificate image={ e12 } title={t('e12title')}>
                            {t('e12desc')}
                        </Certificate>

                        <Certificate image={ e13 } title={t('e13title')}>
                            {t('e13desc')}
                        </Certificate>

                        <Certificate image={ e14 } title={t('e14title')}>
                            {t('e14desc')}
                        </Certificate>

                        <Certificate image={ ti } title={t('tititle')}>
                            {t('tidesc')}
                        </Certificate>

                        <Certificate image={ cinel1 } title={t('cineltitle')}>
                            {t('cineldesc')}
                        </Certificate>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CertificatesComp
