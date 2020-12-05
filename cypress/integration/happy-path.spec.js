describe('Happy path Form', () => {
  it('Should complete all the data and return the weather info', () => {
    cy.visit('/');
    cy.get('input[name=city]').type('Madrid');
    cy.get('input[name=country]').type('es');

    cy.get('button').click();
    cy.get('button').should('have.attr', 'disabled');

    cy.get('.weather__info').find('.weather__key').should('have.length', 4);

    cy.get('button').should('not.have.attr', 'disabled');
  });
});
