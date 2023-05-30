import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const create = () => {

        const post = {
            title: input,
            body: input,
            userId: 1
        }

        const res = axios.post('https://dummyjson.com/posts/add', post)
        console.log(res)
        navigate('/', {state: post})
    }

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={create}>click</button>
            </div>
        </div>
    );
};

export default CreatePost;