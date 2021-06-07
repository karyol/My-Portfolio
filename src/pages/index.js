import * as React from 'react'
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
    },
    react: { useSuspense: false },
  });

const IndexPage = () => {
  return (
    <main>
      <title>Baron Portfolio</title>
      <Navbar></Navbar>
      <Hero></Hero>
      <Home></Home>
      <What></What>
      <About></About>
      <Contact></Contact>
    </main>
  )
}

export default IndexPage
