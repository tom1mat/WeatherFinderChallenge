describe('Error path Form', () => {
  it('Should complete all the data and return the weather info', () => {
    cy.visit('/');
    cy.get('input[name=city]').type('asd');
    cy.get('input[name=country]').type('asd');

    cy.get('button').click();

    cy.get('.weather__error');
  });
});
