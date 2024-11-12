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
      <Icon class="text-[240px] text-green-500" name="stash:check-circle" />
    </div>
    <div class="flex items-center justify-center">
      <button
        class="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded mt-4 w-1/4"
      >
        <NuxtLink to="/history">
          <p>To History</p>
        </NuxtLink>
      </button>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-1/4"
      >
        <NuxtLink to="/">
          <p>Start new</p>
        </NuxtLink>
      </button>
    </div>
  </Section>
</template>
<script setup lang="ts">
const paymentStore = ref(usePaymentStore());
const input = ref(paymentStore.value.amountToBePaid);
</script>
