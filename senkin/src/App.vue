<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import {Toaster} from "@/components/ui/sonner/index.js";
</script>
<template>
  <div class="overflow-x-hidden">
    <Header/>
    <router-view/>
    <Footer/>
    <Toaster/>
  </div>
</template>


<style scoped>

</style>