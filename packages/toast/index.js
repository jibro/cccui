import Vue from 'vue'
import Toast from './src/toast'     // 引入组件
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”

let CToast = (option = {}) => {
  return new ToastConstructor().init(option)
}
// init:text,timing
ToastConstructor.prototype.init = function (option = {}) {
  this.vm = this.$mount()
  this.vm.text = option.text
  this.vm.timing = option.timing || 2500
  document.body.appendChild(this.vm.$el)
  setTimeout(() => {
    this.close()
  }, this.vm.timing)
}
// 实现toast的关闭方法
ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', this.removeDom)
  this.$el.addEventListener('webkitTransitionend', this.removeDom)
}
ToastConstructor.prototype.removeDom = function () {
  document.body.removeChild(this.vm.$el)
}
export default CToast
