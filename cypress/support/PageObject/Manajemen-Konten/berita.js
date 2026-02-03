class Addberita {

    //Form Tambah Berita // --
    static fillTitle(title) {
        cy.get('input[placeholder="Masukkan judul postingan"]').should('be.visible').clear().type(title);
    }

    static uploadPhoto(fileName) {
        cy.get('input.hidden-input').eq(0).selectFile(`cypress/fixtures/${fileName}`, { force: true });
    }
    
    static fillDeskripsi(deskripsi) {
        cy.get('.ql-editor').should('be.visible').clear().type(deskripsi);
    }

    static uploadThumbnail(fileName) {
        cy.get('input.hidden-input')
        .last() // .last() atau .eq(2) biasanya untuk Thumbnail karena posisinya paling bawah
        .selectFile(`cypress/fixtures/${fileName}`, { force: true });
    }

    //Prevew Berita // --

    static AssertPreviewBerita() {
        cy.contains('.v-img__img').should('be.visible');
    }

    static AssertPreviewBeritaTitle(title) {
        cy.contains(title).should('be.visible');
    }


    //Form Edit By card title // --
    static AssertUbahTitle(title) {
        cy.contains(`Ubah ${title}`).should('be.visible');
    }

    static fillEditTitle(title) {
        cy.contains(title).should('be.visible').clear().type(title);
    }

    
    
    //Click Button // --
    static ClickManajementKonten() {
        cy.contains('Manajemen Konten').should('be.visible').click();
    }

    static ClickBerita() {
        cy.contains('Berita').should('be.visible').click();
    }

    static ClickTambahBerita() {
        cy.get('.justify-space-between > .v-btn--elevated').should('be.visible').click();
    }

    static ClickDraftBerita() {
        cy.get('.v-btn__content').contains('Draft').should('be.visible').click();
    }

    static ClickPublikasiBerita() {
        cy.get('.v-btn__content').contains('Publikasi').should('be.visible').click();
    }

    static ClickResetBerita() {
        cy.get('.v-btn__content').contains('Reset').should('be.visible').click();
    }

    static ClickEllipsisByTitle(title) {
        cy.contains(title)
        .parents('.v-card') // sesuaikan wrapper
        .eq(0)
        .find('i.mdi-dots-vertical')
        .click();
    }

    static ClickDeleteIcon() {
        cy.contains('Delete').click();
    }

    static ClickEditIcon() {
        cy.contains('Edit').click();
    }

    static ClickPreviewIcon() {
        cy.contains('Preview').click();
    }

    static ClickKonfirmasiHapusBerita() {
        cy.get('.v-btn__content').contains('Konfirmasi').should('be.visible').click();
    }



    //Assertion berita // --
    static AssertManajementKontenCard() {
        cy.contains('Manajemen Konten').should('be.visible');
    }

    static AssertSimpanDraftBeritaSuccess() {
        cy.contains('Data berhasil disimpan').should('be.visible');
    }

    static AssertPublishBeritaSuccess() {
        cy.contains('Data berita berhasil diambil').should('be.visible');
    }

    static AssertHapusBeritaSuccess() {
        cy.contains('Data berita berhasil diambil').should('be.visible');
    }

    static AssertPopUpHapusBerita() {
        cy.contains('Apakah Anda yakin ingin menghapus data ini?').should('be.visible');
    }
}

export default Addberita;