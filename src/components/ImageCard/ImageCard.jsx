import './ImageCard.module.css';

const ImageCard = ({ id, alt_description, smallUrl }) => {
  
  return (
    <div>
      <img id={id} src={smallUrl} alt={alt_description} width="300" height="300" />
    </div>
  );
};

export default ImageCard;
