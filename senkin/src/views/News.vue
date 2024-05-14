<script setup>

import Page from "@/components/ui/page/Page.vue";
import {Separator} from "@/components/ui/separator/index.js";
import NewsList from "@/components/NewsList/NewsList.vue";
import NewsDialog from "@/components/NewsDialog/NewsDialog.vue";
import NewsService from "@/service/NewsService.js";
import {onMounted, ref, watch} from "vue";

const news = ref([]);
const fetchNews = async () => {
  news.value = await NewsService.getAll();
  console.log(news.value)
}

onMounted(async () => {
  await fetchNews();
})
</script>

<template>
  <Page>
    <div class="flex gap-10 items-center w-full">
      <h1>News</h1>
      <NewsDialog @fetch-news="fetchNews()"/>
    </div>
    <br>
    <separator/>
    <br>
    <NewsList :news="news"/>
  </Page>
</template>

<style scoped>
  h1 {
    font-size: 24px;
  }

  img{
    all: initial;
    padding: 1px;
  }
</style>