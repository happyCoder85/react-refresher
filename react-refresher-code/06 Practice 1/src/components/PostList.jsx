import Post from './Post';
import classes from '../components/PostList.module.css';

function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="William Shakespear" body="In faith I love thee with thy eyes"/>
            <Post author="Charles Dickens" body="It was the best of times, it was the worst of times"/>
        </ul>
    )
}

export default PostList;