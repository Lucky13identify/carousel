import { createStore } from "vuex";
import { getImages } from "./operations";

const store = createStore({
  state() {
    return {
      images: [],
      selectedImages: [],
    };
  },
  mutations: {
    getImagesInStore(state, payload) {
      state.images = payload;
    },
    addToSelectedImages(state, payload) {
      state.selectedImages.push(payload);
    },
    removeFromSelectedImages(state, payload) {
      const index = state.selectedImages.findIndex(
        (selectedImage) => selectedImage.id === payload.id
      );

      if (index !== -1) {
        state.selectedImages.splice(index, 1);
      }
    },
  },
  actions: {
    fetchData({ commit }) {
      getImages()
        .then((response) => {
          commit("getImagesInStore", response);
        })
        .catch((error) => {
          console.error("Ошибка при запросе данных с сервера:", error);
        });
    },
  },
});

export default store;
