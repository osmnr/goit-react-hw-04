import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';


import { useState } from 'react'

function App() {

  const [images, setImages] = useState([]);
  const updateImages = (newData)=> {
    setImages(newData);
  }
  const [isLoading, setIsLoading] = useState(false);
  const updateIsLoading = (newValue) => {
    setIsLoading(newValue);
  }


  const [isThereMoreResults, setIsThereMoreResults] = useState(false);
  const updateIsThereMoreResults = (newValue) => {
    setIsThereMoreResults(newValue);
  }

  return (
    <>
    <SearchBar updateImages={updateImages} updateIsLoading={updateIsLoading} />
    {isLoading && <Loader />}
    <ImageGallery images={images} />
    {isThereMoreResults && <LoadMoreBtn />}
    <ErrorMessage/>
    
    </>
  )
}

export default App
