<template>
  <el-form label-position="top">
    <el-form-item label="Name">
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="user.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="Phone">
      <el-input v-model="user.phone"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="user.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="update_User">提交</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import {updateUser} from "@/api/user";

export default {
  name: "updateUser",
  data() {
    return {
      user: {
        name: '',
        username: '',
        idCard: '',
        password: '',
        phone: '',
        email: ''
      },
      token: localStorage.getItem('ACCESS_TOKEN')
    }
  },
  methods: {
    update_User() {
      console.log(this.token)
      updateUser(this.token, this.user)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

</style>
