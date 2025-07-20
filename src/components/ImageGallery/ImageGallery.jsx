import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';



const ImageGallery = ({images, onImageClick }) => {

  
  return (
    <div className={css.ulContainer}>
    <ul >
      {images.map( (image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard id={image.id} alt_description={image.alt_description} smallUrl={image.urls.small} />
        </li>
      ) )}
    </ul>
    </div>
);
};

export default ImageGallery;
