# 全局注册message

Vue3

```java
// main.js
import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App)
app.use(Antd)

// 注册到全局属性
app.config.globalProperties.$message = message

app.mount('#app')
```

```java
<template>
  <div class="about">
    <a-button @click="clickButton" >测试按钮</a-button>
  </div>
</template>
<script>

export default {
  name: 'AboutView',
  data(){
    return {
    }
  },
  methods:{
    clickButton(){
      this.$message.success("操作成功")
    }
  }
}


</script>
```

Vue2

```java
// main.js
import Vue from 'vue'
import Antd from 'ant-design-vue'
import { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

// 全局注册 message 到 Vue 原型上
Vue.prototype.$message = message
```
