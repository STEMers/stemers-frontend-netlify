import swal from "sweetalert";

 export async function updateProfile(url,body) {

 try {

     const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("jwt-token")}`,
      },
      body: JSON.stringify(body),
    })
     if (!response.ok){
         swal("Ooops! something is not right","Try to select country and STEM category","error");
         console.log("Error data sent ",await response.json());
         throw new Error("error occured");
     }
  const postResponse = await response.json();
  swal("Success","Profile Updated","success");
  console.log("data submitted to server",postResponse);
    return postResponse;
 } catch (error) {
    
 }
    
}