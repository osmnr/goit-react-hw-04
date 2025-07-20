import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import fetchImages from './unsplash_api';

import { useState } from 'react'

function App() {

const [keyword, setKeyword] = useState("");
 const updateKeyword = (newData) => {
    setKeyword(newData);
  }

  const [images, setImages] = useState([]);
  const updateImages = (newData) => {
    setImages((prevImages) => [...prevImages, ...newData]);
  }

  const [page, setPage] = useState(1);
  const [error, setError] = useState("test");

  const [selectedImage, setSelectedImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const updateIsLoading = (newValue) => {
    setIsLoading(newValue);
  }
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
      setSelectedImage(null);
    };



  return (
    <>
    <SearchBar updateKeyword={updateKeyword} setImages={setImages} updateIsLoading={updateIsLoading} />
    {isLoading && <Loader />}
    <ImageGallery images={images} onImageClick={handleImageClick}/>
    
    {images.length > 0 && <LoadMoreBtn keyword={keyword} setPage={setPage} page={page}  updateImages={updateImages} updateIsLoading={updateIsLoading} />}
    
    <ErrorMessage error={error} />
    
    
     {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  )
  };


export default App
