import {ContainerMap} from "../containers/ContainerMap";
import {ContainerTree} from "../containers/ContainerTree";

export class Provider {

  private containerTree: ContainerTree;
  private cacheMap: {};
  private commonArgs = null;
  private isDebug = false;

  private debug(...messages) {
    if (this.isDebug) {
      console.log(...messages);
    }
  }

  constructor(container: ContainerMap) {
    this.containerTree = new ContainerTree(container);
    this.cacheMap = {};
    const commonLeafs = this.containerTree.gatherLeafs('common');
    this.debug('commonleafs: ', commonLeafs)
    if (commonLeafs.length) {
      this.commonArgs = {};
      commonLeafs.forEach(leaf => {
        this.debug('leaf: ', leaf);
        this.commonArgs[leaf.name] = 'common' + leaf.path;
      });
    }
    this.debug('provider constructor is called. common paths: ', this.commonArgs);
  }

  private isAddCommon(name) {
    const paths = name.split('/');
    this.debug('isAddCommon, paths: ', paths);
    if (paths[0] === 'common') {
      this.debug('path is common.');
      return false;
    }
    return Boolean(this.commonArgs);
  }

  public provide(name: string) {
    this.debug('pick is called. name: ', name);
    if (this.cacheMap[name]) {
      this.debug('cache found. ', this.cacheMap[name]);
      return this.cacheMap[name];
    } else {
      this.debug('cache is not found. name: ', name, ', now cache: ', this.cacheMap);
    }
    const node = this.containerTree.pickNode(name);
    this.debug('resolve done. node: ', node);

    if (this.isAddCommon(name)) {
      this.debug('common found.');
      if (!node.hasOwnProperty('args')) {
        this.debug('args not found. init args.');
        node['args'] = {};
      }
      Object.assign(node['args'], this.commonArgs);
      this.debug('common modules are assigned. node: ', node);
    }
    if (node.hasOwnProperty('args')) {
      this.debug('node has args. args: ', node['args']);
      let args = {};
      this.debug('args loop start. name: ', name);
      Object.keys(node['args']).forEach(argKey => {
        this.debug('argKey: ', argKey, ', type: ', typeof node['args'][argKey]);
        this.debug(node['args'][argKey]);
        if (typeof node['args'][argKey] === 'string') {
          args[argKey] = this.provide(node['args'][argKey]);
        } else {
          args[argKey] = node['args'][argKey];
        }
      });
      this.debug('module: ', node['module'], ', args: ', args);
      const module = new node['module'](args);
      this.cacheMap[name] = module;
      this.debug('args loop done. name: ', name, ', args: ', args);
      return this.cacheMap[name];
    } else {
      this.cacheMap[name] = new node['module']();
      this.debug('cacheMap: ', this.cacheMap);
      this.debug('return: ', name);
      return this.cacheMap[name];
    }
  }
}

