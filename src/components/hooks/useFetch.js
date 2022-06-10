import { useEffect, useState } from "react";

const useFetch = (url, selectedCategory, selectedCountry, newEvent) => {
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
        // console.log("json", json);
        // console.log("json 1 country name", json[1].country.name);

        // const filteredUsers = await json.filter(
        //   (user, index) =>
        //     user.category.type === selectedCategory &&
        //     user.country.name === selectedCountry
        // );

        // console.log("filteredUsers", filteredUsers);

        // setData(filteredUsers);  // way1: output filtered data // not work
        setData(json); // way2: output raw data // works

        setLoading(false);
      } catch (error) {
        alert(error);
        //   setGlobalError(error);  //  ?
        setLoading(false);
      }
    };

    fetchData();
  }, [url, selectedCategory, selectedCountry, newEvent]);

  return { data, loading };
};

export default useFetch;
