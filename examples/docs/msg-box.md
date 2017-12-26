<script>
import {CMsgBox} from '../../packages/index'
export default {
  methods: {
    showMsgBox () {
      CMsgBox({
        title: 'tip',
        message: 'Hello World!'
      })
    }
  }
}
</script>
# Toast 提示
----
用于页面中展示提示信息。

### 基本用法
页面中的浮层元素，自动消失。<br>
<button @click="showMsgBox">showMsgBox</button>

::: demo
```html


```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。也可通过默认 slot 传入 |	string   |	—           |	—       |
|type	      | 主题                                |	string    |	success/warning/info/error|	info |
|description |	辅助性文字                         |	string    |	—             |	—      |
|closable   |	是否可关闭                           |	boolean   |	—	            | true   |
|center     |	文字是否居中                         |	boolean  |	—            |	true  |
|close-text	| 关闭按钮自定义文本                    |	string   |	—            |	—     |
|show-icon  |	是否显示图标                         |	boolean  	| —             |	false  |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |
