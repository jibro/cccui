<style>
  .tab-wrap{
    max-width: 360px;
    background: #555;
    padding: 20px;
  }
  .tab-search{
    line-height: 40px;
    padding: 0 15px;
    font-size: 14px;
  }
</style>
<script>
export default {
  data () {
    return {
      tabData: [
        {id: '1', name: 'tab1', active: true},
        {id: '2', name: 'tab2', active: false},
        {id: '3', name: 'tab3', active: false}
      ],
      tabData2: [
        {id: '1', name: 'tab1', active: true},
        {id: '2', name: 'tab2', active: false}
      ]
    }
  },
  methods: {
    tabClick (item) {
      console.log(item)
    }
  }
}
</script>
# CTab 选项卡
----
选项卡切换，支持在右侧添加额外模块。
### 基本用法
三栏：<br/>
<div class="tab-wrap">
  <c-tab :tabData="tabData" fontSize="14px" @tabChoose="tabClick"></c-tab>
</div>
两栏：<br/>
<div class="tab-wrap">
  <c-tab :tabData="tabData2" fontSize="14px" @tabChoose="tabClick"></c-tab>
</div>
两栏+额外信息：<br/>
<div class="tab-wrap">
  <c-tab :tabData="tabData2" fontSize="16px" @tabChoose="tabClick">
    <div class="tab-search">搜索</div>
  </c-tab>
</div>

::: demo
```html
<template>
  <div>
    三栏：<br/>
    <div class="tab-wrap">
      <c-tab :tabData="tabData" fontSize="14px" @tabChoose="tabClick"></c-tab>
    </div>
    两栏：<br/>
    <div class="tab-wrap">
      <c-tab :tabData="tabData2" @tabChoose="tabClick"></c-tab>
    </div>
    两栏+额外信息：<br/>
    <div class="tab-wrap">
      <c-tab :tabData="tabData2" @tabChoose="tabClick">
        <div class="tab-search">搜索</div>
      </c-tab>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabData: [
        {id: '1', name: 'tab1', active: true},
        {id: '2', name: 'tab2', active: false},
        {id: '3', name: 'tab3', active: false}
      ],
      tabData2: [
        {id: '1', name: 'tab1', active: true},
        {id: '2', name: 'tab2', active: false}
      ]
    }
  },
  methods: {
    tabClick (item) {
      console.log(item)
    }
  }
}
</script>
```
:::
### slots
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|default    |	右侧额外DOM结构  |	html   |	—           |	  —     |
### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|tabData	  | 数据构成：id，name，active  |	array   | —   |— |
|fontSize 	| 文本字体大小  |	string   | —   | 14px |
### Events
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|tabChoose    |点击选项卡时触发的事件| —  |