<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are {{ invoiceData.length }} total invoices</span>
      </div>
      <div class="right flex">
        <div class="filter flex">
          <span>Filter By status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <!-- Invoices -->
    <div v-if="invoiceData.length > 0">
      <Invoice v-for="(invoice, index) in invoiceData" :key="index" :invoice="invoice" />
    </div>
    <div class="empty flex flex-column" v-else>
      <img src="@/assets/illustration-empty.svg" alt="" />
      <h3>There is nothing here</h3>
      <p>Create a new invoice by clicking the New Invoice button and get started</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Invoice from "../components/Invoice";
export default {
  name: "Home",
  components: {
    Invoice,
  },
  created() {
    console.log(this.invoiceData.length);
  },
  methods: {
    ...mapMutations({
      newInvoice: "TOGGLE_INVOICE",
    }),
  },
  computed: {
    ...mapState({
      invoiceData: "invoiceData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;
    .left,
    .right {
      flex: 1;
    }
    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        margin-right: 40px;
        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }
      }

      .button {
        cursor: pointer;
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>
