/// <reference types="cypress"/>

const toasterConfiguration = [
    {position: '#nb-option-24',
    title: 'title1',
    content: 'content1',
    time: '1000',
    type: '#nb-option-32',
    icon: 'email',
    color: 'rgb(98, 0, 238)',
    toastPosition: {0: 'flex-end', 1: 'flex-start'} },

    {position: '#nb-option-25',
    title: 'title2',
    content: 'content2',
    time: '2000',
    type: '#nb-option-33',
    icon: 'checkmark',
    color: 'rgb(96, 175, 32)',
    toastPosition: {0: 'flex-start', 1: 'flex-start'} },

    {position: '#nb-option-26',
    title: 'title3',
    content: 'content3',
    time: '3000',
    type: '#nb-option-34',
    icon: 'question-mark',
    color: 'rgb(4, 149, 238)',
    toastPosition: {0: 'flex-start', 1: 'flex-end'}},

    {position: '#nb-option-27',
    title: 'title4',
    content: 'content4',
    time: '10000',
    type: '#nb-option-35',
    icon: 'alert-triangle',
    color: 'rgb(255, 159, 5)',
    toastPosition: {0: 'flex-end', 1: 'flex-end'}},
]

// before(() => {
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//     cy.get('.theme-preview').first().click();
//     cy.get('.menu-title.ng-tns-c141-19').click();
//     cy.get('.menu-title.ng-tns-c141-23').click();
// })

toasterConfiguration.forEach(({position, title, content, time, type, icon, color, toastPosition}) => {
    it(`Checkout params for ${position} and ${type}`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('.theme-preview').first().click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('.menu-title.ng-tns-c141-23').click();
        cy.wait(3000)
        cy.get('[type="button"]').eq(1).click();
        cy.get(position).click();
        cy.get('[name="title"]').clear().type(title);
        cy.get('[name="content"]').clear().type(content);
        cy.get('[type="number"]').clear().type(time);
        cy.get('[type="button"]').eq(2).click();
        cy.get(type).click();
        cy.get('button:contains("Show toast")').click()
        
        cy.get('[class="title subtitle"]').should('contain', title)
        cy.get('[class="message"]').should('contain', content)
        cy.get('nb-toast').find('g').eq(1).should('have.attr', 'data-name').and('eq', icon)
        cy.get('nb-toast').should('have.css', 'background-color').and('eq', color)
        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', toastPosition[0])
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', toastPosition[1])

        
      

        
            
        


    })
})