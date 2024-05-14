<script setup>
import {Separator} from "@/components/ui/separator/index.js";
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from "@/components/ui/dialog/index.js";
</script>

<template>
  <div class="">
    <separator/>
    <div class="footer">
      <Dialog>
        <DialogTrigger>
          <p>Danil Kostin - 2024</p>
        </DialogTrigger>
        <DialogContent>
          <div class="">
            <p>Z...z...z...  Z...z...z...  Z...z...z...</p>
            <img src="@/assets/images/img.png" alt="pashalko" class="w-full h-full">
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>

      </Dialog>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 5dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>