import axios from "axios";

axios.defaults.baseURL = "https://picsum.photos/v2/list";

export const getImages = async () => {
  try {
    const { data } = await axios.get();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const setOneProject = async (id) => {
//   try {
//     const { data } = await axios.get(`/projects/${id}`);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
