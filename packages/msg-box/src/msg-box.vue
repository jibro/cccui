<template>
  <div class="c__msg-box" v-if="visible">
    <div v-if="title" class="c__msg-box__title">{{title}}</div>
    <div class="c__msg-box__message">{{message}}</div>
    <div class="c__msg-box__btn">
      <div class="c__msg-box__btn__confirm">确定</div>
      <div class="c__msg-box__btn__cancel" v-if="showCancel">取消</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CMsgBox',
  data () {
    return {
      visible: true,
      title: '',
      message: '',
      showCancel: null
    }
  }
}
</script>
