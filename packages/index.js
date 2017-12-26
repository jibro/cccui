import CToast from './toast/index'
import CMsgBox from './msg-box/index'

const components = []

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default{
  install
}
export {
  CToast,
  CMsgBox
}
