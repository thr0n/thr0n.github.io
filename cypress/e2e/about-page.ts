describe('About Page', () => {
  it('has a working navigation entrey', () => {
    cy.visit('/')
    cy.contains(/^About$/).click()
  })

  it('has an about page with subsections', () => {
    cy.visit('/about')
    cy.get('h1').contains('About')
    cy.contains ("Hi there!")
    cy.contains("Working experience")
    cy.contains("Personal interests")
  })


  it('show an image of me standing at a beach', () => {
    cy.visit('/about')
    cy.get('[alt="Hendrik, standing at the beach"]').should("be.visible")
  })
})