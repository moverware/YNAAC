import { Module } from '@nestjs/common'
import { YnaacController } from './ynaac.controller'
import { YnaacService } from './ynaac.service'
import { YnabModule } from 'src/ynab/ynab.module'

@Module({
  controllers: [YnaacController],
  providers: [YnaacService],
  imports: [YnabModule],
})
export class YnaacModule {}
