<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <router-link class="nav-link flex" :to="{ name: 'Home' }">
      <img src="@/assets/icon-arrow-left.svg" alt="" /> Go Back</router-link
    >
    <div class="header flex">
      <div class="left flex">
        <span>Status</span>
        <div
          class="status-button flex"
          :class="{
            paid: currentInvoice.invoicePaid,
            draft: currentInvoice.invoiceDraft,
            pending: currentInvoice.invoicePending,
          }"
        >
          <span v-if="currentInvoice.invoicePaid">Paid</span>
          <span v-if="currentInvoice.invoiceDraft">Draft</span>
          <span v-if="currentInvoice.invoicePending">Pending</span>
        </div>
      </div>
      <div class="right flex">
        <button class="dark-purple">Edit</button>
        <button @click="deleteInvoice(currentInvoice.docId, currentInvoice.invoiceId)" class="red">Delete</button>
        <button @click="updateStatusToPaid(currentInvoice.docId, currentInvoice.invoiceId)" class="purple">
          Mark as Paid
        </button>
      </div>
    </div>
    <div class="invoice-details flex flex-column">
      <div class="top flex">
        <div class="left flex flex-column">
          <p><span>#</span>{{ currentInvoice.invoiceId }}</p>
          <p>{{ currentInvoice.productDescription }}</p>
        </div>
        <div class="right flex flex-column">
          <p>{{ currentInvoice.billerStreetAddress }}</p>
          <p>{{ currentInvoice.billerCity }}</p>
          <p>{{ currentInvoice.billerZipCode }}</p>
          <p>{{ currentInvoice.billerCountry }}</p>
        </div>
      </div>
      <div class="middle flex">
        <div class="payment flex flex-column">
          <h4>Invoice Date</h4>
          <p>
            {{
              new Date(currentInvoice.invoiceDateUnix).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </p>
          <h4>Payment Date</h4>
          <p>
            {{
              new Date(currentInvoice.paymentDueDateUnix).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </p>
        </div>
        <div class="bill flex flex-column">
          <h4>Bill To</h4>
          <p>{{ currentInvoice.clientName }}</p>
          <p>{{ currentInvoice.clientStreetAddress }}</p>
          <p>{{ currentInvoice.clientCity }}</p>
          <p>{{ currentInvoice.clientZipCode }}</p>
          <p>{{ currentInvoice.clientCountry }}</p>
        </div>
        <div class="send-to flex flex-column">
          <h4>Sent To</h4>
          <p>{{ currentInvoice.clientEmail }}</p>
        </div>
      </div>
      <div class="bottom flex flex-column">
        <div class="billing-items">
          <div class="headings flex">
            <p>Item Name</p>
            <p>QTY.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <div v-for="(item, index) in currentInvoice.invoiceItemList" :key="index" class="item flex">
            <p>{{ item.itemName }}</p>
            <p>{{ item.qty }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.total }}</p>
          </div>
        </div>
        <div class="total flex">
          <p>Amount Due</p>
          <p>{{ currentInvoice.invoiceTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Invoice",
  async created() {
    this.currentInvoiceArray = await this.invoiceData.filter((invoice) => {
      return invoice.invoiceId === this.$route.params.invoiceId;
    });
    this.currentInvoice = this.currentInvoiceArray[0];
  },
  data() {
    return {
      currentInvoiceArray: null,
      currentInvoice: null,
    };
  },
  methods: {
    ...mapActions(["DELETE_INVOICE", "UPDATE_STATUS_TO_PAID"]),
    async deleteInvoice(docId, invoiceId) {
      const data = {
        docId,
        invoiceId,
      };
      await this.DELETE_INVOICE(data);
      this.$router.push({ name: "Home" });
    },
    async updateStatusToPaid(docId, invoiceId) {
      const data = {
        docId,
        invoiceId,
      };
      await this.UPDATE_STATUS_TO_PAID(data);
    },
  },
  computed: {
    ...mapState({
      invoiceData: "invoiceData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.invoice-view {
  .nav-link {
    margin-bottom: 32px;
    align-items: center;
    color: #fff;
    font-size: 12px;
    img {
      margin-right: 16px;
      width: 7px;
      height: 10px;
    }
  }

  .header,
  .invoice-details {
    background-color: #1e2139;
    border-radius: 20px;
  }

  .header {
    align-items: center;
    padding: 24px 32px;
    font-size: 12px;

    .left {
      align-items: center;

      span {
        color: #dfe3fa;
        margin-right: 16px;
      }
    }

    .right {
      flex: 1;
      justify-content: flex-end;

      button {
        color: #fff;
      }
    }
  }

  .invoice-details {
    padding: 48px;
    margin-top: 24px;

    .top {
      div {
        color: #dfe3fa;
        flex: 1;
      }

      .left {
        font-size: 12px;
        p:first-child {
          font-size: 16px;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 8px;
        }
        span {
          color: #888eb0;
        }
      }

      .right {
        font-size: 11px;
        align-items: flex-end;
      }
    }

    .middle {
      margin-top: 50px;
      color: #dfe3fa;

      h4 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 12px;
      }

      p {
        font-size: 15px;
      }

      .payment,
      .bill {
        flex: 1;
      }

      .payment {
        h4:nth-child(3) {
          margin-top: 32px;
        }
      }

      .bill {
        p:nth-child(2) {
          font-size: 15px;
        }
        p:nth-child(3) {
          margin-top: auto;
        }
        p {
          font-size: 11px;
        }
      }

      .send-to {
        flex: 2;
      }
    }

    .bottom {
      margin-top: 50px;

      .billing-items {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: #252945;

        .headings {
          color: #dfe3fa;
          font-size: 12px;
          margin-bottom: 32px;

          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }

        .item {
          margin-bottom: 32px;
          font-size: 13px;
          color: #fff;
          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }
      }

      .total {
        color: #fff;
        padding: 32px;
        background-color: rgba(12, 14, 22, 0.7);
        align-items: center;
        border-radius: 0 0 20px 20px;

        p {
          flex: 1;
          font-size: 12px;
        }

        p:nth-child(2) {
          font-size: 28px;
          text-align: right;
        }
      }
    }
  }
}
</style>
