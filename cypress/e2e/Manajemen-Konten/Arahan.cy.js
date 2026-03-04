import LoginPage from "../../support/PageObject/login";
import Arahan from "../../support/PageObject/Manajemen-Konten/arahan";

describe('Manajemen Konten - Arahan', () => {

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture('login').as('loginData');
        cy.fixture('arahan').as('ArahanData');
        LoginPage.visitadmin(); 
    });
});