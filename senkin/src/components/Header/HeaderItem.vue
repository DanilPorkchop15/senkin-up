<script setup>
import {
  NavigationMenuItem, NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu/index.js";
import {defineProps} from "vue";
const props = defineProps({
  link: {
    type: String
  },
  name: {
    type: String
  }
})
</script>
<template>
  <router-link :to="link">
    <navigation-menu-item>
      <navigation-menu-link :class="navigationMenuTriggerStyle()">
        {{ name }}
      </navigation-menu-link>
    </navigation-menu-item>
  </router-link>
</template>