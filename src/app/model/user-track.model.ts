import { User } from './user.model';

export class UserTrack {
  constructor(
    public id: number,
    public ownerUser: User,
    public name: string,
    public audioUrl: string,
    public pictureUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
