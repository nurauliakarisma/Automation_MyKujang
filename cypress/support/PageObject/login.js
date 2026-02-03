class LoginPage {

    static visitadmin() {
        cy.visit('admin/login');
    }

    static fillUsername(username) {
        cy.get('[aria-labelledby="input-v-0-0-1-label"]').should('be.visible').clear().type(username);
    }

    static fillPassword(password) {
        cy.get('[aria-labelledby="input-v-0-0-4-label"]').should('be.visible').clear().type(password);
    }

    static submit() {
        cy.get('.v-btn__content').should('be.visible').click();
    }

    static login(username, password) {
        this.visitadmin();
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }

    static AssertLoginSuccess() {
        cy.url().should('include', '/admin/portal');  
    }

    //Assertion berita // --
    static AssertManajementKontenCard() {
        cy.contains('Manajemen Konten').should('be.visible');
    }

    static AssertManajementKontenSuccess() {
        cy.url().should('include', '/admin/portal?module=manajemen+konten');
    }

    static AssertBeritaSuccess() {
        cy.url().should('include', '/admin/cms/berita');
    }

    static AssertHalamanTambahBeritaSuccess() {
        cy.url().should('include', '/admin/cms/berita/tambahnp');
    }


}

export default LoginPage;

