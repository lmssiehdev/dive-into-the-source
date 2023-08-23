<script setup lang="ts">
import "~/global.css"
import '@unocss/reset/tailwind-compat.css'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class=" max-w-screen-md mx-auto">
      <nav class="py-4 font-bold font-overpass">
        <h1>MyAnimeList</h1>
      </nav>
      <NuxtPage />
    </div>
  </div>
</template>
