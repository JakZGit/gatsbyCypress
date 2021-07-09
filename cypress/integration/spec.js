// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
it("shows the Hello fail", () => {
  cy.visit("/").contains("Hello worjld!")
})

it("shows the Hello success", () => {
  cy.visit("/").contains("Hello world!")
})

