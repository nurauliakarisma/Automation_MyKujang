class Dashboard {

    //Menu dashboard
    static Personel() {
        cy.contains('Personel').should('be.visible').click();
    }

    //Assert 
    static PagePersonelTampil() {
        cy.url().should('include', '/admin/portal?module=personel');
    }
}

export default Dashboard;
