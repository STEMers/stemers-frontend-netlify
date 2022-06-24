export const localhostUrl = "http://localhost:3000/api";
export const herokuUrl = "https://stemers-backend-heroku.herokuapp.com/api";
export const baseUrl = herokuUrl;
// export const baseUrl = localhostUrl;

export const localhostImgUrl = "http://localhost:1337";
export const herokuImgUrl = "https://stemers-backend-heroku.herokuapp.com";
// export const imgUrl = localhostImgUrl;
export const imgUrl = herokuImgUrl; // 404 not found

/* 
ref:
 "url": "/uploads/thumbnail_image_1_1_5a916903c0.png",  
 "url": "/uploads/image_1_1_5a916903c0.png",
 http://localhost:1337/uploads/image_1_1_5a916903c0.png  // localhost,works
 https://stemers-backend-heroku.herokuapp.com/uploads/image_1_1_5a916903c0.png   // 404:NotFoundError

*/
