<template>
  <div class="find-password">

    <el-card class="find-password-card">
      <h1>密码找回</h1>
<!--      <div class="find-password-title">密码找回</div>-->
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="find-password-form">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.trim="form.email" placeholder="请输入你的邮箱"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode" class="find-password-verification-code">
          <el-row>
            <el-col :span="16">
              <el-input v-model.trim="form.verificationCode"
                        placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8" class="find-password-verification-code-button-col">
              <el-button type="primary" @click="sendVerificationCode" :disabled="verificationCodeSent">
                {{ verificationCodeButton }}
              </el-button>
            </el-col>
          </el-row>
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
export default {
  data() {
    return {
      form: {
        email: '',
        verificationCode: ''
      },
      rules: {
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur'}
        ],
        verificationCode: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      },
      verificationCodeButton: '发送验证码',
      verificationCodeSent: false
    }
  },
  methods: {
    sendVerificationCode() {
      // Send verification code to email address and set verificationCodeSent to true
      // Code omitted for brevity
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // Submit user's email and verification code to server for password reset
          // Code omitted for brevity
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
