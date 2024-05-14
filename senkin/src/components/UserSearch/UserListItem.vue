<script setup>
  import {Separator} from "@/components/ui/separator/index.js";

  defineProps({
    id: {
      type: Number
    },
    name: {
      type: String
    },
    surname: {
      type: String
    },
    login: {
      type: String
    }
  })
</script>

<template>
  <div class="flex-col flex gap-2">
    <Separator/>
    <div class="flex">
      <p>ID{{ id }}   |   Full name: {{ surname }} {{ name }}   |   login: {{ login }}</p>
    </div>
    <Separator/>
</div>
</template>

<style scoped>

</style>