// interface ParentA {
//
// }
//
// interface ParentB {
//
// }
//
// class ChildA implements ParentA {
//   name: 'childA'
// }
//
// class ChildB implements ParentB {
//
// }
//
// class ChildC {
//
// }
//
// interface ModInterface<T> {
//   (): T;
// }
//
// class Mod<T> {
//   type: T;
//   constructor({module: T}) {
//     console.log(this.type);
//   }
// }
//
// interface mMap {
//   common: {
//     // support: ModInterface<ParentA>
//     support: ModInterface<ChildA>
//   }
// }
// const testObj: mMap = {
//   common: {
//     // support: new Mod({module: ChildA})
//     support: () => {return new ChildB()}
//   }
// };
//
// test('asdf', () => {
//   console.log(testObj);
// });


class Support {
  readonly name = 'support';
  constructor() {
    console.log('support constructor is called.');
  }
}

class Repository {
  readonly name = 'repository';
  readonly support;
  constructor(modules) {
    Object.assign(this, modules);
    console.log('repository constructor is called. name: ', this.name);
  }
}

class Factory {
  name = 'factory';
  readonly support;
  constructor() {
    console.log('factory constructor is called. name: ', this.name);
  }
}

class Gateway {
  repository;
  constructor(input: Required<Gateway>) {
    console.log('gateway constructor is called. input: ', input);
    if (!(input.repository instanceof Repository)) {
      throw Error('Gateway construct failed. repository is not Repository.');
    }
    this.repository = input.repository;
  }

  public gatewayHello() {
    console.log('gateway hello is called. repository name: ', this.repository.name);
  }
}

class Translator {
  gateway;
  factory;
  constructor(input: Required<Translator>) {

    console.log('translator constructor is called. input: ', input);
    if (!(input.gateway instanceof Gateway)) {
      throw Error('Translator construct failed. gateway is not Gateway.');
    }
    if (!(input.factory instanceof Factory)) {
      throw Error('Translator construct failed. factory is not Gateway.');
    }

    Object.assign(this, input);
  }

  public test() {
    console.log('asdf');
  }
}

interface ContainerMap {
  common: {
    support
  },
  repository: {
    user
  },
  factory: {
    item
  },
  gateway: {
    item
  },
  translator: {
    item
  },
}

interface ContainerInterface {
  build(): ContainerMap;
}

class Container implements ContainerInterface {

  private container: ContainerMap = {
    common: {
      support: {
        module: Support
      }
    },
    repository: {
      user: {
        module: Repository
      }
    },
    factory: {
      item: {
        module: Factory,
      }
    },
    gateway: {
      item: {
        module: Gateway,
        args: {
          repository: 'repository/user'
        }
      }
    },
    translator: {
      item: {
        module: Translator,
        args: {
          gateway: 'gateway/item',
          factory: 'factory/item'
        }
      }
    },
  };

  build(): ContainerMap {
    return this.container;
  }
}


const constContainer: ContainerMap = {
  common: {
    support: {
      module: Support
    }
  },
  repository: {
    user: {
      module: Repository
    }
  },
  factory: {
    item: {
      module: Factory,
    }
  },
  gateway: {
    item: {
      module: Gateway,
      args: {
        repository: 'repository/user'
      }
    }
  },
  translator: {
    item: {
      module: Translator,
      args: {
        gateway: 'gateway/item',
        factory: 'factory/item'
      }
    }
  },
};


class ContainerPath {

  path: string;

  constructor(path: string) {
    console.log('ContainerModulePath is created. path: ', path);
    this.path = path;
  }

  public resolve(map: ContainerMap): object {
    console.log('resolve start. path: ', this.path);

    const list = this.path.split('/');
    let pointer = map;

    list.forEach(node => {
      console.log('node: ', node);
      if (pointer[node] === undefined) {
        console.log('error. not found node: ', node);
        return null;
      }
      pointer = pointer[node];
    });
    return pointer;
  }
}

class TreeMap {

  readonly obj: object;
  private pathSeparator = '/';

  constructor(obj: object) {
    this.obj = obj;
  }

  private isLeaf(node: object) {
    return node.hasOwnProperty('module');
  }

