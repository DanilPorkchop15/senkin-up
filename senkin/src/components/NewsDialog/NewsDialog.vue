<script setup>

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog/index.js";
import {Button} from "@/components/ui/button/index.js";
import {Textarea} from "@/components/ui/textarea/index.js";
import {Input} from "@/components/ui/input/index.js";
import {reactive} from "vue";
import {Label} from "@/components/ui/label/index.js";
import NewsService from "@/service/NewsService.js";
import {toast} from "vue-sonner";

const news = reactive({
  title: '',
  textContent: '',
  picture: '',
})

const emit =defineEmits(
  ['fetchNews']
)

function onSubmit() {
  if(!news.title || !news.textContent || !news.picture) {
    toast.error('All fields are required')
    return
  }
  NewsService.create(news).then(
    () => {
      console.log(news)
      emit('fetchNews');
      toast.success('News created')
    }
  )
}

function onFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    news.picture = reader.result;
  };
  reader.readAsDataURL(file);
}

</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button size="icon">
        +
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Create post</DialogTitle>
        <DialogDescription>
          Write about your news
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="title"  class="text-right">
            Title
          </Label>
          <Input id="title" placeholder="Enter title" v-model="news.title" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="image"   class="text-right">
            Image
          </Label>
          <Input id="name" type="file" accept="image/*" @change="onFileChange" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username"  class="text-right" >
            Content
          </Label>
          <Textarea id="content" placeholder="Describe your announcement"  class="col-span-3" v-model="news.textContent"/>
        </div>
      </div>
      <DialogFooter class="">
        <DialogClose as-child>
          <Button type="button" variant="outline">
            Close
          </Button>
        </DialogClose>
        <DialogClose as-child>
          <Button @click="onSubmit()" type="submit">
            Create
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>