/**
 * @author wangjingbo
 * Date: 17/12/23
 */
import Toast from './src/toast.vue'

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}

export default Toast
