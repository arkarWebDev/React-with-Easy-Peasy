import { createContext, useState, useEffect } from "react";

// custom hooks
import useAxiosCall from "../hooks/useAxiosCall";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const { postData, errorMsg, loading } = useAxiosCall(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(postData);
  }, [postData]);

  useEffect(() => {
    getSearchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

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
    <DataContext.Provider
      value={{
        searchKey,
        setSearchKey,
        getSearchPost,
        posts,
        loading,
        setPosts,
        errorMsg,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
