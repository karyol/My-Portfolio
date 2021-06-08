import React, { Suspense } from 'react'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Home from '../components/home'
import What from '../components/what'
import About from '../components/about'
import Contact from '../components/contact'

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

const IndexPage = () => {
  const isSSR = typeof window === "undefined";

  return (
    <>
      {!isSSR && (
        <Suspense fallback={ loadingMarkup }>
          <main>
            <title>Baron Portfolio</title>
            <Navbar></Navbar>
            <Hero></Hero>
            <Home></Home>
            <What></What>
            <About></About>
            <Contact></Contact>
          </main>
        </Suspense>
      )}
    </>
  )
}

export default IndexPage
