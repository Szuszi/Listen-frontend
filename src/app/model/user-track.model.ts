export class UserTrack {
  constructor(
    public id: number,
    public userId: number,
    public name: string,
    public audioUrl: string,
    public pictureUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
