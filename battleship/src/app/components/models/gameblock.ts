export class GameBlock {
  constructor(public xCrd: number, public yCrd: number) {
  }

  public toString(): string {
    return `[${this.xCrd},${this.yCrd}]`;
  }
}
