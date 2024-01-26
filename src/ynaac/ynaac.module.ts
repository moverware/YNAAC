import { Module } from '@nestjs/common'
import { YnaacController } from './ynaac.controller'
import { YnaacService } from './ynaac.service'
import { YnabModule } from 'src/ynab/ynab.module'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

@Module({
  controllers: [YnaacController],
  providers: [YnaacService],
  imports: [
    YnabModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PASSWORD: Joi.string(),
      }),
    }),
  ],
})
export class YnaacModule {}
