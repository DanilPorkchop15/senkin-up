<script setup>

import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu/index.js";
import HeaderItem from "@/components/Header/HeaderItem.vue";
import {Separator} from "@/components/ui/separator/index.js";
import SwitchThemeButton from "@/components/SwitchThemeButton/SwitchThemeButton.vue";
import LoginButton from "@/components/LoginButton/LoginButton.vue";
import {onMounted, ref} from "vue";

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'News',
    path: '/news'
  },
  {
    name: "Announcements",
    path: '/announcements'
  },
  {
    name: 'User',
    path: '/user'
  }
]
const LOGGED = ref(false)

onMounted(() =>{
  if (localStorage.getItem('user')){
    LOGGED.value = true
  }
})
</script>

<template>
  <div>
    <div class="header w-[100dvw]">
      <router-link to="/" id="title" >BerberovkaNews</router-link>
      <navigation-menu>
        <navigation-menu-list>
          <div v-for="route in routes" :key="route.name">
            <header-item :link="route.path" :name="route.name"/>
          </div>
        </navigation-menu-list>
      </navigation-menu>
      <SwitchThemeButton id="theme"/>
      <LoginButton id="login" v-if="LOGGED"/>
    </div>
    <separator/>
  </div>
</template>

<style scoped>
  .header {
    width: 100%;
    height: 8dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  #theme {
    position: absolute;
    right: 4em;
  }
  #title {
    position: absolute;
    left: 4em;
  }
  #login {
     position: absolute;
     right: 8em;
   }
  @media screen and (max-width: 768px) {
    #theme {
      display: none;
    }
    #title {
      display: none;
    }
    #login {
      z-index: 999;
      position: absolute;
      right: 1em;
      top: 6em;
    }
  }
</style>