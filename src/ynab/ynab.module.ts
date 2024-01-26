import { Module } from '@nestjs/common'
import { YnabService } from './ynab.service'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import { YnabController } from './ynab.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        YNAB_ACCESS_TOKEN: Joi.string().required(),
        YNAB_BUDGET_ID: Joi.string(),
        YNAB_ACCOUNT_ID: Joi.string(),
        PASSWORD: Joi.string(),
      }),
    }),
  ],
  controllers: [YnabController],
  providers: [YnabService],
  exports: [YnabService],
})
export class YnabModule {}
