<template>
    <!-- 登录 -->
    <el-form
      :model="loginUser"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-form sign-in-form"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginUser.email" placeholder="Enter Email..." />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginUser.password"
          type="password"
          placeholder="Enter Password..."
        />
      </el-form-item>
      <el-form-item>
        <el-button
          @click="handleLogin('loginForm')"
          type="primary"
          class="submit-btn"
          >提交</el-button
        >
      </el-form-item>
      <!-- 找回密码 -->
      <el-form-item>
        <p class="tiparea">忘记密码<a>立即找回</a></p>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts">
  import { getCurrentInstance } from 'vue'
  export default {
    name: 'LoginForm',
    props: {
      loginUser: {
        type: Object,
        required: true
      },
      rules: {
        type: Object,
        required: true
      }
    },
    setup() {
      // 通过解构getCurrentInstance，获取this，这里的this就是ctx
      // @ts-ignore
      const { ctx } = getCurrentInstance()
      // 触发登录方法
      const handleLogin = (formName: string) => {
        console.log(ctx)
        ctx.$refs[formName].validate((valid: boolean) => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error submit!')
            return false
          }
        })
      }
      return { handleLogin }
    }
  }
  </script>
  <style scoped>
  /* register */
  .login-form,
  .register-form {
    background-color: #fff;
    padding: 50px 80px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }
  
  .submit-btn {
    width: 100%;
  }
  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
    width: 100%;
  }
  .tiparea a {
    color: #409eff;
  }
  </style>
  
  
  