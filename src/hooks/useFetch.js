import { useEffect, useState } from 'react';

/* useFetch version 2: out put raw json data, reuseable, official way */
const useFetch = (url, newEvent) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(encodeURI(url));
        if (!response.ok) {
          const errorJson = await response.json();
          const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl: ${url}`;
          throw new Error(message);
        }

        const json = await response.json();
        console.log("json", json);

        setData(json); 

        setLoading(false);
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, newEvent]);

  return { data, loading };
};
export default useFetch;

/* cancelled useFetch->useFetch version 1: out put filtered data, limited use case */

// const useFetch = (url, selectedCategory, selectedCountry, newEvent) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       try {
//         const response = await fetch(encodeURI(url));
//         if (!response.ok) {
//           const errorJson = await response.json();
//           const message = `\nStatus: ${response.status} \nStatus Text: ${response.statusText} \nMessage:${errorJson.error.message} \nurl-> ${url}`;
//           throw new Error(message);
//         }

//         const json = await response.json();
//         console.log("json", json);

//         const filteredUsers = json
//           .filter((user) => user.category !== null)
//           .filter((user) => user.country !== null)
//           .filter((user) =>
//             !selectedCategory ? true : user.category.type.toLowerCase() === selectedCategory
//           )
//           .filter((user) =>
//             !selectedCountry ? true : user.country.name.toLowerCase() === selectedCountry
//           );
//         console.log("filteredUsers", filteredUsers);

//         setData(filteredUsers); // output filtered data 

//         setLoading(false);
//       } catch (error) {
//         alert(error);
//         //   setGlobalError(error);  //  ?
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, newEvent]);

//   return { data, loading };
// };

// export default useFetch;
