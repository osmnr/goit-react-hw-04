import toast, { Toaster } from 'react-hot-toast';

const ErrorMessage = ({error}) => {
  const notify = () => toast.error(error);

  return (
    <Toaster position="top-right"/>
  );
};

export default ErrorMessage;
