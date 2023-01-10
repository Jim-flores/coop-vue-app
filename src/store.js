import { createStore } from "vuex";
import router from "./router/index.js";

const store = createStore({
  state: {
    email: null,
    password: null,
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
    guardarToken({ commit }, token) {
      commit("setToken", token);
      localStorage.setItem("token", token);
    },

    autoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
      }
      router.push({ name: "Home" });
    },
    salir({ commit }) {
      commit("setToken", null);
      commit("setUsuario", null);
      localStorage.removeItem("token");
      router.push({ name: "Login" });
    },
  },
});
export default store;
