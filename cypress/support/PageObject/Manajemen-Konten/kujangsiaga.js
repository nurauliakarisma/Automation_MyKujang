class Kujangsiaga {

    //Form Tambah Kujang Siaga // --
    static fillTitle(title) {
        cy.get('input[placeholder="Judul"]')
        .should('be.visible').clear().type(title);
    }

    static PilihTanggalHariIni() {
        cy.get('input[placeholder="Tanggal"]').click()

        cy.get('.v-date-picker').within(() => {
            cy.get('button[aria-label^="Today"]').click()
        })
    }

    static PilihEditTanggalHariIni() {
        cy.get('#input-v-1-0-82').clear().click()

        cy.get('.v-date-picker').within(() => {
            cy.get('button[aria-label^="Today"]').click()
        })
    }

    static PilihTanggalBesok() {
        cy.get('input[placeholder="Tanggal"]').click()

        cy.get('.v-date-picker').within(() => {
            cy.get('button[aria-label^="Today"]')
            .next().click()
        })
    }


    static Pilihwaktu() {
        // buka time picker
        cy.get('input[placeholder="Waktu"]')
            .should('be.visible')
            .click();

        // klik Select / OK
        cy.get('.dp__action_select').click();
    }


    static PilihPeringatan(peringatan) {
        cy.get('.mt-n6 > :nth-child(1) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
            .should('be.visible')
            .click();
        cy.get(`[aria-posinset="${peringatan}"] > .v-list-item__content > .v-list-item-title`)
            .should('be.visible')
            .click();
    }

    static PilihLevel(level) {
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
            .should('be.visible')
            .click()
        cy.get(`[aria-posinset="${level}"] > .v-list-item__content > .v-list-item-title`)
            .should('be.visible').click()
    }

    static PilihBerulang(berulang) {
        cy.get(':nth-child(4) > .v-col-md-6 > .v-input > .v-input__control > .v-field > .v-field__field > .v-field__input')
            .should('be.visible').click();
        cy.get(`[aria-posinset="${berulang}"] > .v-list-item__content > .v-list-item-title`)
            .should('be.visible').click();
    }

    static PilihPegawai(pegawai) {
        cy.get('#input-v-1-0-70')
            .should('be.visible').click();
        cy.get('input[placeholder="Cari Pegawai"]')
            .should('be.visible').clear().type(pegawai);
        cy.get('.mdi-magnify').click();
        cy.contains(pegawai).should('be.visible');
        cy.get('input[type="checkbox"]').eq(0)
            .click();
        cy.get('.v-btn__content').contains('Pilih (1)').click();
    }

    static PilihEditPegawaiEditNormal(pegawai) {
        cy.get('#input-v-1-6-78')
            .should('be.visible').click();
        cy.get('[aria-label="Clear "]').click();
        cy.get('input[placeholder="Cari Pegawai"]')
            .should('be.visible').clear().type(pegawai);
        cy.get('.mdi-magnify').click();
        cy.contains(pegawai).should('be.visible');
        cy.get('input[type="checkbox"]').eq(0)
            .click();
        cy.get('.v-btn__content').contains('Pilih (2)').click();
    }

    static PilihEditPegawaiEditSiaga(pegawai) {
        cy.get('#input-v-1-0-80')
            .should('be.visible').click();
        cy.get('[aria-label="Clear "]').click();
        cy.get('input[placeholder="Cari Pegawai"]')
            .should('be.visible').clear().type(pegawai);
        cy.get('.mdi-magnify').click();
        cy.contains(pegawai).should('be.visible');
        cy.get('input[type="checkbox"]').eq(0)
            .click();
        cy.get('.v-btn__content').contains('Pilih (2)').click();
    }

    static fillPesan(pesan) {
        cy.get('textarea[placeholder="Pesan"]').should('be.visible').clear().type(pesan);
    }

    static fillLokasi(lokasi) {
        cy.get('input[placeholder="Lokasi"]').should('be.visible').clear().type(lokasi);
    }

    static SearchKujangSiaga(title) {
        cy.contains('label', 'Pencarian')
            .invoke('attr', 'for')
            .then((inputId) => {
            cy.get(`#${inputId}`)
                .should('be.visible')
                .clear()
                .type(title)
                .type('{enter}');
            });
    }


    //Click Button // --
    static ClickManajementKonten() {
        cy.contains('Manajemen Konten').should('be.visible').click();
    }

    static ClickKujangSiaga() {
        cy.contains('Kujang Siaga').should('be.visible').click();
    }

    static ClickTambahKujangSiaga() {
        cy.get('.mdi-plus').should('be.visible').click();
    }

    static ClickSimpanKujangSiaga() {
        cy.get('button[type="submit"]').contains('Kirim').should('be.visible').click();
    }

    static ClickBatalKujangSiaga() {
        cy.get('button[type="button"]').contains('Batal').should('be.visible').click();
    }

    static ClickBackKujangSiaga() {
        cy.get('.mdi-chevron-left').should('be.visible').click();
    }

    static ClickSearchKujangSiaga() {
        cy.get('.mdi-magnify').should('be.visible').click();
    }

    static ClickRowKujangSiagaByTitle(title) {
        cy.contains('tr', title)
            .should('be.visible')
            .click();
    }

    static ClickEditKujangSiaga() {
        cy.get('.mdi-fountain-pen')
            .should('be.visible')
            .click();
    }

    static ClickDeleteKujangSiagaByTitle(title) {
        cy.get(':nth-child(10) > .d-flex > :nth-child(2)').click();
        cy.contains('button', 'Konfirmasi')
            .should('be.visible')
            .click();
    }

    static ClickDeleteIcon() {
        cy.contains('Delete').click();
    }


    //Assertion // --
    static AssertManajementKontenCard() {
        cy.contains('Manajemen Konten').should('be.visible');
    }

    static AssertPageKujangSiaga() {
        cy.url().should('include', '/admin/cms/kujang-siaga');
    }

    static AssertFormTambahKujangSiaga() {
        cy.url().should('include', '/admin/cms/pengumuman/tambah');
    }

    static AssertFormTambahKujangSiagaPopUp() {
        cy.contains('Data CMS - Announcement berhasil ditampilkan').should('be.visible');
    }

    static AssertSimpanKujangSiagaSuccess() {
        cy.contains('Berhasil menyimpan data').should('be.visible');
    }   

    static AssertFormEditKujangSiaga() {
        cy.url().should('include', '/admin/cms/pengumuman/ubah');
    }

    static AssertPopUpDeleteKujangSiaga() {
        cy.contains('Apakah Anda yakin ingin menghapus data ini?').should('be.visible');
    }

    static AssertDeleteKujangSiagaSuccess() {
        cy.contains('Data Tidak Ditemukan').should('be.visible');
    }

}
export default Kujangsiaga;