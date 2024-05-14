<script setup>
import UserListItem from "@/components/UserSearch/UserListItem.vue";
defineProps({
  users: {
    type: Array
  }
})
</script>

<template>
  <div class="list flex flex-col gap-2">
    <div class="item" v-for="user in users" :key="user.id">
      <UserListItem :id="user.id" :login="user.login" :name="user.name" :surname="user.surname"/>
    </div>
  </div>
</template>

<style scoped>

</style>