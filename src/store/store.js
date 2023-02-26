import { createStore, thunk, action, computed } from "easy-peasy";
import apiCall from "../api/apiCall";

export default createStore({
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  searchKey: "",
  setSearchKey: action((state, payload) => {
    state.searchKey = payload;
  }),
  title: "",
  setTitle: action((state, payload) => {
    state.title = payload;
  }),
  body: [],
  setBody: action((state, payload) => {
    state.body = payload;
  }),
  editTitle: [],
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),
  editBody: [],
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),
  postCount: computed((state) => state.posts.length),
  getBostByID: computed((state) => {
    return (id) => state.posts.find((post) => post.id.toString() === id);
  }),
  postCreate: thunk(async (actions, newPost, helpers) => {
    const { posts } = helpers.getState();
    try {
      const response = await apiCall.post("posts", newPost);
      actions.setPosts([...posts, response.data].reverse());
      actions.setTitle("");
      actions.setBody("");
    } catch (error) {
      console.log(error.message);
    }
  }),
  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    try {
      await apiCall.delete(`posts/${id}`);
      actions.setPosts(posts.filter((post) => post.id.toString() !== id));
    } catch (error) {
      console.log(error.message);
    }
  }),
  postEdit: thunk(async (actions, editPost, helpers) => {
    const { posts } = helpers.getState();
    const { id } = editPost;

    try {
      const response = await apiCall.patch(`posts/${id}`, editPost);
      actions.setPosts(
        posts.map((post) =>
          post.id.toString() === id ? { ...response.data } : post
        )
      );
      actions.setEditTitle("");
      actions.setEditBody("");
    } catch (error) {
      console.log(error.message);
    }
  }),
});
