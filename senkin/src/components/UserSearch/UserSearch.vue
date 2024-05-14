<script setup>

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card/index.js";
import {Input} from "@/components/ui/input/index.js";
import UserList from "@/components/UserSearch/UserList.vue";
import {computed, onMounted, ref, watch} from "vue";
import UserService from "@/service/UserService.js";

const searchQuery = ref("")
const users = ref(null)
const filteredUsers = ref(null)

watch(searchQuery, () => {
  if (users.value) {
    const regex = new RegExp(`^${searchQuery.value}.*`, 'i');
    filteredUsers.value = users.value.filter(user => regex.test(user.login));
  }})

onMounted(() => {
  UserService.getAll().then(data => {
    users.value = data
  })
})
</script>

<template>
  <Card>
    <CardHeader>
      <Input type="text" v-model="searchQuery" placeholder="Search by login" class="w-full"/>
    </CardHeader>
    <CardContent>
      <UserList :users="filteredUsers ? filteredUsers : users"/>
    </CardContent>
    <CardFooter/>
  </Card>
</template>

<style scoped>

</style>