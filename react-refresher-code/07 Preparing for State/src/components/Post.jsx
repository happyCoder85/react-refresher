import classes from './Post.module.css'; // Import the CSS file as a module.

function Post(props) {
props.author;
props.body;

    return (
        <div className={classes.post}>
            <li>
                <p className={classes.author}>{props.author}</p>
                <p className={classes.text}>{props.body}</p>
            </li>
        </div>
    );
};

export default Post;