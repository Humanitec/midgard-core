import Core from '../src/main.js';
import { compose } from 'redux';

describe('Core', () => {
  describe('Is an object', () => {
    it('core is an instance of Object', () => {
      expect(Core instanceof Object).toBe(true);
    });
  });

  describe('Compose', () => {
    let methods = {a:() => {},b:() => {},c:() => {}};
    beforeEach(() => {
      Object.keys(methods).forEach((key) => {spyOn(methods,key).and.callThrough();});
    });
    it ('calling compose calls each method', () => {
      const method = compose(methods.a, methods.b, methods.c);
      method();
      Object.keys(methods).forEach((key) => {expect(methods[key]).toHaveBeenCalled();})
    });
  });
});


