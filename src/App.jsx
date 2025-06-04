import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'

import { useState } from 'react'

function App() {

  const [images, setImages] = useState([]);
  const updateImages = (newData)=> {
    setImages(newData);
  }

  return (
    <>
    <SearchBar updateImages={updateImages} />
    <ImageGallery images={images} />
    </>
  )
}

export default App
