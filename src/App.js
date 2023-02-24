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
import { Routes, Route } from "react-router-dom";

// context
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <section>
        <div className="flex bg-gray-400 items-center justify-between px-10 py-4 flex-col md:flex-row space-y-6 md:space-y-0">
          <Header title={"React Blog"} />
          <SearchBox />
          <Nav />
        </div>
        <section className="px-2">
          <ViewDevice />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDeatails />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/editPost/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Missing />} />
          </Routes>
        </section>
      </section>
    </DataProvider>
  );
}

export default App;
