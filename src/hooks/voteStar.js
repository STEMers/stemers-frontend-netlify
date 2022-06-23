 export async function voteStar(url,voter,candidate) {
  const body = {
    "data":{
      "voter_id":voter,
      "candidate_id":candidate,
      user_who_give_vote :{
        id:voter
      },
      user_who_receive_vote :{
        id:candidate
      }
    }
  };
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
         'Content-Type': 'application/json',
      Authorization:`bearer ${localStorage.getItem("jwt-token")}`,
    },
    body: JSON.stringify(body) 
  });
  const data = await response.json();
  console.log(data);
    return data;
}