describe('Автотесты для формы логина и пароля на Login.QA.Studio', function () {
    
    it('Проверка на позитивный кейс авторизации 1.1-1.2', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    
    it('Проверка на неготивный кейс авторизации 1.3-1.4', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        cy.reload();
        cy.get('#mail').type('ger@doln.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    
    it('Проверка на негативный кейс валидации 1.5-1.6', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqa');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.reload();
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Один длинный автотест', function () {
        cy.visit('https://huntingpony.com');
        cy.get('[data-index="7"] > .header__collections-controls > .header__collections-link').click();
        cy.get('.product-preview__img-1').click();  
        cy.wait (1000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait (1000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
    })
})