import React, {useEffect, useMemo, useState} from "react"


const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            setPosts(await res.json());
        }
        fetchPosts();
    }, [])

    const PostsList = useMemo(() => posts.map(({id, title, body}) =>
            <li className="posts_single-post" data-post-id={id} key={id}>
                <h3 className="posts__post-title">{title}</h3>
                <p className="posts__post-description">{body}</p>
            </li>),
        [posts]);

    return (
        <div className="posts">
            <ul className="posts__list">
                {PostsList}
            </ul>
        </div>
    );
}

export default PostCatalog;
