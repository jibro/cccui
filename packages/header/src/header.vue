<template>
	<header class="c__header" :style="{color: fontColor,backgroundColor: bgColor}">
    <div class="c__header__left" @click="leftClick">
      <i class="iconfont" :class="[leftIcon]"></i>
      <span :class="[!leftIcon?'is-nolefticon':'']">{{leftTxt}}</span>
    </div>
    <div class="c__header__title">
      <slot/>
    </div>
    <div class="c__header__right" @click="rightClick">
      <span :class="[!rightIcon?'is-norighticon':'']">{{rightTxt}}</span>
      <i class="iconfont" :class="[rightIcon]"></i>
    </div>
  </header>
</template>
<script>
export default {
  name: 'CHeader',
  props: {
    leftTxt: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightTxt: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    leftClick () {
      this.$emit('leftClick')
    },
    rightClick () {
      this.$emit('rightClick')
    }
  }
}
</script>
