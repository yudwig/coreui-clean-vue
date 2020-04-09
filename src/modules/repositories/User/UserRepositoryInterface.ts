import {User} from "../../entities/User";
import {UserId} from "../../valueobjects/UserId";

interface OutputInterface {
  data: {
    user: User
  },
  err: Error
}

export interface UserRepositoryInterface {
  get(): OutputInterface;
  find(userId: UserId): OutputInterface;
  create(user: User): OutputInterface;
  delete(userId: UserId): OutputInterface;
  update(userId: UserId, user: User): OutputInterface;
}