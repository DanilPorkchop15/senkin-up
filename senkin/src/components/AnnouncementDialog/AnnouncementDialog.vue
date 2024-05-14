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
import {onMounted, reactive} from "vue";
import {Label} from "@/components/ui/label/index.js";
import AnnouncementService from "@/service/AnnouncementService.js";
import {toast} from "vue-sonner";

const announcement = reactive({
  title: '',
  textContent: '',
  userId: '',
  picture: '',
})

const emit = defineEmits(
  ['fetchAnnouncements']
)

function onSubmit() {
  if (!announcement.title || !announcement.textContent || !announcement.userId || !announcement.picture) {
    toast.error('All fields are required');
    return
  }
  AnnouncementService.create(announcement).then(() => {
    toast.success('Announcement created');
    close();
    emit('fetchAnnouncements');
  });

}

function onFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    announcement.picture = reader.result;
  };
  reader.readAsDataURL(file);
}
onMounted(() => {
  if (localStorage.getItem('user')) {
    announcement.userId = JSON.parse(localStorage.getItem('user')).id;
    console.log(announcement.userId)
  } else {
    close()
  }
})
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
        <DialogTitle>Create announcement</DialogTitle>
        <DialogDescription>
          Write about your announcement
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="title"  class="text-right">
            Title
          </Label>
          <Input id="title" placeholder="Enter title" v-model="announcement.title" class="col-span-3"/>
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Image
          </Label>
          <Input id="image" type="file" accept="image/*" class="col-span-3" @change="onFileChange" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="content"   class="text-right">
            Content
          </Label>
          <Textarea id="content" placeholder="Describe your announcement"  class="col-span-3" v-model="announcement.textContent"/>
        </div>
      </div>
      <DialogFooter class="flex justify-between w-full">
        <DialogClose as-child>
          <Button type="button" variant="outline">
            Close
          </Button>
        </DialogClose>
        <DialogClose as-child>
          <Button type="submit" @click="onSubmit()">
            Create
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>