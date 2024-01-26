import { YnabTransaction } from 'src/ynab/types'

export type YnaacTransaction = Omit<YnabTransaction, 'approved' | 'cleared'> & {
  password: string
}
