<template>
  <div class="correct-password">
    <el-card class="correct-password-card">
      <h1>修改密码</h1>
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="username" prop="username">
          <el-input v-model.trim="form.username" placeholder="请输入你的用户名"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model.trim="form.password" placeholder="请输入你的密码"></el-input>
        </el-form-item>
        <el-form-item label="newPassword" prop="newPassword">
          <el-input v-model.trim="form.newPassword" placeholder="请输入你的新密码"></el-input>
        </el-form-item>
        <el-form-item label="confirmPassword" prop="confirmPassword">
          <el-input v-model.trim="form.confirmPassword" placeholder="请再次输入你的新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { updatePassword } from '@/api/updatePassword'

export default {
  name: 'CorrectPassword',
  data() {
    return {
      form: {
        username: '',
        password: '',
        newPassword: '',
        confirmPassword: ''
      },
      user: {
        name: '',
        username: '',
        idCard: '',
        password: '',
        phone: '',
        email: ''
      },
      token: localStorage.getItem('ACCESS_TOKEN'),
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.newPassword) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      if(this.form.newPassword !== this.form.confirmPassword){
        this.$message({
          message: '两次输入的密码不一致',
          type: 'error'
        })
        return false
      }
      else {
        this.user.password= this.form.newPassword
        this.$refs.form.validate((valid) => {
          if (valid) {
            updatePassword(this.form.password, this.form.newPassword, this.token)
                .then(response => {
                  console.log(response.data)
                  if(response.data.code!==200){
                    this.$message({
                      message: '密码修改失败，请检查用户名和密码是否正确',
                      type: 'error'
                    })
                    return false
                  }
                  this.$message({
                    message: '密码修改成功',
                    type: 'success'
                  })
                  this.resetForm()
                })
                .catch(error => {
                  console.log(error)
                  this.$message({
                    message: '密码修改失败，请检查用户名和密码是否正确',
                    type: 'error'
                  })
                })
          } else {
            console.log('表单验证失败')
            return false
          }
        })
      }
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}

</script>
<style scoped>

</style>




