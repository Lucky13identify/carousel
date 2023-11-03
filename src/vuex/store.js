import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isModalOpen: false,
      isThemeDark: false,
      isLanguageEng: false,
    };
  },
  mutations: {
    openModal(state, payload) {
      state.isModalOpen = payload;
    },
    changeTheme(state, payload) {
      state.isThemeDark = payload;
    },
    changeLanguage(state, payload) {
      state.isLanguageEng = payload;
    },
  },
});

export default store;
