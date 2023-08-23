<script setup lang="ts">
import { AnimeDataSchema } from "~/schema";
const route = useRoute();
const id = computed(() => route.params.slug[0])

</script>

<template>
  <!-- <AnimeInfo :animeId="id" /> -->
  <div class="my-8">
    <div class="prose font-overpass ">
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>
