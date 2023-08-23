<script lang="ts" setup>
import { AnimeDataSchema, type AnimeData } from '~/schema';

const { animeId } = defineProps<{
  // animeData: AnimeData,
  animeId: string,
}>()

const API_URL = "https://api.jikan.moe/v4/anime"
const { data: dataResponse } = await useAsyncData(() => $fetch(`/api/hello`));
// const { data: dataResponse } = await useAsyncData(() => $fetch(`${API_URL}/${animeId}`));

const animeData = AnimeDataSchema.parse(dataResponse.value);

</script>

<template>
  <div class="flex gap-4 font-overpass not-prose">
    <div class="rounded-sm overflow-hidden shadow-sm shrink-0 max-w-[200px] h-[290px]">
      <img class="w-full h-full" :src="animeData.images" :alt="`${animeData.title_english} image`" />
    </div>
    <div>
      <h2 class="font-bold text-2xl">
        {{ animeData.title_english }}
      </h2>
      <div class="flex flex-col">
        <p class="line-clamp-4 opacity-80">
          {{ animeData.synopsis }}
        </p>
        <div class="my-2 children:(block opacity-70)">
          <span> <span class="font-bold">Type:</span> {{ animeData.type }}</span>
          <span> <span class="font-bold">Episodes:</span> {{ animeData.episodes }}</span>
          <span> <span class="font-bold">Source:</span> {{ animeData.source }}</span>
          <span> <span class="font-bold">Status:</span> {{ animeData.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
