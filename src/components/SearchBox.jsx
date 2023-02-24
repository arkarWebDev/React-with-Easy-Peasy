import { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import DataContext from "../context/DataContext";

function SearchBox() {
  const { searchKey, setSearchKey, getSearchPost } = useContext(DataContext);
  return (
    <div>
      <form onSubmit={(e) => getSearchPost(e)}>
        <div className=" relative">
          <input
            type="text"
            placeholder="searh posts..."
            className=" bg-transparent w-80 border-2 border-white py-2 px-4 focus:outline-none rounded-full text-white text-xl font-semibold"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button>
            <RiSearchLine className="text-2xl text-white absolute right-5 top-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
