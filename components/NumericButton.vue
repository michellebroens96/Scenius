<template>
  <button
    class="w-24 h-24 text-2xl font-bold text-gray-700 bg-white border hover:bg-gray-300 flex items-center justify-center"
  >
    <template v-if="icon">
      <Icon :name="icon" />
    </template>
    <template v-else>
      {{ label }}
    </template>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  label: string;
  icon?: string;
}>();
</script>
