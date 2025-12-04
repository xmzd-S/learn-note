# 集成ant-design-vue (Duplicated 2025-11-29 10:45:15)

- 安装

```java
 npm i --save ant-design-vue
```

- 全局完整注册

```java
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');
```

- 安装图标

```java
npm install --save @ant-design/icons-vue
```

- 注册图标

```java
import * as Icons from '@ant-design/icons-vue'


const app = createApp(App)
app.use(store).use(router).use(Antd).mount('#app')

const icons = Icons
for(const i in icons){
    app.component(i,icons[i])
}
```
