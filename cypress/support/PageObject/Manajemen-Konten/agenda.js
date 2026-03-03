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
    static ClickEditAgenda() {
        cy.get('i.mdi-pencil.mdi').should('be.visible').click();
    }
    
    //Form Agenda
    static fillJudulAgenda(judul) {
        cy.get('#input-v-1-0-10').should('be.visible').clear().type(judul);
    }
    static TanggalMulaiAgenda(WaktuMulaiAgenda) {
        cy.contains('label', /Tanggal Mulai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(WaktuMulaiAgenda);
    }
    static TanggalSelesaiAgenda(TanggalSelesaiAgenda) {
        cy.contains('label', /Tanggal Selesai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(TanggalSelesaiAgenda);
    }
    static WaktuMulaiAgenda(WaktuMulaiAgenda) {
        cy.contains('label', /Waktu Mulai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(WaktuMulaiAgenda);
    }
    static WaktuSelesaiAgenda(WaktuSelesaiAgenda) {
        cy.contains('label', /Waktu Selesai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(WaktuSelesaiAgenda);
    }
    static lokasiAgenda(lokasiAgenda) {
        cy.contains('label', /Lokasi/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(lokasiAgenda);
    }
    static deskripsiAgenda(deskripsiAgenda) {
        cy.contains('label', /Deskripsi/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(deskripsiAgenda);
    }

    //Form Edit Agenda
    static EditJudulAgenda(judul) {
        cy.get('#input-v-1-0-10').should('be.visible').clear().type(judul);
    }
    static WaktuMulaiAgendaEdit(WaktuMulaiAgenda) {
        cy.contains('label', /Waktu Mulai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(WaktuMulaiAgenda);
    }
    static WaktuSelesaiAgendaEdit(WaktuSelesaiAgenda) {
        cy.contains('label', /Waktu Selesai/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(WaktuSelesaiAgenda);
    }
    static lokasiAgendaEdit(lokasiAgenda) {
        cy.contains('label', /Lokasi/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(lokasiAgenda);
    }
    static deskripsiAgendaEdit(deskripsiAgenda) {
        cy.contains('label', /Deskripsi/i).then($label => {
            cy.get('#' + $label.attr('for'))
        }).should('be.visible').clear().type(deskripsiAgenda);
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