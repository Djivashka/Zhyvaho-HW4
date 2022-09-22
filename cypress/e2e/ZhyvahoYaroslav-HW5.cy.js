/// <reference types="cypress"/>

const testWithParams = ({arg, expected}) => 
function(){
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('.theme-preview').first().click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').clear().type(arg[0]);
    cy.get('[placeholder="Jane Doe"]').should('contain.value', expected[0])
    cy.get('[placeholder="Email"]').first().clear().type(arg[1]);;
    cy.get('[placeholder="Email"]').first().should('contain.value', expected[1])
    cy.get('.custom-checkbox').first().click();
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').first().click();
}

it('HW5', testWithParams({arg:['Zhyvaho Yaroslav', 'zhyvaho.y@gmail.com'],  expected: ['Zhyvaho Yaroslav', 'zhyvaho.y@gmail.com']}));
