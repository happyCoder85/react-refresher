function Post(props) {
props.author;
props.body;

    return (
        <div className="post">
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
};

export default Post;