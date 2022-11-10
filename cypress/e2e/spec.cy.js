describe('Cypress.minimatch', () => {
  it('demonstrates the difference between * and **', () => {
    // test that the glob you're writing matches the request's url
    expect(Cypress.minimatch('/users/1/comments', '/users/*/comments')).to.equal(true)
    // test that the glob you're writing does not match the request's url
    expect(Cypress.minimatch('/users/1/comments/2', '/users/*/comments')).to.equal(false)
    // ** matches against all downstream path segments
    expect(Cypress.minimatch('/foo/bar/baz/123/quux?a=b&c=2', '/foo/**')).to.equal(true)
    // whereas * matches only the next path segment
    expect(Cypress.minimatch('/foo/bar/baz/123/quux?a=b&c=2', '/foo/*')).to.equal(false)
  })
})
