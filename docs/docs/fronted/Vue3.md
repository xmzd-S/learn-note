

# 应用、根组件、挂载

```javascript
function createApp(rootComponent: Component, rootProps?: object): App
```

第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。返回的是一个应用实例

```javascript
interface App {
  mount(rootContainer: Element | string): ComponentPublicInstance
}
```

将应用实例挂载在一个容器元素中。返回的是一个根组件实例。容器元素自己将**不会**被视为应用的一部分

示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://unpkg.com/vue@3.5.25/dist/vue.global.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  // 创建一个应用
  const app = Vue.createApp({
    template: "<div>hello world</div>"
  });
  // vm 代表的就是 Vue 应用的根组件
  const vm = app.mount('#root');
</script>
</html>
```



# 单组件实例化

0. 初始化 props
1. beforeCreate生命周期函数

2. methods初始化
3. data初始化
4. 计算属性
5. watch初始化
6. created以及之后的生命周期函数



```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/vue@3.5.25/dist/vue.global.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
<script>
  const app = Vue.createApp({

    // 1. props 初始化
    props: {
      title: {
        type: String,
        default: () => {
          console.log('0-props初始化',this)
          return 'john doe'
        }
      }
    },
    // 1. beforeCreate 钩子
    beforeCreate() {
      console.log('1. beforeCreate 钩子，实例初始化，但数据未初始化',this);
      console.log(this.title) //可以访问
    },
    // 2. methods初始化
    methods: {
      formatName() {
        return 'formatName调用了';
      }
    },
    // 3. data初始化
    data() {
      console.log('3. data 初始化',this.formatName());
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    // 4. 然后计算这里
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    },
    // 5.watch初始化
    watch: {
      firstName:{
        handler(newVal) {
          console.log('5.1 监听data的watch初始化',this)
        },
        // 监听器初始化时就立即执行
        immediate: true
      },
      fullName:{
        handler(newVal) {
          console.log('5.2 监听computed的watch初始化',this)
        },
        // 监听器初始化时就立即执行
        immediate: true
      },
    },

    created() {
      console.log('6. created 钩子，所有响应式数据都已准备好');
    },
  });
  app.mount('#root')
</script>
</html>
```



# 生命周期函数

![组件生命周期图示](./assets/lifecycle_zh-CN.W0MNXI0C.png)

# 父子组件实例化

```
父组件 beforeCreate
父组件 created
父组件 beforeMount
   ↓
子组件 beforeCreate
子组件 created
子组件 beforeMount
   ↓
子组件 mounted
   ↓
父组件 mounted
```



```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/vue@3.5.25/dist/vue.global.js"></script>
</head>
<body>
<div id="root"></div>
</body>
<script>
    const ChildComponent = {
        name: 'ChildComponent',
        template: '<div>子组件内容</div>',
        props: {
            title: {
                type: String,
                default: () => {
                    console.log('🔹 子组件  props初始化',this)
                    return 'john doe'
                }
            }
        },
        beforeCreate() {
            console.log('🔹 子组件 beforeCreate');
        },
        methods: {
            formatName() {
                return 'formatName调用了';
            }
        },
        data() {
            console.log(' 🔹 子组件  data 初始化',this.formatName());
            return {
                firstName: 'John',
                lastName: 'Doe'
            }
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            },
        },
        watch: {
            firstName:{
                handler(newVal) {
                    console.log('🔹 子组件 监听data的watch初始化',this)
                },
                // 监听器初始化时就立即执行
                immediate: true
            },
            fullName:{
                handler(newVal) {
                    console.log('🔹 子组件 监听computed的watch初始化',this)
                },
                // 监听器初始化时就立即执行
                immediate: true
            },
        },
        created() {
            console.log('🔹 子组件 created');
        },
        beforeMount() {
            console.log('🔹 子组件 beforeMount');
        },
        mounted() {
            console.log('🔹 子组件 mounted');
        },
        beforeUnmount() {
            console.log('🔹 子组件 beforeUnmount');
        },
        unmounted() {
            console.log('🔹 子组件 unmounted');
        }
    };

    const ParentComponent = {
        name: 'ParentComponent',
        components: { ChildComponent },
        template: `
    <div>
      <h3>父组件</h3>
      <child-component />
    </div>
  `,
        props: {
            title: {
                type: String,
                default: () => {
                    console.log('🏠 父组件 props初始化',this)
                    return 'john doe'
                }
            }
        },
        beforeCreate() {
            console.log('🏠 父组件 beforeCreate');
        },
        methods: {
            formatName() {
                return 'formatName调用了';
            }
        },
        data() {
            console.log('🏠 父组件 data 初始化',this.formatName());
            return {
                firstName: 'John',
                lastName: 'Doe'
            }
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            },
        },
        watch: {
            firstName:{
                handler(newVal) {
                    console.log('🏠 父组件  监听data的watch初始化',this)
                },
                immediate: true
            },
            fullName:{
                handler(newVal) {
                    console.log('🏠 父组件 监听computed的watch初始化',this)
                },
                immediate: true
            },
        },
        created() {
            console.log('🏠 父组件 created');
        },
        beforeMount() {
            console.log('🏠 父组件 beforeMount');
        },
        mounted() {
            console.log('🏠 父组件 mounted');
        },
        beforeUnmount() {
            console.log('🏠 父组件 beforeUnmount');
        },
        unmounted() {
            console.log('🏠 父组件 unmounted');
        }
    };

    const app = Vue.createApp(ParentComponent);
    app.mount('#root');
</script>
</html>
```

