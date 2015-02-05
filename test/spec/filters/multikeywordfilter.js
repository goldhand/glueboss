'use strict';

describe('Filter: multiKeywordFilter', function () {

  // load the filter's module
  beforeEach(module('gluebossApp'));

  // initialize a new instance of the filter before each test
  var multiKeywordFilter;
  beforeEach(inject(function ($filter) {
    multiKeywordFilter = $filter('multiKeywordFilter');
  }));

  it('should return the input prefixed with "multiKeywordFilter filter:"', function () {
    var text = 'angularjs';
    expect(multiKeywordFilter(text)).toBe('multiKeywordFilter filter: ' + text);
  });

});
