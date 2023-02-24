import { useContext, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import apiCall from "../api/apiCall";

import DataContext from "../context/DataContext";

const CreatePost = () => {
  const { posts, setPosts } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const postCreate = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    try {
      const publish_at = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = { id, title, body, publish_at };
      const response = await apiCall.post("posts", newPost);
      const newPostsData = [...posts, response.data];
      setPosts(newPostsData.reverse());
      setTitle("");
      setBody("");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mx-auto border-4 border-gray-600 p-2 my-10 rounded-lg md:w-1/2">
      <p className="text-2xl font-bold text-center my-4">
        Create a anonymous post
      </p>
      <form onSubmit={(e) => postCreate(e)}>
        <div className="mb-4">
          <label htmlFor="title" className="text-lg font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="block border border-gray-400 text-lg pl-2 w-full py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <hr />
        <div className="mb-4">
          <label htmlFor="description" className="text-lg font-semibold">
            Description
          </label>
          <textarea
            rows={5}
            id="description"
            className="block border border-gray-400 text-lg pl-2 w-full py-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="bg-gray-600 mb-2 w-full py-2 text-xl font-bold
        text-white"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
