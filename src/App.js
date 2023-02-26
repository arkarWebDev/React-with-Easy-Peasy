// pages
import {
  Home,
  CreatePost,
  EditPost,
  Missing,
  PostDeatails,
  About,
} from "./pages/index";

// components
import { SearchBox, Nav, Header, ViewDevice } from "./components/index";

// react
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// axios
import useAxiosCall from "./hooks/useAxiosCall";

// easy-peasy
import { useStoreActions, useStoreState } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const searchKey = useStoreState((state) => state.searchKey);
  const posts = useStoreState((state) => state.posts);
  const setSearchKey = useStoreActions((actions) => actions.setSearchKey);

  const { postData, errorMsg, loading } = useAxiosCall(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(postData);
  }, [postData, setPosts]);

  useEffect(() => {
    getSearchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey, setSearchKey]);

  const getSearchPost = (e = null) => {
    e != null && e.preventDefault();
    const searchedPostsData = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(searchKey.toLowerCase()) ||
        post.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    if (!searchedPostsData.length || searchKey === "")
      setPosts(posts.reverse());
    else setPosts(searchedPostsData.reverse());
  };

  return (
    <section>
      <div className="flex bg-gray-400 items-center justify-between px-10 py-4 flex-col md:flex-row space-y-6 md:space-y-0">
        <Header title={"React Blog"} />
        <SearchBox
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          getSearchPost={getSearchPost}
        />
        <Nav />
      </div>
      <section className="px-2">
        <ViewDevice />
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} errorMsg={errorMsg} />}
          />
          <Route path="/post/:id" element={<PostDeatails />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/editPost/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
      </section>
    </section>
  );
}

export default App;
