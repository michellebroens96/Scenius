<template>
  <Section>
    <div class="flex items-center justify-center">
      <p class="text-gray-400">Enter the amount</p>
    </div>
    <span class="flex flex-row items-center justify-center gap-1">
      <Icon name="material-symbols:euro" class="text-2xl" />
      <Typography type="heading" size="xxl">{{ input }}</Typography>
    </span>
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-3">
        <div v-for="button in buttons" :key="button.label">
          <NumericButton
            class="text-black"
            :label="button.label"
            :icon="button.icon"
            @click="handleButtonClick(button.label)"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-1/4"
        @click="handlePayment(input)"
      >
        <NuxtLink to="/payment/transaction">
          <span class="flex items-center justify-center gap-1">
            <Icon name="material-symbols:credit-card-outline" />
            <p>Pay now</p>
          </span>
        </NuxtLink>
      </button>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Typography from "@/components/partials/Typography.vue";
import Section from "@/components/layout/Section.vue";

const paymentStore = ref(usePaymentStore());
const input = ref(paymentStore.value.amountToBePaid);

const props = defineProps({
  buttons: {
    type: Array,
    required: false,
  },
});

const buttons = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "", icon: "material-symbols:backspace-outline-rounded" },
  { label: "0" },
  { label: "00" },
];

const handleButtonClick = (label: string) => {
  if (label === "") {
    input.value = input.value.toString().slice(0, -1);
  } else {
    input.value = input.value.toString() + label;
  }
};

const handlePayment = (amount: number) => {
  paymentStore.value.amountToBePaid = amount;
};
</script>
