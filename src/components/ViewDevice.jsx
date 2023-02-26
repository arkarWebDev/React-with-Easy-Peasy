import useResize from "../hooks/useResize";
import { useStoreState } from "easy-peasy";

const ViewDevice = () => {
  const { width } = useResize();
  const postCount = useStoreState((state) => state.postCount);

  return (
    <div className="bg-gray-600 text-white text-sm md:text-lg text-center font-semibold py-2 px-10 rounded-md my-4">
      <p>
        You are viewing form
        {width < 768
          ? " mobile device"
          : width < 992
          ? " tablet device"
          : " desktop device"}
        <span className=" bg-white text-gray-700 ml-2 p-1 rounded-md font-bold ">
          {postCount}
        </span>
      </p>
    </div>
  );
};

export default ViewDevice;
