<script>
export default {
  data () {
    return {
      btnName: '按钮'
    }
  },
  methods: {
    btnclick (name) {
      alert(name)
    }
  }
}
</script>
<style>
.btnList{
  width: 100%;
  margin: 10px 0;
}
</style>
# CButton 按钮
----
预置了两种不同尺寸不同类型的按钮，也可以自定义宽度、高度和按钮文字大小。
### 基本用法
普通按钮 default：<br>
<div class="btnList">
  <c-button @btnClick="btnclick('default按钮')">{{btnName}}</c-button>
</div>
空心按钮 reverse：<br>
<div class="btnList">
  <c-button type="reverse" @btnClick="btnclick('reverse按钮')">{{btnName}}</c-button>
</div>
普通按钮小 small：<br>
<div class="btnList">
  <c-button type="small" @btnClick="btnclick('small按钮')">{{btnName}}</c-button>
</div>
空心按钮小 small-reverse：<br>
<div class="btnList">
  <c-button type="small-reverse" @btnClick="btnclick('small-reverse按钮')">{{btnName}}</c-button>
</div>
禁用按钮 disabled：<br>
<div class="btnList">
  <c-button type="default" :disabled="true" @btnClick="btnclick('disabled按钮')">{{btnName}}</c-button>
</div>
按钮宽度撑满：<br>
<div class="btnList">
  <c-button :fullWidth="true" @btnClick="btnclick('fullWidth按钮')">{{btnName}}</c-button>
</div>
自定义宽度、高度和按钮文字大小：<br>
<div class="btnList">
  <c-button width="250px" height="50px" fontSize="20px" @btnClick="btnclick('reverse+fullWidth按钮')">{{btnName}}</c-button>
</div>

::: demo
```html
<template>
  <div>
    普通按钮 default：<br>
    <div class="btnList">
      <c-button type="default" @btnClick="btnclick('default按钮')">{{btnName}}</c-button>
    </div>
    空心按钮 reverse：<br>
    <div class="btnList">
      <c-button type="reverse" @btnClick="btnclick('reverse按钮')">{{btnName}}</c-button>
    </div>
    普通按钮小 small：<br>
    <div class="btnList">
      <c-button type="small" @btnClick="btnclick('small按钮')">{{btnName}}</c-button>
    </div>
    空心按钮小 small-reverse：<br>
    <div class="btnList">
      <c-button type="small-reverse" @btnClick="btnclick('small-reverse按钮')">{{btnName}}</c-button>
    </div>
    禁用按钮 disabled：<br>
    <div class="btnList">
      <c-button type="default" :disabled="true" @btnClick="btnclick('disabled按钮')">{{btnName}}</c-button>
    </div>
    按钮宽度撑满：<br>
    <div class="btnList">
      <c-button :fullWidth="true" @btnClick="btnclick('fullWidth按钮')">{{btnName}}</c-button>
    </div>
    自定义宽度、高度和按钮文字大小：<br>
    <div class="btnList">
      <c-button width="250px" height="50px" fontSize="20px" @btnClick="btnclick('reverse+fullWidth按钮')">{{btnName}}</c-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnName: '按钮'
    }
  },
  methods: {
    btnclick (name) {
      alert(name)
    }
  }
}
</script>
<style>
.btnList{
  width: 100%;
  margin: 10px 0;
}
</style>
```
:::
### slots
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|default    |	按钮名称  |	string   |	—           |	  —     |
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type	  | 按钮类型    |	string   | default/reverse/small/small-reverse   |default|
|disabled	    | 按钮是否禁用    |	boolean   | —   |false |
|fullWidth	  | 宽度是否撑满(与width属性同用则无效)    |	boolean   | —   |false |
|width	    | 按钮宽度   |	string   | —   |—|
|height	    | 按钮高度   |	string   | —   |—|
|fontSize	  | 按钮文字大小   |	string   | —   |—|
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|btnClick    |点击按钮时触发的事件| —  |
