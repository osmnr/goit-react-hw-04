import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import fetchImages from './unsplash_api'


function App() {
  fetchImages("test",1);

  return (
    <>
    <SearchBar/>
    </>
  )
}

export default App
