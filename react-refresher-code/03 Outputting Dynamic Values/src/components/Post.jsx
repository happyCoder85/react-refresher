const names = ['Jonathan', ' Zayden']; // The names we want to switch between.

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]; // Randomly choose a name.

    return (
        <div class="post">
            <h2>{chosenName}</h2> // Using {} to insert JavaScript into JSX.
            <p>This would be the first post! :-)</p>
        </div>
    );
};

export default Post;