import { useContext } from "react";
import Feed from "../components/Feed";
import DataContext from "../context/DataContext";

function HomePage() {
  const { posts, loading, errorMsg } = useContext(DataContext);

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
    </div>
  );
}

export default HomePage;
