describe('template spec', () => {
  it('passes', () => {
    cy.visit("public/index.html")
    cy.injectAxe()
    cy.checkA11y()
  })
})