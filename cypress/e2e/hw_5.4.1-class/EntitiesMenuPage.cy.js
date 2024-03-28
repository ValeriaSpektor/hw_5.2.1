export class EntitiesMenuPage {
    elements = {
        passwordMenuOption: () => cy.get('#entity-menu > div > a:nth-child(5)'), // Ссылка на страницу смены пароля в меню сущностей
    };

    goToPasswordPage() {
        cy.get('#entity-menu').click(); 
        this.elements.passwordMenuOption().click(); 
    }
}
