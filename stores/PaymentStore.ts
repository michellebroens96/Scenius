import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaymentStore = defineStore("paymentStore", () => {
  const amountToBePaid = ref(0);
  const payments = ref<number[]>([]);

  const setAmountToBePaid = (amount: number) => {
    amountToBePaid.value = amount;
  };

  const addPayment = (amount: number) => {
    payments.value.push(amount);
  };

  return { amountToBePaid, setAmountToBePaid, addPayment };
});
