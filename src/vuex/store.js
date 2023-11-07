import { createStore } from "vuex";
import { getAllProjects } from "./operations";
// import axios from "axios";

const store = createStore({
  state() {
    return {
      projects: [],
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
    setServerData(state, payload) {
      state.projects = payload;
    },
  },
  actions: {
    fetchDataFromServer({ commit }) {
      // Ваш запрос на сервер может выглядеть так
      // Здесь предполагается использование библиотеки Axios для выполнения запроса
      getAllProjects()
        .then((response) => {
          // После успешного ответа от сервера вызываем мутацию для обновления данных
          commit("setServerData", response);
        })
        .catch((error) => {
          console.error("Ошибка при запросе данных с сервера:", error);
        });
    },
  },
});

export default store;
