import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaymentStore = defineStore("paymentStore", () => {
  const amountToBePaid = ref("0,00");
  const paymentMethod = ref("Visa");
  const payments = ref<{ amount: number; method: string; date: Date }[]>([]);

  const addPayment = (amount: number, method: string) => {
    let date = new Date();
    payments.value.push({ amount, method, date });
    console.log("new payment", payments.value);
  };

  return { amountToBePaid, paymentMethod, payments, addPayment };
});
