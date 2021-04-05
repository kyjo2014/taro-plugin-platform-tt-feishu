import { noPromiseApis, needPromiseApis } from './apis-list'
import { processApis } from '@tarojs/shared'

declare const tt: any

export function initFeishuApi (taro) {
  processApis(taro, tt, {
    noPromiseApis,
    needPromiseApis
  })
}
