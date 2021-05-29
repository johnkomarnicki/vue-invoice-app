import { createStore } from "vuex";
import db from "../firebase/firebaseInit";

export default createStore({
  state: {
    invoiceData: [],
    invoicesLoaded: null,
    newInvoice: false,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.newInvoice = !state.newInvoice;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state) {
      state.invoiceData = true;
      console.log(state.invoiceData);
    },
  },
  actions: {
    async GET_INVOICES({ commit }) {
      console.log("working");
      const getData = db.collection("invoices");
      const results = await getData.get();
      results.forEach((doc) => {
        commit("SET_INVOICE_DATA", doc.data());
      });
      commit("INVOICES_LOADED");
    },
  },
  modules: {},
});
