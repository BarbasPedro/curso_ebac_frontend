/// <reference types="cypress" />

describe('Testes na página Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve incluir dois contatos', () => {
    cy.get('input[type="text"]').type('Ped Barbas')
    cy.get('input[type="email"]').type('pedro@barbas.pt')
    cy.get('input[type="tel"]').type('91234-5678')
    cy.get('button[type="submit"]').click()

    cy.get('input[type="text"]').type('Pedro Barbas')
    cy.get('input[type="email"]').type('pedro@barbas.pt')
    cy.get('input[type="tel"]').type('91234-5678')
    cy.get('button[type="submit"]').click()

    cy.screenshot("add-test");
  });

  it('Deve editar um contato', () => {
    cy.get('button[class="edit"]').first().click()
    cy.get('input[value="Ped Barbas"').clear().type('Pedro Barbas')
    cy.get('button[type="submit"]').first().click()

    cy.screenshot("edit-test");
  });

  it('Deve apagar um dos contatos', () => {
    cy.get('button[class="delete"]').first().click()

    cy.screenshot("delete-test");
  })
  })
