export class User {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public avatarUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
