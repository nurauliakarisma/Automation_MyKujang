class Agenda {
    // Click Agenda

    static ClickManajementKonten() {
        cy.contains('Manajemen Konten').should('be.visible').click();
    }

    static ClickAgenda() {
        cy.contains('Agenda').should('be.visible').click();
    }

    static ClickTambahAgenda() {
        cy.get('i.mdi-plus').should('be.visible').click();
    }

    static ClickSimpanAgenda() {
        cy.get('.v-btn__content').contains('Simpan').should('be.visible').click();
    }

    //Form Agenda
    static fillJudulAgenda(judul) {
        cy.get('#input-v-6-0-10').should('be.visible').clear().type(judul);
    }

    static WaktuMulaiAgenda(WaktuMulaiAgenda) {
        cy.get('#input-v-6-0-19-label').should('be.visible').clear().type(WaktuMulaiAgenda);
    }

    static WaktuSelesaiAgenda(WaktuSelesaiAgenda) {
        cy.get('#input-v-6-0-22-label').should('be.visible').clear().type(WaktuSelesaiAgenda);
    }

    static lokasiAgenda(lokasiAgenda) {
        cy.get('#input-v-6-0-25-label').should('be.visible').clear().type(lokasiAgenda);
    }

    static deskripsiAgenda(deskripsiAgenda) {
        cy.get('#input-v-6-0-28-label').should('be.visible').clear().type(deskripsiAgenda);
    }

    // Assert Agenda
    static AssertManajementKontenCard() {
        cy.contains('Manajemen Konten').should('be.visible');
    }

    static AssertAgendaCard() {
        cy.contains('Agenda').should('be.visible');
    }
    
}
export default Agenda;