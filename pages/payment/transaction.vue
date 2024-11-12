<template>
  <Section>
    <div class="flex items-center justify-center">
      <p class="text-gray-400">Present card</p>
    </div>
    <span class="flex flex-row items-center justify-center gap-1">
      <Icon name="material-symbols:euro" class="text-2xl" />
      <Typography type="heading" size="xxl">{{ input }}</Typography>
    </span>
    <!-- TODO:add img -->
    <div class="flex items-center justify-center gap-2">
      <button class="hover:bg-gray-300 rounded p-1">
        <Icon class="w-14 h-14" name="logos:visaelectron" />
      </button>
      <button class="hover:bg-gray-300 rounded p-1">
        <Icon class="w-14 h-14" name="logos:mastercard" />
      </button>
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
const paymentStore = ref(usePaymentStore());
const input = ref(paymentStore.value.amountToBePaid);
</script>
