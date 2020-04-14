export class Route {

  readonly name;
  readonly path;
  readonly title;

  constructor(name: string, title: string, path: string) {
    this.name = name;
    this.title = title;
    this.path = path;
  }

  public equals(route: Route) {
    return route && this.path === route.path;
  }
}