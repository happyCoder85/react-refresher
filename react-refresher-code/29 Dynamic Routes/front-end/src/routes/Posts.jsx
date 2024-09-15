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

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();

  return resData.posts;
}