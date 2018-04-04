import 'angular-mocks';

describe('Sample test' , () => {
    beforeEach(angular.mock.module('app'));
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});