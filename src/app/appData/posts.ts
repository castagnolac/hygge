"use client"

//This file contains the model, or local storage of the post objects
//In future version, data will be on MongoDB cluster and not local

import Post
    from "../Types";

let posts: Post[] = [];

//getter method for the array list of all posts
export const getPosts = () => {
    return posts;
};

//add a new post
export const addNewPost = (postData: { title: string, content: string, image?: string }) => {
    const newPost: Post = {
        id: posts.length.toString(),
        ...postData,
    };
    posts.unshift(newPost);
}
