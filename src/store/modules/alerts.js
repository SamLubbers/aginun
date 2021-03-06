export default {
  state: {
    alertOn: false,
    alert: {},
  },
  mutations: {
    setAlert(state, alert) {
      state.alert = alert;
      state.alertOn = true;
    },
    disableAlert(state) {
      state.alertOn = false;
    },
  },
  actions: {
    displaySuccess({ commit }, message) {
      commit("setAlert", {
        message: message,
        color: "success",
        icon: "mdi-checkbox-marked-circle-outline",
      });
    },
    displayError({ commit }, message) {
      commit("setAlert", {
        message: message,
        color: "error",
        icon: "mdi-alert",
      });
    },
  },
};
