import React, {useState} from 'react'
import English from 'lang/en.json'
import Catala from 'lang/cat.json'
import Castellano from 'lang/es.json'

const LanguageContext = React.createContext();

const prefLocale = localStorage.getItem('locale') || 'en'

const getMessages = (locale) => {
    if(locale === 'en')
        return English
    else if(locale === 'es')
        return Castellano
    else
        return Catala
}

export function LanguageContentProvider (props){

    const [locale,setLocale] = useState(prefLocale)
    const [messages,setMessages] = useState(getMessages(prefLocale))
    
    const setLanguage = ({lang}) =>{
        const newLocale = lang
        setLocale(newLocale)
        localStorage.setItem('locale',lang)
        const messages = getMessages(newLocale)
        setMessages(messages)
    }

    return <LanguageContext.Provider value={{locale,setLanguage,messages}}>
        {props.children}
    </LanguageContext.Provider>
} 

export default LanguageContext