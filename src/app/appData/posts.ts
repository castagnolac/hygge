"use client"

//This file contains the model, or local storage of the post objects
//In future version, data will be on MongoDB cluster and not local

import Post
 from "../Types";

let posts: Post[] = [
    { id: "1", title: "Flowers", content: "My partner got me an orchid plant!", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Phalaenopsis_c.v._orchid_%2849367895198%29.jpg" },
    { id: "2", title: "Angry Birds", content: "A classic game from 2016." },
    { id: "3", title: "Yummy Coffee", content: "I had a nice iced coffee today." },
    { id: "4", title: "John Wick", content: "Just rewatched the first movie, it's from 2014!" },
];

//getter method for the array list of all posts
export const getPosts = () => {
    return posts;
};

//add a new post
export const addNewPost = (postData: {title: string, content: string, image?:string}) => {
    const newPost: Post ={
        id: posts.length.toString(),
        ...postData,
    };
    posts.unshift(newPost);
}