import css from './SearchBar.module.css'
import fetchImages from '../../unsplash_api';

const SearchBar = ({updateImages}) => {
  
const handleSubmit = async (event)=> {
  event.preventDefault();
  const searchKeyword = event.target.input.value;
  console.log("submit worked, keyword: ", searchKeyword);
  const imagesData = await fetchImages(searchKeyword, 1);
  updateImages(imagesData);
  console.log("imagesData:",imagesData);
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
