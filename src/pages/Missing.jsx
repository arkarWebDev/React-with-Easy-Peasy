import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <center className="flex items-center justify-center h-80 w-full">
      <div>
        <BsFillPatchQuestionFill className="text-gray-600 text-4xl mt-4" />
        <p className="text-3xl font-bold text-gray-500 my-3">Page Not Found</p>
        <Link to={"/"}>
          <button className="bg-gray-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Go Back Home
          </button>
        </Link>
      </div>
    </center>
  );
};

export default Missing;
