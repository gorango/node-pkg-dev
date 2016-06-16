import * as should from 'should';
import { temp } from './index';

describe('temp', function() {
  describe('#sanity()', function() {
    it('should return "it works"', function() {
      temp.sanity().should.equal('it works');
    });
  });
});
