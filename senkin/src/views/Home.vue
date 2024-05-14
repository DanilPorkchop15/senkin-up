<script setup>

import Page from "@/components/ui/page/Page.vue";
import {Separator} from "@/components/ui/separator/index.js";
import NewsList from "@/components/NewsList/NewsList.vue";
import AnnouncementsList from "@/components/AnnouncementsList/AnnouncementList.vue";
import NewsService from "@/service/NewsService.js";
import {onMounted, ref} from "vue";
import AnnouncementService from "@/service/AnnouncementService.js";

const news = ref();
const announcements = ref();
onMounted(() => {
  NewsService.getAll().then(data => {
    news.value = data
  })
  AnnouncementService.getAll().then(data => {
    announcements.value = data
  })
})
</script>

<template>
  <Page>
    <h3>Last news</h3>
    <br>
    <NewsList :len="3" :news="news"/>
    <br>
    <Separator/>
    <br>
    <h3 class="m-auto text-center">Recent announcements</h3>
    <br>
    <div class="w-3/5 m-auto">
      <AnnouncementsList :len="3" :announcements="announcements"/>
    </div>
  </Page>
</template>

<style scoped>
  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  h3 {
    font-size: 24px;
  }
</style>