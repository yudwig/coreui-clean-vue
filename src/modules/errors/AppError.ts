export abstract class AppError extends Error {

  protected constructor(props) {
    super(props);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}