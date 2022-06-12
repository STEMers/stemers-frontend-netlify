import { useEffect, useState } from 'react';

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
        console.log("json", json);

        const filteredUsers = json
          .filter((user) => user.category !== null)
          .filter((user) => user.country !== null)
          .filter((user) =>
            !selectedCategory ? true : user.category.type.toLowerCase() === selectedCategory
          )
          .filter((user) =>
            !selectedCountry ? true : user.country.name.toLowerCase() === selectedCountry
          );
        console.log("filteredUsers", filteredUsers);

        setData(filteredUsers); // output filtered data 

        setLoading(false);
      } catch (error) {
        alert(error);
        //   setGlobalError(error);  //  ?
        setLoading(false);
      }
    };

    fetchData();
  }, [url, newEvent]);

  return { data, loading };
};

export default useFetch;
