import { Test, TestingModule } from '@nestjs/testing'
import { YnaacController } from './ynaac.controller'

describe('YnaacController', () => {
  let controller: YnaacController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YnaacController],
    }).compile()

    controller = module.get<YnaacController>(YnaacController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
