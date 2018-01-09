<template>
	<div class="c__button" :class="['c__button--'+type, !width && fullWidth?'is-fullWidth':'']" :style="{width: width,height:height,fontSize:fontSize}" @click="btnClick">
    <span>
      <slot/>
    </span>
  </div>
</template>
<script>
export default {
  name: 'CField',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    }
  }
}
</script>
