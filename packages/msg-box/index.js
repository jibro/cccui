import Vue from 'vue'
import msgBox from './src/msg-box'     // 引入组件
import Shadow from '../shadow/shadow'
let MsgBoxConstructor = Vue.extend(msgBox) // 返回一个“扩展实例构造器”
let ShadowConstructor = Vue.extend(Shadow)
let CMsgBox = (option = {}) => {
  return new MsgBoxConstructor().init(option)
}
MsgBoxConstructor.prototype.init = function (option = {}) {
  this.vm = this.$mount()
  this.shadow = new ShadowConstructor().$mount()
  this.title = option.title || '提示'
  this.message = option.message
  this.showCancel = option.showCancel || false
  document.body.appendChild(this.$el)
  document.body.appendChild(this.shadow.$el)
}
MsgBoxConstructor.prototype.close = function () {
  this.visible = false
  document.body.removeChild(this.$el)
}
export default CMsgBox
