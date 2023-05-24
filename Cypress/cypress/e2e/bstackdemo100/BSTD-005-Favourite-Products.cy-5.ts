describe('BSTD 005 - Favourite Products', () => {
  it('Select Samsung using xpath selector, favourite 2nd and 5th items, check count in favourites', () => {
    cy.visit('https://bstackdemo.com/')
    .get("#signin")
    .click()
    .get("#react-select-2-input")
    .type("demouser{enter}",{force: true})
    .get("#react-select-3-input")
    .type("testingisfun99{enter}",{force: true})
    .get("#login-btn")
    .click()
    .get("span")
    .contains("Samsung")
    .click()
    .get(".shelf-item")
    .should('have.length',7)
    .get(".shelf-item:nth-child(3) > .shelf-stopper > button > span > svg")
    .click()
    .get(".shelf-item:nth-child(6) > .shelf-stopper > button > span > svg")
    .click()
    .get("#favourites")
    .click()
    .get(".shelf-item")
    .should('have.length',2)
  })
})
