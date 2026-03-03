class DataPokok {
    // Click Button Menu

   
    // Clik Form Data Pokok
    static TambahDataPokok(){
        cy.get('div.d-flex.align-center > button.v-btn.v-btn--icon > span:nth-of-type(3) > i.mdi-plus.mdi').should('be.visible').click();
    }
    static SimpanDataPokok(){
        cy.contains('button', 'Simpan').click();
    }

    // Pilihan Data Kalender
        static pilihTanggal(selector, index, tanggal) {

        const [year, month, day] = tanggal.split('-')

        const monthMap = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        }

        const monthText = monthMap[month]

        cy.get(selector)
            .eq(index)
            .should('be.visible')
            .click()

        cy.get('[data-testid="year-btn"] i').click()
        cy.contains('button', year).click()

        cy.get('[data-testid="month-btn"] i').click()
        cy.contains('button', monthText).click()

        cy.contains('button', Number(day)).click()
        cy.contains('button', 'Pilih').click()
    }

    //Form Tambah Data Pokok
    static UploadFotoDepan(FotoDepan){
        cy.get('input[type="file"]').eq(0).selectFile(`cypress/fixtures/${FotoDepan}`, { force: true });
    }
    static UploadFotoKanan(FotoKanan){
        cy.get('input[type="file"]').eq(1).selectFile(`cypress/fixtures/${FotoKanan}`, { force: true });
    }
    static UploadFotoKiri(FotoKiri){
        cy.get('input[type="file"]').eq(2).selectFile(`cypress/fixtures/${FotoKiri}`, { force: true });
    }
    static UploadFotoBelakang(FotoBelakang){
        cy.get('input[type="file"]').eq(3).selectFile(`cypress/fixtures/${FotoBelakang}`, { force: true });
    }
    static NamaLengkap(NamaLengkap){
        cy.get('#input-v-1-5').should('be.visible').clear().type(NamaLengkap);
    }
    static NRP(NRP){
        cy.get('#input-v-1-8').should('be.visible').clear().type(NRP);
    }
    static NIK(NIK){
        cy.get('#input-v-1-11').should('be.visible').clear().type(NIK);
    }
    static PilihPangkat(Pangkat){
        cy.get('.mt-n5 > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down').should('be.visible').click();
        cy.get('.v-list-item__content').contains(Pangkat).should('be.visible').click();
    }
    static TMTPangkat(tanggal) {
        this.pilihTanggal(
            'div.v-input.v-input--horizontal > div > div.v-field.v-field--appended > div:nth-of-type(4) > i.mdi-calendar.mdi',
            0,
            tanggal
        )
    }
    static PilihKorps(Korps){
        cy.get('[istambah=""] > .d-flex > .flex-grow-1 > .v-input > .v-input__control > .v-field > .v-field__append-inner').should('be.visible').click();
        cy.get('button.v-btn .mdi-menu-right').should('be.visible').click();
        cy.get('#v-list-group--id-1\\.1\\. i').eq(0).should('be.visible').click();
        cy.get('#v-list-group--id-1\\.3\\. i').eq(0).should('be.visible').click();
        cy.get('#v-list-group--id-1\\.2\\. i').eq(0).should('be.visible').click();
        cy.get('.v-list-item__content').contains(Korps).should('be.visible').click();
        cy.contains('button', 'Pilih').should('be.visible').click();
    }
    static PilihSpesialisasi(Spesialisasi){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(0).should('be.visible').click();
        cy.get('.v-list-item__content').contains(Spesialisasi).should('be.visible').click();
    }
    static PilihKualifikasi(Kualifikasi){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(1).should('be.visible').click();
        cy.get('.v-list-item__content').contains(Kualifikasi).should('be.visible').click();
    }
    static PilihJabatan(Jabatan){
        cy.get(':nth-child(3) > .v-col > :nth-child(2) > .d-flex > .flex-grow-1 > .v-input > .v-input__control > .v-field')
            .should('be.visible').click();
        cy.get('button.v-btn')
            .find('.mdi-menu-right')
            .should('be.visible')
            .click();
        cy.get('button.v-btn')
            .find('.mdi-menu-right')
            .should('be.visible')
            .click();
        cy.get('button.v-btn')
            .find('.mdi-menu-right')
            .should('be.visible')
            .click();
        cy.get('button.v-btn')
            .find('.mdi-menu-right')
            .eq(0)
            .should('be.visible')
            .click();
        cy.contains(Jabatan).should('be.visible').click();
        cy.contains('button','Pilih')
            .should('be.visible')
            .click();
    }
    static TMTJabatan(tanggal) {
        this.pilihTanggal(
            '.v-row--dense.mt-n6 > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-calendar',
            0,
            tanggal
        )
    }
    static PilihSatuanKerja(Satuan){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-magnify.mdi').eq(2).should('be.visible').click();
        cy.get('#v-list-group--id-0102 i').should('be.visible').click();
        cy.get('#v-list-group--id-010218 i').should('be.visible').click();
        cy.get('#v-list-group--id-01021801 i').should('be.visible').click();
        cy.get('.v-list-item__content').contains(Satuan).should('be.visible').click();
        cy.contains('button', 'Pilih').should('be.visible').click();
    }
    static TempatLahir(TempatLahir){
        cy.get('#input-v-1-41').should('be.visible').clear().type(TempatLahir);
    }
    static TanggalLahir(tanggalLahir) {
        this.pilihTanggal(
            ':nth-child(2) > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-calendar',
            0,
            tanggalLahir
        )
    }
    static Agama(Agama){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(2).should('be.visible').click();
        cy.get('.v-list-item__content').contains(Agama).should('be.visible').click();
    }
    static StatusPerkawinan(statusPerkawinan){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(3).should('be.visible').click();
        cy.get('.v-list-item__content').contains(statusPerkawinan).should('be.visible').click();
    }
    static JenisKelamin(JenisKelamin){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(4).should('be.visible').click();
        cy.get('.v-list-item__content').contains(JenisKelamin).should('be.visible').click();
    }
    static Alamat(Alamat){
        cy.get('#input-v-1-63').should('be.visible').clear().type(Alamat);
    }
    static NoHp(NoHp){
        cy.get('#input-v-1-66').should('be.visible').clear().type(NoHp);
    }
    static KategoriPersonel(KategoriPersonel){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(5).should('be.visible').click();
        cy.get('.v-list-item__content').contains(KategoriPersonel).should('be.visible').click();
    }
    static TMTKategoriPersonel(tanggalkategori) {
        this.pilihTanggal(
            ':nth-child(7) > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-calendar',
            0,
            tanggalkategori
        )
    }
    static SumberPerwira(SumberPerwira){
        cy.get(':nth-child(8) > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down')
            .should('be.visible').click();  
        cy.get('.v-overlay-container').contains(SumberPerwira).should('be.visible').click();     
    }
    static TMTPerwira(tanggalPerwira) {
        this.pilihTanggal(
            ':nth-child(9) > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-calendar',
            0,
            tanggalPerwira
        )
    }
    static SumberTNI(SumberTNI){
        cy.get('div.v-input.v-input--horizontal > div:nth-of-type(1) > div.v-field.v-field--appended > div:nth-of-type(5) > i.mdi-menu-down.mdi').eq(7).should('be.visible').click();
        cy.get('.v-list-item__content').contains(SumberTNI).should('be.visible').click();
    }
    static TMTSumberTNI(tanggalTNI) {
        this.pilihTanggal(
            ':nth-child(11) > .v-col > .v-input > .v-input__control > .v-field > .v-field__append-inner > .mdi-calendar',
            0,
            tanggalTNI
        )
    }

    //Assertion
    static AssertFormTambahDataPokok(){
        cy.url().should('include', '/admin/personel/dapok/tambah');
    }
    static AssertDataPokokSuccess(){
        cy.url().should('include', '/admin/personel/dapok');
    }


}

export default DataPokok;