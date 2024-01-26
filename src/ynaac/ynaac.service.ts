import { Injectable } from '@nestjs/common'
import { YnabService } from 'src/ynab/ynab.service'
import { YnaacTransaction } from './types'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class YnaacService {
  private password: string

  constructor(
    private readonly ynabService: YnabService,
    private readonly configService: ConfigService,
  ) {
    this.password = this.configService.get<string>('PASSWORD')
  }

  public processTransaction = async (transaction: YnaacTransaction) => {
    if (transaction.password !== this.password) {
      throw new Error('Invalid password')
    }

    return await this.ynabService.createTransaction({
      ...transaction,
      amount: transaction.amount * 1000,
      cleared: 'cleared',
      approved: false,
    })
  }
}