  public pickNode(path: string) {
    const list = path.split(this.pathSeparator);
    let pointer = this.obj;
    list.forEach(node => {
      if (pointer[node] === undefined) {
        return null;
      }
      pointer = pointer[node];
    });
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

const treeSample = {
  common: {
    a: {
      b: {
        c: {
          module: 'testModule',
          args: {
            a: 1,
            b: 2,
            c: {
              module: {
                a: 'failedModule'
              }
            }
          }
        },
        d: {
          e: {
            miss: {
              test: '1'
            }
          }
        }
      },
      g: {
        module: 'test2',
        args: {
          a: 10,
          b: 20
        }
      }
    },
    f: {
    }
  },
  repository: {
    user: {
      module: Repository
    }
  },
};


// test('tree', () => {
//   const tree = new TreeMap(treeSample);
//   const res = tree.gatherLeafs('common');
//   console.log('**************** result **************');
//   console.log(res);
// });

class Provider {

  private containerTree: TreeMap;
  // private container: ContainerMap;
  private cacheMap: {};
  private commonArgs = null;

  constructor(container: ContainerMap) {
    this.containerTree = new TreeMap(container);
    // this.container = container;
    this.cacheMap = {};
    // console.log('provider constructor is called. container: ', this.container);
    const commonLeafs = this.containerTree.gatherLeafs('common');
    console.log('commonleafs: ', commonLeafs);
    if (commonLeafs.length) {
      this.commonArgs = {};
      commonLeafs.forEach(leaf => {
        console.log('leaf: ', leaf);
        this.commonArgs[leaf.name] = 'common' + leaf.path;
      });
    }
    console.log('provider constructor is called. common paths: ', this.commonArgs);
  }

  private isAddCommon(name) {
    const paths = name.split('/');
    if (paths[0] === 'common') {
      return false;
    }
    return Boolean(this.commonArgs);
  }

  public pick(name: string) {
    console.log('pick is called. name: ', name);
    if (this.cacheMap[name]) {
      console.log('cache found. ', this.cacheMap[name]);
      return this.cacheMap[name];
    } else {
      console.log('cache is not found. name: ', name, ', now cache: ', this.cacheMap );
    }
    // const path = new ContainerPath(name);
    // const node = path.resolve(this.container);
    const node = this.containerTree.pickNode(name);
    console.log('resolve done. node: ', node);

    if (this.isAddCommon(name)) {
      console.log('common found.');
      if (!node.hasOwnProperty('args')) {
        console.log('args not found. init args.');
        node['args'] = {};
      }
      Object.assign(node['args'], this.commonArgs);
      console.log('common modules are assigned. node: ', node);
    }
    if (node.hasOwnProperty('args')) {
      console.log('node has args. args: ', node['args']);
      let args = {};
      console.log('args loop start. name: ', name);
      Object.keys(node['args']).forEach(argKey => {
        console.log('argKey: ', argKey);
        if (typeof args[argKey] === 'string') {
          args[argKey] = this.pick(node['args'][argKey]);
        }
      });
      const module = new node['module'](args);
      // this.storeCache(name, module);
      this.cacheMap[name] = module;
      console.log('args loop done. name: ', name, ', args: ', args);
      return this.cacheMap[name];
    } else {
      // this.storeCache(name, new node['module']());
      this.cacheMap[name] = new node['module']();
      // this.cacheMap[name] = ;
      console.log('cacheMap: ', this.cacheMap);
      console.log('return: ', name);
      return this.cacheMap[name];
    }
  }



  // public pick(name: string) {
  //   console.log('pick is called. name: ', name);
  //
  //   if (this.cacheMap[name]) {
  //     console.log('cache found. ', this.cacheMap[name]);
  //     return this.cacheMap[name];
  //   } else {
  //     console.log('cache is not found. name: ', name, ', now cache: ', this.cacheMap );
  //   }
  //   const path = new ContainerPath(name);
  //   const node = path.resolve(this.container);
  //
  //   console.log('resolve done. node: ', node);
  //
  //
  //   if (this.container.hasOwnProperty('common')) {
  //     console.log('common found.');
  //     if (!node.hasOwnProperty('args')) {
  //       console.log('args not found. init args.');
  //       node['args'] = {};
  //     }
  //     Object.assign(node['args'], this.container.common);
  //     console.log('common modules are assigned. node: ', node);
  //   }
  //
  //
  //   if (node.hasOwnProperty('args')) {
  //     console.log('node has args. args: ', node['args']);
  //
  //     let args = {};
  //
  //     console.log('args loop start. name: ', name);
  //     Object.keys(node['args']).forEach(argKey => {
  //       console.log('argKey: ', argKey);
  //       args[argKey] = this.pick(node['args'][argKey]);
  //     });
  //
  //     const module = new node['module'](args);
  //     // this.storeCache(name, module);
  //     this.cacheMap[name] = module;
  //     console.log('args loop done. name: ', name, ', args: ', args);
  //     return this.cacheMap[name];
  //
  //   } else {
  //
  //     // this.storeCache(name, new node['module']());
  //     this.cacheMap[name] = new node['module']();
  //     // this.cacheMap[name] = ;
  //     console.log('cacheMap: ', this.cacheMap);
  //     console.log('return: ', name);
  //     return this.cacheMap[name];
  //   }
  // }
}

test('pick', () => {
  const container = new Container();
  // const provider = new Provider(container.build());
  const provider = new Provider(constContainer);
  const translator = provider.pick('translator/item');
  console.log('result 1. translator: ', translator);

  // const translator2 = provider.pick('translator/item');
  // console.log('result 2. translator: ', translator2);
  // translator.test();
});



