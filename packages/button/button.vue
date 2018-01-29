<template>
	<div class="c__button" :class="['c__button--'+type, !width && fullWidth?'is-fullWidth':'', disabled?'is-disabled':'']" :style="{width: width,height:height,fontSize:fontSize}" @click="btnClick">
    <span>
      <slot/>
    </span>
  </div>
</template>
<script>
export default {
  name: 'CButton',
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnClick () {
      this.$emit('btnClick')
    }
  }
}
</script>
