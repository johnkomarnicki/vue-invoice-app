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
            paid: currentInvoice[0].invoicePaid,
            draft: currentInvoice[0].invoiceDraft,
            pending: currentInvoice[0].invoicePending,
          }"
        >
          <span v-if="currentInvoice[0].invoicePaid">Paid</span>
          <span v-if="currentInvoice[0].invoiceDraft">Draft</span>
          <span v-if="currentInvoice[0].invoicePending">Pending</span>
        </div>
      </div>
      <div class="right flex">
        <button class="dark-purple">Edit</button>
        <button class="red">Delete</button>
        <button class="purple">Mark as Paid</button>
      </div>
    </div>
    <div class="invoice-details flex flex-column">
      <div class="top flex">
        <div class="left flex flex-column">
          <p><span>#</span>xm9141</p>
          <p>Graphic Design</p>
        </div>
        <div class="right flex flex-column">
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </div>
      </div>
      <div class="middle flex">
        <div class="payment flex flex-column">
          <h4>Invoice Date</h4>
          <p>Aug 21 2021</p>
          <h4>Payment Date</h4>
          <p>Sep 21 2021</p>
        </div>
        <div class="bill flex flex-column">
          <h4>Bill To</h4>
          <p>Alex Grim</p>
          <p>84 Church Way</p>
          <p>Bradford</p>
          <p>BDI 9PB</p>
          <p>United Kingdom</p>
        </div>
        <div class="send-to flex flex-column">
          <h4>Sent To</h4>
          <p>alexgrim@mail.com</p>
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
          <div class="item flex">
            <p>Banner Design</p>
            <p>1</p>
            <p>200.00</p>
            <p>200.00</p>
          </div>
        </div>
        <div class="total flex">
          <p>Amount Due</p>
          <p>556.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Invoice",
  async created() {
    console.log("hello");
    this.currentInvoice = await this.invoiceData.filter((invoice) => {
      return invoice.invoiceId === this.$route.params.invoiceId;
    });
  },
  data() {
    return {
      currentInvoiceArray: null,
      currentInvoice: null,
    };
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
