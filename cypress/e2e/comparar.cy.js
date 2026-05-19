describe('Comparação de preços - Fast Price', () => {
  it('acessar site', () => {

    // Teste de acesso
    cy.visit('https://fast-pricecompany.vercel.app/')

  });
    //1 Cenário (preenche apenas primeira lacuna e executa a busca)

it('preenche apenas uma lacuna e busca preço', () => {
   
  
cy.visit('https://fast-pricecompany.vercel.app/')
cy.get('#origin-input').type('São Paulo')
cy.get('.imput-form > button').click()  // erro
});

// 2 Cenário (sucesso!)

it('preenche as duas corretamente e busca', () => {


cy.visit('https://fast-pricecompany.vercel.app/')
cy.get('#origin-input').type('São Paulo')
cy.get('#destination-input').type("Duque de Caxias")
cy.get('.imput-form > button').click()

});

it('valida informações', () => {         
cy.visit('https://fast-pricecompany.vercel.app/')

cy.get('.imput-form > button').should('be.visible')
cy.get('.weather-container').should('exist')
cy.get(':nth-child(1) > .card-header > .hamburger').click()
cy.contains('UberX')






  });


})