import { Outlet } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import PostList from '../components/PostList';

function Posts() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  return (
  <>
  <Outlet />
    <main>
      <PostList />
    </main>
  </>
  );
}

export default Posts;
