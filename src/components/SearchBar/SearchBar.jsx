import css from './SearchBar.module.css'
import fetchImages from '../../unsplash_api';
import toast from 'react-hot-toast';


const SearchBar = ({updateIsLoading, updateImages}) => {
  
const handleSubmit = async (event)=> {
  event.preventDefault();
  const searchKeyword = event.target.input.value;
  
  try {
    updateIsLoading(true);
    const imagesData = await fetchImages(searchKeyword, 1);
    if(imagesData.length < 1){
      toast.error("No results found");
    }
    updateImages(imagesData);    
  } catch (error) {
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
