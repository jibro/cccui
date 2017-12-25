<template>
  <transition name="c__toast--fade">
    <div class="c__toast" :class="['c__toast--'+position]" v-if="visible">
      {{text}}
    </div>
  </transition>
</template>
<script>

export default {
  name: 'CToast',
  props: {
    position: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      visible: true,
      text: ''
    }
  }
}
</script>
