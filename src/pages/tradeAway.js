import React, { Suspense } from 'react'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const TradeAwayComp = React.lazy(() => import('../components/tradeAwayComp'));

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

const loadingMarkup = (
    <div style={{ 
        textAlign: "center",
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundImage: "linear-gradient(180deg, #e4815d, #fca959)"
    }}>
        <h2 style={{ 
            margin: "auto"
        }}>Loading...</h2>
    </div>
);

const TradeAway = () => {
    const isSSR = typeof window === "undefined";

    return (
        <>
            {!isSSR && (
                <Suspense fallback={ loadingMarkup }>
                    <TradeAwayComp />
                </Suspense>
            )}
        </>
    )
};

export default TradeAway
