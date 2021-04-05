# `@tarojs/plugin-platform-tt-feishu`

Taro 插件。用于支持编译为字节跳动 飞书 端小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-tt-feishu'
  ]
}
```

#### 2. 编译为字节跳动 feishu 端小程序

```shell
taro build --type feishu
taro build --type feishu --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'feishu') {
  // ...
}
```

##### 组件

字节跳动 飞书 端小程序拓展了一些独有组件，可像普通 Taro 内置组件一样使用，例：

```js
import { Editor, CustomizedInput } from '@tarojs/components'

function Index () {
  return (
    <>
      <Editor></Editor>
      <CustomizedInput></CustomizedInput>
    </>
  )
}
```
