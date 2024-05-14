<script setup>
import Page from "@/components/ui/page/Page.vue";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import AnnouncementService from "@/service/AnnouncementService.js";
import {Separator} from "@/components/ui/separator/index.js";
import {Button} from "@/components/ui/button/index.js";
import {toast} from "vue-sonner";

const id = useRoute().params.id
const router = useRouter()
const announcement = ref({})
const user = ref({})
const fetchAnnouncement = async (id) => {
  announcement.value = await AnnouncementService.getById(id)
}
const deleteAnnouncement = (id) => {
  AnnouncementService.deleteById(id)
  toast.success("Announcement deleted")
}

const localUser = ref()

onMounted(() => {
  fetchAnnouncement(id).then(() => {
    if (announcement.value.user) {
      user.value = announcement.value.user
    }

    if (localStorage.getItem('user')) {
      localUser.value = JSON.parse(localStorage.getItem('user'))
    }
  })
})
</script>

<template>
  <Page>
    <Card>
      <CardHeader>
        <CardTitle class="text-[24px]">
          {{announcement.title}}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <separator/>
        <div  class="w-full pb-10 pt-10 flex justify-center">
          <img :src="announcement.picture" :alt="announcement.title" class="max-h-[40dvh]  rounded">
        </div>
        <separator/>
        <br>
        <p>{{announcement.textContent}}</p>
        <p>Author: {{user.surname}} {{user.name}}</p>
      </CardContent>
      <CardFooter class="gap-3 justify-end w-full">
        <RouterLink to="/announcements">
          <Button variant="outline">
            Back
          </Button>
        </RouterLink>
        <RouterLink to="/announcements" v-if="localUser && user.id === localUser.id">
          <Button  @click="deleteAnnouncement(id)">
            Delete
          </Button>
        </RouterLink>
      </CardFooter>
    </Card>
  </Page>
</template>

<style scoped>

</style>