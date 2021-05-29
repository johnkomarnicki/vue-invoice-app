<template>
  <div class="app" v-if="invoicesLoaded">
    <Navigation />
    <div class="app-content flex flex-column">
      <NewInvoice v-if="newInvoice" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navigation from "./components/Navigation";
import NewInvoice from "./components/NewInvoice";
export default {
  name: "App",
  components: {
    Navigation,
    NewInvoice,
  },
  data() {
    return {};
  },
  created() {
    this.getInvoiceData();
  },
  methods: {
    ...mapActions({
      getInvoiceData: "GET_INVOICES",
    }),
  },
  computed: {
    ...mapState({
      newInvoice: "newInvoice",
      invoicesLoaded: "invoicesLoaded",
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: #141625;
  display: flex;
  min-height: 100vh;

  .app-content {
    flex: 1;
    position: relative;
  }
}

// button styling

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding-top: 72px;
  max-width: 850px;
  margin: 0 auto;
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}

.paid {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}

.draft {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
