import css from './SearchBar.module.css'
import fetchImages from '../../unsplash_api';
import toast from 'react-hot-toast';


const SearchBar = ({updateKeyword, updateIsLoading, setImages}) => {
  
const handleSubmit = async (event)=> {
  event.preventDefault();
  const key = event.target.input.value;
  updateKeyword(key)
  if (key.length < 3){
    toast.error("Please enter at least 3 letters to search");
    return;
  }

  try {
    updateIsLoading(true);
    const imagesData = await fetchImages(key, 1);

    if(imagesData.length < 1){
      toast.error("No results found");
    }
    
    setImages(imagesData);    
  }

  catch (error) {
    toast.error("An error occured:", error);
  }

  finally{
    updateIsLoading(false);
  }

}

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchFormInput}
          type="text"
          name="input"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
);
};

export default SearchBar;
