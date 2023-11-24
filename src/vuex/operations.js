import axios from "axios";

axios.defaults.baseURL = "https://picsum.photos/v2/list";

export const getImages = async () => {
  try {
    const { data } = await axios.get();
    return data;
  } catch (error) {
    return error;
  }
};
