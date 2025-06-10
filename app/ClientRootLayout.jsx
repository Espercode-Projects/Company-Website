"use client";

import React, { createContext, useContext, useState, useEffect } from 'react'

const LocaleContext = createContext({
    currentLocale: 'en', 
    setCurrentLocale: (locale) => {}, 
    translations: {}, 
})

export function useLocale() {
    return useContext(LocaleContext)
}

export default function ClientRootLayout({children}) {
    const [currentLocale, setCurrentLocale] = useState(localStorage.getItem('lang') || 'en')
    const [translations, setTranslations] = useState({})

    let parsedLocale = currentLocale

    switch (currentLocale) {
      case "jp": 
        parsedLocale = "ja"; 
      break; 
      case "cn": 
        parsedLocale = "zh";
      break;
    }

    useEffect(() => {
      fetch(`/locales/${parsedLocale}/common.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setTranslations(data))
        .catch(() => {
          fetch('/locales/en/common.json')
            .then(res => res.json())
            .then(data => setTranslations(data));
        });
    }, [currentLocale]);

    return (
        <LocaleContext.Provider value={{ currentLocale, setCurrentLocale, translations }}>
            {children}
        </LocaleContext.Provider>
    )
}