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
      state.invoicesLoaded = true;
    },
    DELETE_INVOICE(state, payload) {
      state.invoiceData = state.invoiceData.filter((invoice) => invoice.invoiceId !== payload);
    },
    UPDATE_STATUS_TO_PAID(state, payload) {
      state.invoiceData = state.invoiceData.find((invoice) => {
        if (invoice.invoiceId === payload) {
          invoice.invoicePaid = true;
          invoice.invoicePending = false;
        }
      });
    },
  },
  actions: {
    async GET_INVOICES({ commit, state }) {
      const getData = db.collection("invoices");
      const results = await getData.get();
      results.forEach((doc) => {
        if (!state.invoiceData.some((invoice) => invoice.docId === doc.id)) {
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientCity,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoicePaid: doc.data().invoicePaid,
          };
          commit("SET_INVOICE_DATA", data);
        }
      });
      commit("INVOICES_LOADED");
    },
    async DELETE_INVOICE({ commit }, { docId, invoiceId }) {
      const getInvoice = db.collection("invoices").doc(docId);
      await getInvoice.delete();
      commit("DELETE_INVOICE", invoiceId);
    },
    async UPDATE_STATUS_TO_PAID({ commit }, { docId, invoiceId }) {
      const getInvoice = db.collection("invoices").doc(docId);
      await getInvoice.update({
        invoicePaid: true,
        invoicePending: false,
      });
      commit("UPDATE_STATUS_TO_PAID", invoiceId);
    },
  },
  modules: {},
});
