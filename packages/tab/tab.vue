<template>
	<div class="c__tab" :style="{fontSize:fontSize}">
    <ul>
      <li v-for="tab in tabData" :key="tab.id" @click="tabChoose(tab)">
         <div class="c__tab__main" :class="{'is-active':tab.active}">
           <span>{{tab.name}}</span>
         </div>
      </li>
      <div>
        <slot></slot>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CTab',
  props: {
    tabData: {
      type: Array,
      default: {},
      required: true
    },
    fontSize: {
      type: String,
      default: ''
    }
  },
  methods: {
    tabChoose (tab) {
      this.tabData.forEach(i => {
        i.active = false
      })
      tab.active = true
      this.$emit('tabChoose', tab)
    }
  }
}
</script>
