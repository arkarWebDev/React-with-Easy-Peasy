import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="w-full md:w-1/2 md:mx-auto my-4 bg-gray-300 p-3 rounded-lg">
      <p className="text-2xl font-semibold my-2">{post.title}</p>
      <p className="text-lg font-medium">{post.body.slice(0, 100)}</p>
      <div className="flex items-end justify-between mt-1">
        <p className="italic text-sm">
          Publish at : <br />
          {post.publish_at}
        </p>
        <p className="underline font-medium cursor-pointer">
          <Link to={`/post/${post.id}`}>See More</Link>
        </p>
      </div>
    </div>
  );
}

export default Post;
