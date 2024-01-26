import { Module } from '@nestjs/common'
import { YnabModule } from './ynab/ynab.module'
import { YnaacModule } from './ynaac/ynaac.module'
@Module({
  imports: [YnabModule, YnaacModule],
})
export class AppModule {}
