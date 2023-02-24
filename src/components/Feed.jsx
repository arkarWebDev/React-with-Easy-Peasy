import Post from "./Post";

function Feed({ post }) {
  return (
    <div>
      {post && <Post post={post} key={post.id} />}
      {!post && <div>Something went wrong !</div>}
    </div>
  );
}

export default Feed;
