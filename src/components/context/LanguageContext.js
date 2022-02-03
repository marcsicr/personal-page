import React, {useState} from 'react'
import English from 'lang/en.json'
import Catala from 'lang/cat.json'
import Castellano from 'lang/es.json'

const LanguageContext = React.createContext();

// const local = navigator.language;

// const dashIndex = local.indexOf('-')
// const lang = dashIndex <= 0? local : local.substring(0,dashIndex)

export function LanguageContentProvider (props){

    const [locale,setLocale] = useState('en')
    const [messages,setMessages] = useState(English)

    const getMessages = (locale) => {
        if(locale === 'en')
            return English
        else if(locale === 'es')
            return Castellano
        else
            return Catala
    }
    

    const setLanguage = ({lang}) =>{
        const newLocale = lang
        setLocale(newLocale)
        const messages = getMessages(newLocale)
        setMessages(messages)
    }

    return <LanguageContext.Provider value={{locale,setLanguage,messages}}>
        {props.children}
    </LanguageContext.Provider>
} 

export default LanguageContext