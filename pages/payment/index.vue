<template>
  <Section>
    <div class="flex items-center justify-center">
      <p class="text-gray-400">Present card</p>
    </div>
    <span class="flex flex-row items-center justify-center gap-1">
      <Icon name="material-symbols:euro" class="text-2xl" />
      <Typography type="heading" size="xxl">{{ input }}</Typography>
    </span>
    <div class="flex items-center justify-center">
      <Icon class="text-[240px]" name="simple-icons:contactlesspayment" />
    </div>
    <div class="flex items-center justify-center gap-2">
      <NuxtLink to="/payment/completed">
        <button
          class="hover:bg-gray-300 rounded p-1"
          @click="setPaymentMethod('Visa')"
        >
          <Icon class="w-14 h-14" name="logos:visaelectron" />
        </button>
      </NuxtLink>
      <NuxtLink to="/payment/completed">
        <button
          class="hover:bg-gray-300 rounded p-1"
          @click="setPaymentMethod('MasterCard')"
        >
          <Icon class="w-14 h-14" name="logos:mastercard" />
        </button>
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded mt-4 w-1/4"
      >
        <NuxtLink to="/payment">
          <p>Annuleren</p>
        </NuxtLink>
      </button>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { usePaymentStore } from "@/stores/paymentStore"; // Ensure this is correct
import { ref } from "vue";

const paymentStore = usePaymentStore();
const input = ref(paymentStore.amountToBePaid);

const setPaymentMethod = (method: string) => {
  paymentStore.paymentMethod = method;
  const amount = parseFloat(input.value.replace(",", "."));
  paymentStore.addPayment(amount, method);
};
</script>
