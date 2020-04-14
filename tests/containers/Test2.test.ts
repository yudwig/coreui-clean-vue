
interface InterfaceA {
  name,
  f1(),
  f2()
}

class ModA implements InterfaceA {
  name: 'a';

  f1(){

  }

  f2() {

  }
}

class ModB {
  name: 'b'
}

interface Parent {
  hello();
}

class A implements Parent {

  private mod: InterfaceA;

  constructor(modules: Required<A>) {
  // constructor(modules: Pick<A, 'mod'>) {
    console.log('mod: ', this.mod);
  }

  hello() {
  }
}

test('test', () => {
  // const a = new A({mod: new ModA()});
});



