<script setup>
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card/index.js";
import {AspectRatio} from "@/components/ui/aspect-ratio/index.js";
import {Button} from "@/components/ui/button/index.js";
import {computed} from "vue";

const props = defineProps({
  title : {
    type: String
  },
  picture: {
    type: String
  },
  date: {
    type: String
  },
  id: {
    type: Number
  },
  user: {
    type: Object
  }
})
const formattedDate = computed(() => {
  const newDate = new Date(props.date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}.${month}.${year}`
})
</script>

<template>
  <Card class="w-full">
    <CardHeader class="w-full flex justify-center">
      <div class=" pb-0 aspect-video max-h-[400px]">
        <img :src="props.picture" :alt="props.title" class="object-cover w-full h-full rounded">
      </div>
    </CardHeader>
    <CardContent>
      <div>
        <h2 class="text-2xl">{{ props.title }}</h2>
        <p>Author: {{ props.user.surname }} {{ props.user.name }}</p>
        <p>Date: {{ formattedDate }}</p>
      </div>
    </CardContent>
    <CardFooter class="justify-end w-full">
      <RouterLink :to="`/announcements/${props.id}`">
        <Button>Open announcement</Button>
      </RouterLink>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>