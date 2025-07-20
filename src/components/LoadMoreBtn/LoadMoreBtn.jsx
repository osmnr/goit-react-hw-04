import css from './LoadMoreBtn.module.css'
import toast from 'react-hot-toast';
import fetchImages from '../../unsplash_api';

const LoadMoreBtn = ({keyword, page, setPage, updateIsLoading, updateImages}) => {

  const handleLoadMore = async (event)=> {
    
  try {
      updateIsLoading(true);
      const nextPage = page+1;
      await setPage(nextPage);
      const imagesData = await fetchImages(keyword, nextPage);

      if(imagesData.length < 1){
        toast.error("No results found");
      }

      updateImages(imagesData);    
    }

    catch (error) {
      toast.error("An error occured:", error);
    }

    finally{
      updateIsLoading(false);
    }

}


  return (
    <div className={css.LoadMoreButtonContainer}>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
);
};

export default LoadMoreBtn;
