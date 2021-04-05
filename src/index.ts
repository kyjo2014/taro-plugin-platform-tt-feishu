import FEISHU from './program'
import type { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'feishu',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new FEISHU(ctx, config)
      await program.start()
    }
  })
}
