import axios from "axios";

const BASE_URL = "https://randomuser.me/api/";

const getUser = async (...b) => {
  console.log("HOLA", b);
  try {
    const res = await axios.get(`${BASE_URL}`);
    const route = res.data;
    return route;
  } catch (e) {
    console.error(e);
  }
};

export const userService = { getUser };
