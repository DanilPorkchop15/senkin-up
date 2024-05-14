<script setup>
import { ref } from 'vue';
import {Input} from "@/components/ui/input/index.js";
import {Button} from "@/components/ui/button/index.js";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Label} from "@/components/ui/label/index.js";
import {toast} from "vue-sonner";
import UserService from "@/service/UserService.js";
import {useRouter} from "vue-router";
const router = useRouter();
const formData = {
  login: ref(''),
  password: ref(''),
  name: ref(''),
  surname: ref('')
};

const register = (data) => {
  UserService.register(data).then((response) => {
    localStorage.setItem("user", JSON.stringify(response))
    toast.success('Registration successful');
    router.push("/")
  })
}
</script>

<template>
  <Card class="w-[60%] m-auto">
    <CardHeader>
      <CardTitle>Registration</CardTitle>
    </CardHeader>
    <form @submit.prevent="register(formData)">
        <CardContent >
          <Label for="login">Login:</Label>
          <Input type="text" id="login" v-model="formData.login" required size="50"/><br>

          <Label for="password">Password:</Label>
          <Input type="password" id="password" v-model="formData.password" required/><br>

          <Label for="name">Name:</Label>
          <Input type="text" id="name" v-model="formData.name" required/><br>

          <Label for="surname">Surname:</Label>
          <Input type="text" id="surname" v-model="formData.surname" required/>
      </CardContent>
      <CardFooter>
        <div class="flex w-full justify-between flex-wrap gap-3">
          <RouterLink to="/auth">
            <Button variant="outline">
              Authorization
            </Button>
          </RouterLink>
          <Button type="submit">
            Create account
          </Button>
        </div>
      </CardFooter>
    </form>
  </Card>
</template>

<style scoped>

</style>