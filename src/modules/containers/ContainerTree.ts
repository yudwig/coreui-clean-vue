export class ContainerTree {

  readonly obj: object;
  private pathSeparator = '/';
  private isDebug = false;

  constructor(obj: object) {
    this.obj = obj;
  }

  private isLeaf(node: object) {
    return node.hasOwnProperty('module');
  }

  private debug(...messages) {
    if (this.isDebug) {
      console.log(...messages);
    }
  }

  public pickNode(path: string) {
    const list = path.split(this.pathSeparator);
    this.debug('picknode start. path: ', path, ', list: ', list);
    let pointer = this.obj;
    list.forEach(node => {
      this.debug('node: ', node);
      if (pointer[node] === undefined) {
        this.debug('undefined. pointer[node]', pointer[node]);
        throw Error('not found path. path: ' + path);
      }
      pointer = pointer[node];
    });
    this.debug('picknode end.');
    return pointer;
  }

  public gatherLeafs(rootPath: string) {
    const root = this.pickNode(rootPath);
    let leafs = [];
    const dig = (node, path) => {
      if (typeof node !== 'object') {
        return;
      }
      if (this.isLeaf(node)) {
        const paths = path.split(this.pathSeparator);
        leafs.push({
          node: node,
          path: path,
          name: paths[paths.length - 1]
        });
      } else {
        Object.keys(node).forEach(key => {
          dig(node[key], path + this.pathSeparator + key);
        });
      }
    };
    dig(root, '');
    return leafs;
  }
}
