import React from 'react'

import Form from './index'

describe('<Form />', () => {
  it('renders', () => {
    cy.mount(<Form />)
    cy.get('input[name="name"]').type('Max Emilian Verstappen')
    cy.get('input[name="email"]').type('max@formulaone.com')
    cy.get('input[name="dateOfBirth"]').type('1990-01-01')
    cy.get('input[name="favoriteColor"]').type('Blue')
    cy.get('input[type="range"]').invoke('val', '70000').trigger('input')
    cy.get('button').should('have.text', 'Start')
  })
})