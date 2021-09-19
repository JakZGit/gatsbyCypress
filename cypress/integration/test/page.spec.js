// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />
describe("testing", () => {
  it("shows the Hello page", () => {
    cy.visit("/").contains("Hello world!")
  })
})
