import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import {
  components as ttComponents,
  initNativeApi,
  hostConfig
} from '@tarojs/plugin-platform-tt/dist/runtime-utils'
import { initFeishuApi } from './apis'
import { components } from './components'

hostConfig.initNativeApi = function (taro) {
  initNativeApi(taro)
  initFeishuApi(taro)
}

mergeReconciler(hostConfig)
mergeInternalComponents(ttComponents)
mergeInternalComponents(components)

