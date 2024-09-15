import React from 'react';
import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
  <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostList 
        isPosting={modalIsVisible} 
        onStopPosting={hideModalHandler}/>
    </main>
  </>
  );
}

export default App;
