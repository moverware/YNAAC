import { Test, TestingModule } from '@nestjs/testing'
import { YnaacService } from './ynaac.service'

describe('YnaacService', () => {
  let service: YnaacService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YnaacService],
    }).compile()

    service = module.get<YnaacService>(YnaacService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
