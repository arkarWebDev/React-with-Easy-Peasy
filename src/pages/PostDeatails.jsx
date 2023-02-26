import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import Missing from "./Missing";

const PostDeatailsPage = () => {
  const getBostByID = useStoreState((state) => state.getBostByID);
  const postDelete = useStoreActions((actions) => actions.deletePost);
  const { id } = useParams();
  const post = getBostByID(id);
  const navigate = useNavigate();

  const deletePost = async (id) => {
    postDelete(id);
    navigate("/");
  };

  return (
    <>
      {post && (
        <div className="w-full md:w-1/2 md:mx-auto my-4 bg-gray-300 p-3 rounded-lg">
          <div className="flex items-center justify-between border-b border-gray-500 pb-4 mb-4">
            <p className="font-medium text-xl ">
              Publish at : {post.publish_at}
            </p>
            <Link to={"/"}>
              <BiArrowBack className="text-2xl" />
            </Link>
          </div>
          <p className="font-bold text-2xl mb-1 font-serif">{post.title}</p>
          <p className="italic text-lg">{post.body}</p>

          <button
            className="w-full bg-red-600 text-white text-lg font-bold rounded my-2 py-2"
            onClick={() => deletePost(id)}
          >
            Delete Post
          </button>
          <Link to={`/editPost/${post.id}`}>
            <button className="w-full bg-purple-600 text-white text-lg font-bold rounded my-2 py-2">
              Edit Post
            </button>
          </Link>
        </div>
      )}

      {!post && <Missing />}
    </>
  );
};

export default PostDeatailsPage;
