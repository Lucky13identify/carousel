import axios from "axios";

axios.defaults.baseURL = "https://654574c2fe036a2fa95452e8.mockapi.io";

export const getAllProjects = async () => {
  try {
    const { data } = await axios.get("/projects");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
