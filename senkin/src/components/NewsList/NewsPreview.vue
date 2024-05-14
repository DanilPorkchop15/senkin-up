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
    <CardHeader/>
    <CardContent class="flex gap-10  ">
      <div class="w-[450px] " >
        <AspectRatio :ratio="16/9" class="w-full">
          <img :src="picture" :alt="title" class="w-[100%] h-full rounded object-cover">
        </AspectRatio>
      </div>
      <div class="w-full flex flex-col justify-between">
        <h2 class="text-2xl">{{ title }}</h2>
        <p>Date: {{ formattedDate }}</p>
      </div>
    </CardContent>
    <CardFooter class="flex justify-end">
      <RouterLink :to="`/news/${id}`">
        <Button>Open post</Button>
      </RouterLink>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>