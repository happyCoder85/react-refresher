import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]); // Not optimal but it works. There is a rule: If you update state and the new state is based on the previous state, you should pass a function such as an arrow function to the setter function.

    setPosts((existingPosts) => [postData, ...existingPosts]); // This is the optimal way to update the state based on the previous state. This is because React batches state updates and if you use the previous state in the new state, you can be sure that you're working with the latest state. The reason for this is because React doesn't automatically update your state. It schedules the update and then it will update the state when it has time. This is why you should always use the function form of the setter function when you update the state based on the previous state, so that you don't miss any updates.
    };

  return (
    <>
      { isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
          </Modal>
        )
      }
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;