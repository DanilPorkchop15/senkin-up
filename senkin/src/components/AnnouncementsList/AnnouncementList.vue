<script setup>
import NewsPreview from "@/components/NewsList/NewsPreview.vue";
import {computed, ref, watch} from "vue";
import AnnouncementPreview from "@/components/AnnouncementsList/AnnouncementPreview.vue";
const props = defineProps({
  len: {
    type: Number,
    default: 0
  },
  announcements: {
    type: Array
  }
})
const  filteredAnnouncements = computed(()=> length !== 0 ? announcements.value.splice(0, props.len) : props.announcements);


</script>

<template>
  <div class="container w-full">
    <div class="list flex flex-col gap-3" v-if="announcements && filteredAnnouncements.length > 0">
      <div class="item w-full" v-for="item in announcements" :key="item.id">
        <AnnouncementPreview :title="item.title" :picture="item.picture" :date="item.dateCreated" :id="item.id" :user="item.user"/>
      </div>
    </div>
    <div class="no" v-else>
      There is no announcements...
    </div>
  </div>
</template>

<style scoped>

</style>