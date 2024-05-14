<script setup>

import {ref} from "vue";
import {Button} from "@/components/ui/button/index.js";
import {toast} from "vue-sonner";

const theme = ref('🌑')
const switchTheme = () => {
  document.getElementsByTagName('html')[0].classList.toggle('dark')
  theme.value = theme.value === '🌑' ? '☀️' : '🌑'
  toast.success('Theme switched to ' + (theme.value === '🌑' ? 'Dark' : 'Light'))
}
</script>

<template>
  <Button variant="outline" size="icon" @click="switchTheme" class="rounded-full">{{theme}}</Button>
</template>

<style scoped>

</style>