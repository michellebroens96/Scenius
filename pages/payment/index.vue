<template>
  <div>
    <p class="text-gray-400">Enter amount</p>
  </div>
  <div><Icon name="material-symbols:euro" /> {{ input }}</div>
  <div class="flex col-span-3" v-for="button in buttons" :key="button.label">
    <NumericButton
      class="text-black"
      :label="button.label.toString()"
      :icon="button.icon"
      @click="handleButtonClick(button.label)"
    />
  </div>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
  >
    <NuxtLink to="/payment/transaction">
      <span class="flex items-center justify-center gap-1">
        <Icon name="material-symbols:credit-card-outline" />
        <p>Pay now</p>
      </span>
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
});

const input = ref("0");
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
  { label: "0" },
  { label: ",00" },
  { label: "Delete", icon: "material-symbols:delete-outline" },
];

const handleButtonClick = (label: string) => {
  console.log(label);
  if (label === "Delete") {
    input.value = input.value.toString().slice(0, -1);
  } else {
    input.value = input.value.toString() + label;
  }
};
</script>
