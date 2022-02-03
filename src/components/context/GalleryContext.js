
import Gallery from 'components/Gallery'
import React,{useState} from 'react'

const GalleryContext = React.createContext({})
export function GalleryProvider({children}){

    const [show,setShow] = useState(false)
    const [pics,setPics] = useState([])

    const showGallery = ({pics}) =>{
        console.log("Showing",pics)
        if(Array.isArray(pics)){
            setPics(pics)
            setShow(true)
        }
    }

    const closeGallery = () =>{
       setShow(false)
    }

    return <GalleryContext.Provider value={{showGallery,closeGallery}}>
        <Gallery show={show} pics={pics} setShow={setShow}/>
        {children}
    </GalleryContext.Provider>
}

export default GalleryContext