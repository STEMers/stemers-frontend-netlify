import { useEffect, useState } from 'react';

const useFetchUser = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(encodeURI(url));
        if (!response.ok) {
          const errorJson = await response.json();
          const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${url}`;
          throw new Error(message);
        }

        const json = await response.json();
        console.log("json", json);
        setData(json);

        setLoading(false);
      } catch (error) {
        alert(error);
        //   setGlobalError(error);  //  ?
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetchUser;
