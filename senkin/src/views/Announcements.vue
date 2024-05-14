<script setup>

import Page from "@/components/ui/page/Page.vue";
import {Separator} from "@/components/ui/separator/index.js";
import NewsService from "@/service/NewsService.js";
import {onMounted, ref, watch} from "vue";
import AnnouncementDialog from "@/components/AnnouncementDialog/AnnouncementDialog.vue";
import AnnouncementList from "@/components/AnnouncementsList/AnnouncementList.vue";
import AnnouncementService from "@/service/AnnouncementService.js";

const announcements = ref([]);
const user = ref(null);
const fetchAnnouncements = async () => {
  announcements.value = await AnnouncementService.getAll();
}
onMounted(() => {
  fetchAnnouncements().then(() => {
    if(localStorage.getItem('user')) {
      user.value = JSON.parse(localStorage.getItem('user'));
    }
  });
})
</script>

<template>
  <Page>
    <div class="flex gap-10 items-center w-full">
      <h1>Announcements</h1>
      <AnnouncementDialog @fetch-announcements="fetchAnnouncements()" v-if="user"/>
    </div>
    <br>
    <separator/>
    <br>
    <AnnouncementList :announcements="announcements"/>
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