<script setup>
  import NewsPreview from "@/components/NewsList/NewsPreview.vue";
  import {computed, ref} from "vue";
  const props = defineProps({
    len: {
      type: Number,
      default: 0
    },
    news: {
      type: Array
    }
  });
  const filteredNews = computed(()=> length !== 0 ? props.news.splice(0, props.len) : props.news);
</script>

<template>
 <div class="container w-full p-0">
    <div class="list flex flex-col gap-3" v-if="news && filteredNews.length > 0" >
      <div class="item " v-for="item in props.news" :key="item.id">
        <NewsPreview :title="item.title" :picture="item.picture" :date="item.dateCreated" :id="item.id"/>
      </div>
    </div>
   <div class="no" v-else>
     There is no news...
   </div>
 </div>
</template>

<style scoped>

</style>