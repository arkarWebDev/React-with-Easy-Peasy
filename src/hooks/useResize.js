import { useState, useEffect } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const getWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getWindowSize();

    window.addEventListener("resize", getWindowSize);

    //? const cleanUp = () => {
    //?   window.removeEventListener("resize", getWindowSize);
    //? };

    //? return cleanUp;

    //! OR

    //* like this 🔽🔽

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return windowSize;
};

export default useWindowResize;
