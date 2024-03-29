describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the expected navigation', () => {
    cy.contains ("thr0n's Blog")
    cy.contains (/^Blog$/)
    cy.contains (/^GitHub$/)
    cy.contains (/^LinkedIn$/)
    cy.contains (/^Mastodon$/)
    cy.contains("I'm Hendrik, Hamburg based software engineer")
  })

  it('links to the desired external resources', () => {
    cy.get('header > div > div > a:first').should('have.attr', 'href').and('equal', 'https://github.com/thr0n')
    cy.get('header > div > div > a:nth-child(2)').should('have.attr', 'href').and('equal', 'https://www.linkedin.com/in/boelcke/')
    cy.get('header > div > div > a:nth-child(3)').should('have.attr', 'href').and('equal', 'https://nerdculture.de/@thr0n')
  })
  
  it('shows the blog section', () => {
    cy.contains("Latest Posts")
  })
})