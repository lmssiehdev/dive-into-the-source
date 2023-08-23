<script setup lang="ts">
import { PhHorse } from "@phosphor-icons/vue";
import { cva, type VariantProps } from "class-variance-authority";

const Card = computed(() => cva("flex gap-4 p-4 font-overpass rounded shadow-sm border-1", {
  variants: {
    type: {
      info: "bg-blue-100 text-blue-700 border-blue-900 border-opacity-10",
      warning: "bg-yellow-100 text-yellow-700"
    }
  }
}))
</script>
<template>
  <div :class="Card({ type: 'info' })">

    <slot />
  </div>
</template>
