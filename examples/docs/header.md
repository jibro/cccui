<script>
export default {
  data () {
    return {
      title: 'myHeader'
    }
  },
  methods: {
    leftClick () {
      alert('leftClick')
      console.log('leftClick')
    },
    rightClick () {
      alert('rightClick')
      console.log('rightClick')
    }
  }
}
</script>
# CHeader 头部导航条
----
公共组件-头部导航条。
### 基本用法
<c-header leftTxt="返回" leftIcon="icon-back" @leftClick="leftClick" rightTxt="我的" rightIcon="icon-login" @rightClick="rightClick" fontColor="#fff" bgColor="#00a7ea">{{title}}</c-header>

::: demo
```html
<template>
  <div>
    <c-header leftTxt="返回" leftIcon="icon-back" @leftClick="leftClick" rightTxt="我的" rightIcon="icon-login" @rightClick="rightClick" fontColor="#fff" bgColor="#00a7ea">{{title}}</c-header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'myHeader'
    }
  },
  methods: {
    leftClick () {
      alert('leftClick')
      console.log('leftClick')
    },
    rightClick () {
      alert('rightClick')
      console.log('rightClick')
    }
  }
}
</script>
```
:::
### slots
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|default    |	标题  |	string   |	—           |	  —     |
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|leftTxt	  | 左侧按钮标题    |	string   | —   |— |
|rightTxt	  | 右侧按钮标题    |	string   | —   |— |
|leftIcon |	左侧按钮图标       |	string    |	—     |	    —  |
|rightIcon   |	右侧按钮图标   |	string   |	—	      |  —  |
|fontColor   |	字体颜色      |	string   |	—	      | #fff |
|bgColor   |	背景颜色   |	string   |	—	      |  #00a7ea  |
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|leftClick    |点击左侧按钮时触发的事件| —  |
|rightClick   |点击右侧按钮时触发的事件| —  |
### Others
_icon 图标默认只支持iconfont, 使用之前请引入图标库和class样式。_