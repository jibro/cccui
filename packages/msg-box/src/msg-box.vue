<template>
  <div class="c__msg-box" v-if="visible">
    <div v-if="title" class="c__msg-box__title">{{title}}</div>
    <div class="c__msg-box__message">{{message}}</div>
  </div>
</template>
<script>

export default {
  name: 'CMsgBox',
  data () {
    return {
      visible: true,
      title: '',
      message: ''
    }
  }
}
</script>
