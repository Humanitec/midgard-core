import Core from '../src/main.js';
import { compose } from 'redux';

describe('Core', () => {
  describe('Is an object', () => {
    it('core is an instance of Object', () => {
      expect(Core instanceof Object).toBe(true);
    });
  });
});


