<script setup>
import {reactive, ref} from 'vue';
import {Input} from "@/components/ui/input/index.js";
import {Button} from "@/components/ui/button/index.js";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Label} from "@/components/ui/label/index.js";
import {useRouter} from "vue-router";
import UserService from "@/service/UserService.js";
import {toast} from "vue-sonner";

const router = useRouter();
const formData = reactive({
  login: '',
  password: ''
});

const auth = (formData) => {
  UserService.auth(formData).then((response) => {
    console.log(response)
    localStorage.setItem("user", JSON.stringify(response))
    toast.success('Registration successful');
    router.push("/")
  })
};
</script>

<template>
  <Card class="w-[60%] m-auto">
    <CardHeader>
      <CardTitle>Authorization</CardTitle>
    </CardHeader>
    <form @submit.prevent="auth(formData)">
      <CardContent>
        <Label for="login">Login:</Label>
        <Input type="text" id="login" placeholder="Enter your login" v-model="formData.login" required size="50"/><br>

        <Label for="password">Password:</Label>
        <Input type="password" id="password" placeholder="••••••••" v-model="formData.password" required/>
      </CardContent>
      <CardFooter>
        <div class="flex justify-between w-full flex-wrap gap-3">
          <RouterLink to="/register">
            <Button variant="outline">
              Registration
            </Button>
          </RouterLink>
          <Button type="submit">
            Log in
          </Button>
        </div>
      </CardFooter>
    </form>
  </Card>
</template>
