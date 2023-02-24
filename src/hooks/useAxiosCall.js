import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosCall = (dataUrl) => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setPostData(response.data);
          setErrorMsg(null);
        }
      } catch (err) {
        if (isMounted) {
          setErrorMsg(err.message);
          setPostData([]);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { postData, errorMsg, loading };
};

export default useAxiosCall;
