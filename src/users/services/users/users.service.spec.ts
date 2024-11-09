import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    // we create new DI container fo testing
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    // and then we ask container to create an instance of UsersService with of its dependencies
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
