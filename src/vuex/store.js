import { createStore } from "vuex";
import { getAllProjects, setOneProject } from "./operations";

const storedTheme = localStorage.getItem("isThemeDark");

const store = createStore({
  state() {
    return {
      projects: [],
      oneProject: {},
      isModalOpen: false,
      isThemeDark: JSON.parse(storedTheme),
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
    setOneProject(state, payload) {
      state.oneProject = payload;
    },
    deleteOneProject(state) {
      state.oneProject = {};
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
    async fetchProjectFromServer({ commit }, projectId) {
      try {
        const response = await setOneProject(projectId);
        commit("setOneProject", response);
      } catch (error) {
        console.error("Ошибка при запросе данных с сервера:", error);
      }
    },
  },
});

export default store;
