import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {
  const navigate = useNavigate();
  
  function closeHandler() {
    navigate('..'); // Can use two dots to go back to the previous page
    // navigate('/'); // Can use a single forward slash to go to the home page
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;