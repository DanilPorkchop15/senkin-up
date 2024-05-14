<script setup>
  import Page from "@/components/ui/page/Page.vue";
  import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
  import {useRoute, useRouter} from "vue-router";
  import {computed, onMounted, reactive, ref} from "vue";
  import NewsService from "@/service/NewsService.js";
  import {Separator} from "@/components/ui/separator/index.js";
  import {Button} from "@/components/ui/button/index.js";
  import {toast} from "vue-sonner";
  const id = useRoute().params.id;
  const news = ref({});
  const router = useRouter();

  const fetchNews = async () => {
    news.value = await NewsService.getById(id);
  }

  const deleteNews = (id) => {
    NewsService.deleteById(id).then(
      () => {
        router.push("/news");
        toast.success("News deleted");
      }
    );
  }
  onMounted(() => {
    fetchNews().catch(() => {router.push("/404")});
  })
</script>

<template>
  <Page>
    <Card>
      <CardHeader>
        <CardTitle class="text-[24px]">
          {{news.title}}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <separator/>
        <div  class="w-full pb-10 pt-10 flex justify-center">
          <img :src="news.picture" :alt="news.title" class="max-h-[40dvh]  rounded">
        </div>
        <separator/>
        <br>
        <p>{{news.textContent}}</p>
      </CardContent>
      <CardFooter class="gap-3 justify-end w-full">
        <RouterLink to="/news">
          <Button variant="outline">
            Back
          </Button>
        </RouterLink>
        <RouterLink to="/news">
          <Button @click="deleteNews(id)">
            Delete
          </Button>
        </RouterLink>
      </CardFooter>
    </Card>
  </Page>
</template>

<style scoped>

</style>