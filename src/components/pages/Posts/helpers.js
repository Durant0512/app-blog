import { POSTS_URL } from "config/api";

export const getListPosts = () => {
  const url = `${POSTS_URL}?api_key=d36511ff0d5a5ca2cef317b6389a2038`;
  return fetch(url).then(response => response.json());
};
