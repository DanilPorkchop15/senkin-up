<script setup>

import Page from "@/components/ui/page/Page.vue";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Button} from "@/components/ui/button/index.js";
import {Separator} from "@/components/ui/separator/index.js";
import {AspectRatio} from "@/components/ui/aspect-ratio/index.js";
</script>

<template>
  <Page>
    <div class="not-found">
      <card class="content-center">
        <card-header>
          <card-title>404 | Page not found</card-title>
        </card-header>
        <card-content>
          <aspect-ratio :ratio="16/9" class="bg-muted">
            <img src="@/assets/images/404.png" alt="404" class="rounded-md object-cover w-full h-full">
          </aspect-ratio>
        </card-content>
        <card-footer>
          <RouterLink to="/">
            <Button>
              Return to home page
            </Button>
          </RouterLink>
        </card-footer>
      </card>
    </div>
  </Page>
</template>

<style scoped>
  .not-found {
    display: flex;
    justify-content: center;
  }
</style>