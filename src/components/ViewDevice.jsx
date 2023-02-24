import useResize from "../hooks/useResize";

const ViewDevice = () => {
  const { width } = useResize();

  return (
    <div className="bg-gray-600 text-white text-sm md:text-lg text-center font-semibold py-2 px-10 rounded-md my-4">
      <p>
        You are viewing form
        {width < 768
          ? " mobile device"
          : width < 992
          ? " tablet device"
          : " desktop device"}
      </p>
    </div>
  );
};

export default ViewDevice;
