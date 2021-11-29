import './assets/main.css'
import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

const App = () => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [term, setTerm] = useState('')

    useEffect (() => {
        fetch(`https://pixabay.com/api/?key=24574635-7734b44201cd168140ebf786c&q=${term}&image_type=photo&pretty=true`)
        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImages(data.hits)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [term])
    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)}/>
            {isLoading ? <h1 className="text-6xl text-center mx-uto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
                {images.map(image => {
                    return(
                    <ImageCard key={image.id} image={image}/>
                    )
                })}
            </div>}
        </div>
    )
}

export default App
