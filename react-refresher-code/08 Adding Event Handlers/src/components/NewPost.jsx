import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost() {
  const [ enteredBody, setEnteredBody ] = useState('');
  // stateData[0] // current state value
  // stateData[1] // function to update the state

  function changeBodyHandler(event) {
     setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={ changeBodyHandler }/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;