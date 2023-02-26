import { useStoreState } from "easy-peasy";
import Feed from "../components/Feed";
import Missing from "./Missing";

function HomePage({ loading, errorMsg }) {
  const posts = useStoreState((state) => state.posts);

  return (
    <div>
      {loading && <p>loading ...</p>}
      {!loading && errorMsg && <p>{errorMsg}</p>}
      {posts.length &&
        !loading &&
        !errorMsg &&
        posts.map((post) => {
          return <Feed key={post.id} post={post} />;
        })}

      {!posts.length && <Missing />}
    </div>
  );
}

export default HomePage;
