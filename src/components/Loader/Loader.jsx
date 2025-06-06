import { RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loaderInnerDiv}>
        <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""  />
      </div>
    </div>
);
};

export default Loader;
