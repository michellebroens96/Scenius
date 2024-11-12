import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaymentStore = defineStore("paymentStore", () => {
  const amountToBePaid = ref("0,00");
  const paymentMethods = ref("Visa");
  const payments = ref<number[]>([]);

  const addPayment = (amount: number, method: string) => {
    payments.value.push(amount);
  };

  return { amountToBePaid, addPayment };
});
