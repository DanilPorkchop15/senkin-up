<script setup>
import {computed, onMounted, reactive, ref} from 'vue';
import Page from "@/components/ui/page/Page.vue";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Button} from "@/components/ui/button/index.js";
import {useRouter} from "vue-router";
import UserService from "@/service/UserService.js";
import {toast} from "vue-sonner";
import {Separator} from "@/components/ui/separator/index.js";
import AnnouncementList from "@/components/AnnouncementsList/AnnouncementList.vue";
import AnnouncementService from "@/service/AnnouncementService.js";
import UserSearch from "@/components/UserSearch/UserSearch.vue";
const router = useRouter();
const userData = reactive({
  name: '',
  lastName: '',
  registrationDate: '',
  login: '',
  id: ''
});

const announcements = ref([]);
const usersAnnouncements = computed(() => {
  return announcements.value.filter(announcement => announcement.user.id === userData.id)
})

const logOut = () => {
  localStorage.removeItem('user')
  router.push('/auth')
}

const deleteUser = () => {
  UserService.delete(userData.id)
  logOut()
}
const fetchAnnouncements = async () => {
  announcements.value = await AnnouncementService.getAll()
}
onMounted(() => {
  if (localStorage.getItem('user')){
    userData.name = JSON.parse(localStorage.getItem('user')).name
    userData.lastName = JSON.parse(localStorage.getItem('user')).surname
    userData.registrationDate = JSON.parse(localStorage.getItem('user')).dateRegistered
    userData.login = JSON.parse(localStorage.getItem('user')).login
    userData.id = JSON.parse(localStorage.getItem('user')).id
  } else {
    router.push('/auth')
  }
  fetchAnnouncements()
})
</script>

<template>
  <Page class="justify-center">
    <Card class="container w-3/5">
      <CardHeader>
        <CardTitle class="text-[24px]">User</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="profile-info">
          <p>Surname: {{ userData.name }}</p>
          <p>Name: {{ userData.lastName }}</p>
          <p>Login: {{ userData.login }}</p>
          <p>Registration date: {{ userData.registrationDate }}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div class="flex gap-3 justify-end w-full">
          <Button variant="outline" @click="logOut(); toast.success('User logged out');">
            Log out
          </Button>
          <Button @click="deleteUser()">
            Delete account
          </Button>
        </div>
      </CardFooter>
    </Card>
    <br>
    <div class="w-3/5 m-auto">
      <UserSearch/>
    </div>
    <div class="w-3/5 m-auto"><br>
      <separator/>
      <br>
      <h1 class="text-[24px]">My announcements</h1>
      <br>
      <AnnouncementList :announcements="usersAnnouncements"/>
    </div>
  </Page>
</template>

<style scoped>

</style>