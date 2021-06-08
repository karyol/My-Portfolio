import * as React from 'react'
import Cookies from 'js-cookie'
import Certificate from '../components/certificate'
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
import ico from '../images/certificate.jpg'
import image from '../images/swirl.png'

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
    },
    react: { useSuspense: false },
  });

const Certificates = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        document.getElementById('language').value = Cookies.get('i18next');
    });

    function changeLang(e)
    {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <main>
            <title>Baron Certificates</title>
            <section className={ certificatesSection }>
                <section id="language" className={ language }>
                    <select onChange={ changeLang } defaultValue={ Cookies.get('i18next') }>
                        <option value="en">EN</option>
                        <option value="pl">PL</option>
                    </select>
                </section>

                <div className={ certSecContent }>
                    <div className={ certTitleBox }>
                        <h1>{t('crtr1')}</h1>
                    </div>

                    <div className={ certContent }>
                        <Certificate image={ ico } title='tytuł'>
                            Opisdaskhudsahjdsfakhjgbgsdfkjhgfbdhjshbjgkfdfbhdjskhbjksfddfhbsjkhjbksdfhjgfshjfshgjfshjgfdshgjfshgjbfsghjfhjfhdjbsgkdfshjfdshjgbdhsfjgdsfhjgdfhjsghjgfdshjgdfshgbjfdshjbgfdshjdfhjsdfhjgfdshjgfdshgjfdshgjfdshgjfdsghjkfdsghjkfdgshjghjghjdfsghjfdsghjfdsgjhfdsgjhfds
                        </Certificate>

                        <Certificate image={ image } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ image } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Certificates
