import React from "react";
import styles from "./styles.module.scss";

const getListPosts = () => {
  const url =
    "http://blog.api.axenov-it.com/v1/posts?api_key=d36511ff0d5a5ca2cef317b6389a2038";
  return fetch(url).then(response => response.json());
};

const ListPosts = () => {
  getListPosts();
  return <h1>Hello list posts</h1>;
};

export default ListPosts;
