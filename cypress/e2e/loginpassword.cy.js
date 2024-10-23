describe('Проверка авторизации', function () {

    it('Правильные логин и пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })


       it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Правильный логин, неправильный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

            it('Неправильный логин, правильный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolniko.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#messageHeader').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })
        
                it('Логин без @, правильный пароль', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('germandolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                    cy.get('#messageHeader').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })

                    it('Логин с заглавными буквами, правильный пароль', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('GerMan@Dolnikov.ru');
                        cy.get('#pass').type('iLoveqastudio1');
                        cy.get('#loginButton').click();
                        cy.get('#messageHeader').contains('Такого логина или пароля нет');
                        cy.get('#messageHeader').should('be.visible');
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                        })
        })