<template>
  <div class="user-registration">
    <el-card class="user-registration-container">
      <h1>用户注册</h1>
      <el-form :model="form" ref="form" :rules="rules" label-width="120px" class="form">
        <el-form-item label="name" prop="name">
          <el-input v-model.trim="form.name" placeholder="请输入你的真实名字"></el-input>
        </el-form-item>
        <el-form-item label="username" prop="username">
          <el-input v-model.trim="form.username" placeholder="请输入你的用户名"></el-input>
        </el-form-item>
        <el-form-item label="idCard" prop="idCard">
          <el-input v-model.trim="form.idCard" placeholder="请输入身份证"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model.trim="form.password" placeholder="请输入你的密码"></el-input>
        </el-form-item>
        <el-form-item label="phone" prop="phone">
          <el-input v-model.trim="form.phone" placeholder="请输入你的手机号"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model.trim="form.email" placeholder="请输入你的邮箱"></el-input>
        </el-form-item>
        <!--      <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="form.gender">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: '',
        username: '',
        idCard: '',
        password: '',
        phone: '',
        email: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入你的名字', trigger: 'blur'}
        ],

        username: [
          {required: true, message: '请输入你的用户名', trigger: 'blur'}
        ],

        idCard: [
          {required: true, message: '请输入你的身份证号', trigger: 'blur'},
          {pattern: /^\d{18}$/, message: '请输入有效的身份证号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入你的密码', trigger: 'blur'},
          {min: 6, max: 20, message: '请输入有效证件号', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入你的电话号码', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请选择邮箱', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form);
          // Send form data to server
          axios.post('http://localhost:28080/admin-api/user/register', this.form)
              .then((response) => {
                if (response.data.success) {
                  // Registration successful, show success message and clear form
                  this.$message.success(response.data.message);
                  this.$refs.form.resetFields();
                } else {
                  // Registration failed, show error message
                  /*
                                    this.$message.error(response.data.message);
                  */
                }
              })
              .catch((error) => {
                // Request failed, show error message
                this.$message.error('请求失败，请稍后重试');
              });
        } else {
          return false;
        }
      });
    },

    resetForm() {
      this.$refs.form.resetFields();
    }
  }
}

</script>
