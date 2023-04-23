<template>
  <div className="success-page">
    <el-container>
      <el-aside width="200px">
        <el-menu
            default-active="/"
            className="el-menu-vertical-demo"
            background-color="#f0f0f0"
            text-color="#000000"
            active-text-color="#409EFF"
        >
<!--          <el-menu-item index="/">-->
<!--            <i className="el-icon-menu"></i>-->
<!--            <span slot="title">关于页面</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/rbac/user/list">-->
<!--            <i className="el-icon-menu"></i>-->
<!--            <span slot="title">用户列表</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/about">-->
<!--            <i className="el-icon-menu"></i>-->
<!--            <span slot="title">关于...</span>-->
<!--          </el-menu-item>-->

        </el-menu>
      </el-aside>
      <el-main>
        <div className="content">
          <h1>关于我们</h1>
          <p>欢迎你, {{ username }}!</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/*
import {getInfo} from "@/api/login";
*/

import {getInfo} from "@/api/login";

export default {
  name: "SuccessPage",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    getInfo().then((res) => {
      this.username = res.data.username;
    });
  },
};
</script>

<style scoped>
.success-page {
  height: 100%;
}

.content {
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
