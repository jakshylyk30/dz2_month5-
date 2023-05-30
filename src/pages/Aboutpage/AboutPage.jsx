import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const AboutPage = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const navi = useNavigate()
    const back = () => navi(-1)

    const getPost = () => {
        return axios.get(`https://dummyjson.com/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getPost()
    }, []);
    return (
        <div>
            <button onClick={back}>back</button>
            <h2>{post?.id}</h2>
            <h2>{post?.title}</h2>
            <h2>{post?.body}</h2>
        </div>
    );
};

export default AboutPage;