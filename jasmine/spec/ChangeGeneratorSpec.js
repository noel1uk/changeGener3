describe('ChangeGenerator', function() {

  it('returns an empty array when given nothing', function() {
    cg = new ChangeGenerator();
    expect(cg.returnChange()).toEqual([]);
  });
});