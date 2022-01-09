import axios from "axios";

const BASE_URL = "https://eco-mern-api.herokuapp.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDMyZWQ2YmY5Mzc5YmU4YTM5NDI3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTc2MDkxOSwiZXhwIjoyNTA1NzYwOTE5fQ.oVkcMyK0wKV-HYovtUfxSoBtfb8Y0D68RchV_oGt8o"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});