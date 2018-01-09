import CToast from './toast/index'
import CMsgBox from './msg-box/index'
import CHeader from './header/src/header'
import CButton from './button/src/button'
import CField from './field/src/field'
import CTab from './tab/src/tab'

const components = [
  CHeader,
  CButton,
  CField,
  CTab
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$toast = CToast
  Vue.prototype.$msgbox = CMsgBox
}

export default{
  install
}
export {
  CToast,
  CMsgBox,
  CHeader,
  CButton,
  CField,
  CTab
}
