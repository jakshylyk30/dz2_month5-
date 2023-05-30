import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('')
    const create = () => {

        if (input){
            const post = {
                title: input,
                body: input,
                userId: 1,
                id: 1
            }

            const res = axios.post('https://dummyjson.com/posts/add', post)
            setPosts(prev => [...prev, post])
            setInput('')
        }
    }


    const getPosts = () => {
        return axios.get('https://dummyjson.com/posts')
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.log(error);
            });

    }

    const deletePost = (id) => {
        const firm = window.confirm('Delete')
        if (firm){
            axios.delete(`https://dummyjson.com/posts/${id}`)
                .then(res => {
                    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
                })
        }
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div>
            <div>
                <h2>Create Posts</h2>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={create}>click</button>
            </div>
            <h1>Список постов</h1>
            <div className='posts'>
                {posts.map(post => (
                    <div style={{display: "flex", columnGap: 20}} key={post?.id}>
                        <button onClick={() => deletePost(post?.id)}>delete</button>
                        <Link to={`/about/${post?.id}`}>
                            <h2>{post?.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;