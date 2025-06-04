import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';



const ImageGallery = ({images}) => {

  
  return (
    <div className={css.ulContainer}>
    <ul >
      {images.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <ImageCard id={id} alt_description={alt_description} smallUrl={urls.small} />
        </li>
      ))}
    </ul>
    </div>
);
};

export default ImageGallery;
