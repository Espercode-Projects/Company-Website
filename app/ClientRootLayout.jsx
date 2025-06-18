"use client";

import React, { createContext, useContext, useState, useEffect } from 'react'

const LocaleContext = createContext({
    currentLocale: 'en', 
    setCurrentLocale: (locale) => {}, 
    headers: {}, 
    translations: {}, 
    footers: {}, 
})

export function useLocale() {
    return useContext(LocaleContext)
}

export default function ClientRootLayout({children}) {
    const [currentLocale, setCurrentLocale] = useState('en')
    const [headers, setHeaders] = useState({})
    const [translations, setTranslations] = useState({})
    const [footers, setFooters] = useState({})
    const [path, setPath] = useState('')

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            setCurrentLocale(storedLang);
        }
      }

      if (typeof window !== 'undefined') {
        setPath(window.location.pathname.split('/')[1])
      }
    }, []);

    let parsedLocale = currentLocale

    switch (currentLocale) {
      case "jp": 
        parsedLocale = "ja"; 
      break; 
      case "cn": 
        parsedLocale = "zh";
      break;
    }

    let filename = path ? path : 'common'

    useEffect(() => {
      const fetchHeaders = () => {
        fetch(`/locales/${parsedLocale}/headers.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setHeaders(data))
        .catch(() => {
          fetch(`/locales/en/headers.json`)
            .then(res => res.json())
            .then(data => setHeaders(data));
        });
      }

      const fetchContents = () => {
        fetch(`/locales/${parsedLocale}/${filename}.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setTranslations(data))
        .catch(() => {
          fetch(`/locales/en/${filename}.json`)
            .then(res => res.json())
            .then(data => setTranslations(data));
        });
      }

      const fetchFooters = () => {
        fetch(`/locales/${parsedLocale}/footers.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setFooters(data))
        .catch(() => {
          fetch(`/locales/en/footers.json`)
            .then(res => res.json())
            .then(data => setFooters(data));
        });
      }

      fetchHeaders()
      fetchContents()
      fetchFooters()
    }, [currentLocale]);

    return (
        <LocaleContext.Provider value={{ currentLocale, setCurrentLocale, headers, translations, footers }}>
            {children}
        </LocaleContext.Provider>
    )
}