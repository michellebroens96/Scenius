<template>
  <div class="flex items-center justify-between p-5 border-b z-10">
    <div class="flex items-center space-x-3">Scenius</div>
    <nav>
      <ul class="flex space-x-8">
        <li>
          <NuxtLink to="/history" class="hover:underline">
            <div class="flex items-center gap-1">
              <Icon
                name="material-symbols:history-rounded"
                class="text-blue-500"
              />
              <Typography variant="body" color="accent">History </Typography>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "~/components/DarkModeToggle.vue";
import Typography from "./partials/Typography.vue";
import image1 from "~/assets/images/scenius-horizontaal-wit.svg";
</script>
