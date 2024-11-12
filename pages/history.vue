<template>
  <Section>
    <div v-for="entry in history">
      <div v-if="entry.method === 'Visa'">
        <div class="flex flex-row items-center justify-between">
          <Icon class="w-14 h-14" name="logos:visaelectron" />
          <div class="flex flex-col">
            <p class="font-bold">€ {{ entry.amount }}</p>
            <p>{{ entry.date }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-row items-center justify-between">
          <Icon class="w-14 h-14" name="logos:mastercard" />
          <div class="flex flex-col">
            <p class="font-bold">€ {{ entry.amount }}</p>
            <p>{{ entry.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
import Section from "@/components/layout/Section.vue";

const paymentStore = usePaymentStore();
const history = ref(paymentStore.payments);

console.log(history.value);
</script>
