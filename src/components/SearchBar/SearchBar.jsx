import css from './SearchBar.module.css'


const SearchBar = () => {

const handleSubmit = (event)=> {
  event.preventDefault();
}


  return (
    <header>
      <form>
        <input
          className={css.searchFormInput}
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit" onSubmit={handleSubmit}>Search</button>
      </form>
    </header>
);
};

export default SearchBar;
