import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import apiCall from "../api/apiCall";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function EditPost() {
  const { posts, setPosts } = useContext(DataContext);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const targetPost = posts.find((post) => post.id.toString() === id);

  const postEdit = async (id) => {
    const publish_at = format(new Date(), "MMMM dd, yyyy pp");
    const editPost = { id, title: editTitle, body: editBody, publish_at };

    try {
      const response = await apiCall.patch(`posts/${id}`, editPost);
      setPosts(
        posts.map((post) =>
          post.id.toString() === id ? { ...response.data } : post
        )
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (targetPost) {
      setEditTitle(targetPost.title);
      setEditBody(targetPost.body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <div className="mx-auto border-4 border-gray-600 p-2 my-10 rounded-lg md:w-1/2">
      <p className="text-2xl font-bold text-center my-4">Post in edit mode</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="title" className="text-lg font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="block border border-gray-400 text-lg pl-2 w-full py-2"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
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
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
        </div>
        <button
          className="bg-gray-600 mb-2 w-full py-2 text-xl font-bold
        text-white"
          onClick={() => postEdit(id)}
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default EditPost;
