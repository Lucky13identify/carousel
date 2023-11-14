import axios from "axios";

axios.defaults.baseURL = "https://654574c2fe036a2fa95452e8.mockapi.io";

export const getAllProjects = async () => {
  try {
    const { data } = await axios.get("/projects");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setOneProject = async (id) => {
  try {
    const { data } = await axios.get(`/projects/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
