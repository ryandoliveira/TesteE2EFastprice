

ETAPA 1:
npm install cypress --save-dev
npx cypress open 


ETAPA 2: 

organização dos testes


describe() 

organizar nome do teste

it(     , () => {           }))
cenário desse teste


ETAPA 3:

Manipulação do meu site com

cy.visit()                     visitar
cy.get()  cy.type()           acessar e inserir                     
cy.click()                    clicar


ETAPA 4:

Erro do CORS solucionado temporariamente com  código "chromeWebSecurity: false" no arquivo cypress.config.js


ETAPA 5:

.should()                     “Verifique se algo é verdadeiro.”
.should('contain')          cy.contains valida da mesma forma, portanto ele é redundante 
cy.contains()          para validar se texto existe 
