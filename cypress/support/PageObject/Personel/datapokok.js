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
        const tanggalStr = String(tanggal)
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

        cy.get('.v-date-picker-month__days')
        .contains('button', new RegExp(`^${Number(day)}$`))
        .click()

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
    static NamaLengkap(nama){
        cy.contains('label', 'Nama Lengkap').parent().find('input')
        .should('be.visible')
        .clear()
        .type(nama);
    }
    static NRP(NRP){
        cy.contains('label', 'NRP').parent().find('input')
        .should('be.visible')
        .clear()
        .type(NRP);
    }
    static NIK(NIK){
        cy.contains('label', 'NIK').parent().find('input')
        .should('be.visible')
        .clear()
        .type(NIK)
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
        cy.get('#v-list-group--id-01 i').should('be.visible').click(); //Tentara Nasioanal 1
        cy.get('#v-list-group--id-0102 i').should('be.visible').click(); //Tentara Nasional 2
        cy.get('#v-list-group--id-010218 div').eq(1).should('be.visible').click(); //Brigif Para raider 17/ Sakti Budi Bakti
        cy.get('#v-list-group--id-01021801 i').eq(0).should('be.visible').click(); //Mabrig
        cy.get('#v-list-group--id-01021802 i').should('be.visible').click(); //Datasemen Markas
        cy.get('.v-menu__content').scrollTo('bottom')
            cy.get('#v-list-group--id-0102180201 i').should('be.visible').click(); //Maden
            cy.get('#v-list-group--id-0102180202 i').should('be.visible').click(); //Simabrig
            cy.get('#v-list-group--id-0102180203 i').should('be.visible').click(); //Markas
                cy.get('#v-list-group--id-010218020313 i').should('be.visible').click(); //Seksi Administrasi
                cy.get('#v-list-group--id-010218020314 i').should('be.visible').click(); //Ton Perbekalan / Perwatan
                cy.get('#v-list-group--id-010218020315 i').should('be.visible').click(); //Ton Angkutan
                cy.get('#v-list-group--id-010218020316 i').should('be.visible').click(); //Si Provost
                cy.get('#v-list-group--id-010218020317 i').should('be.visible').click(); //TON Kesehatan
                cy.get('#v-list-group--id-010218020318 i').should('be.visible').click(); //TON PSU
                cy.get('#v-list-group--id-010218020319 i').should('be.visible').click(); //TON Pandu
                cy.get('#v-list-group--id-010218020320 i').should('be.visible').click(); //TON Taikam
            cy.get('#v-list-group--id-0102180204 i').should('be.visible').click(); //Kompi Perhubungan
                cy.get('#v-list-group--id-010218020421 i').should('be.visible').click(); //TON Hublap
                cy.get('#v-list-group--id-010218020422 i').should('be.visible').click(); //TON Hubyan
                cy.get('#v-list-group--id-010218020423 i').should('be.visible').click(); //TON Bekhar
        cy.get('#v-list-group--id-01021804 i').should('be.visible').click(); //Yonif Para Raider 305 / Tengkorak
            cy.get('#v-list-group--id-0102180401 i').should('be.visible').click(); //Eselon Pimpinan
            cy.get('#v-list-group--id-0102180402 i').should('be.visible').click(); //Kompi Markas
                cy.get('#v-list-group--id-010218040216 i').should('be.visible').click(); //Pleton pimu
                cy.get('#v-list-group--id-010218040217 i').should('be.visible').click(); //Pleton Kesehatan
                cy.get('#v-list-group--id-010218040218 i').should('be.visible').click(); //TON Komunikasi
                   cy.get('#v-list-group--id-010218040219 i').should('be.visible').click(); //Pleton Angkutan
                cy.get('#v-list-group--id-0102180403 i').should('be.visible').click(); //Kompi Senapan A
                    cy.get('#v-list-group--id-010218040318 i').should('be.visible').click(); //Pleton Ban/A
                    cy.get('#v-list-group--id-010218040319 i').should('be.visible').click(); //Pleton I/A
                    cy.get('#v-list-group--id-010218040320 i').should('be.visible').click(); //Pleton II/A
                    cy.get('#v-list-group--id-010218040321 i').should('be.visible').click(); //Pleton III/A
                cy.get('#v-list-group--id-0102180404 i').should('be.visible').click(); //Kompi Senapan B
                    cy.get('#v-list-group--id-010218040418 i').should('be.visible').click(); //Pleton Ban/B
                    cy.get('#v-list-group--id-010218040419 i').should('be.visible').click(); //Pleton I/B
                    cy.get('#v-list-group--id-010218040420 i').should('be.visible').click(); //Pleton II/B
                    cy.get('#v-list-group--id-010218040421 i').should('be.visible').click(); //Pleton III/B
                cy.get('#v-list-group--id-0102180405 i').should('be.visible').click(); //Kompi Senapan C
                    cy.get('#v-list-group--id-010218040518 i').should('be.visible').click(); //Pleton Ban/C
                    cy.get('#v-list-group--id-010218040519 i').should('be.visible').click(); //Pleton I/C
                    cy.get('#v-list-group--id-010218040520 i').should('be.visible').click(); //Pleton II/C
                    cy.get('#v-list-group--id-010218040521 i').should('be.visible').click(); //Pleton III/C
                cy.get('#v-list-group--id-0102180406 i').should('be.visible').click(); //Kompi Bantuan
                    cy.get('#v-list-group--id-010218040617 i').should('be.visible').click(); //Pleton/SMS/BANT
                    cy.get('#v-list-group--id-010218040618 i').should('be.visible').click(); //Pleton SLT/BANT
                    cy.get('#v-list-group--id-010218040619 i').should('be.visible').click(); //Pleton Morse/BANT
        cy.get('#v-list-group--id-01021805 i').should('be.visible').click(); //Yonif Para Raider 330 / Dirgahayu
        
        cy.get('#v-list-group--id-01021806 i').should('be.visible').click(); //Yonif Para Raider 330 / Tridarma
            cy.get('#v-list-group--id-0102180601 i').should('be.visible').click(); //Eselon Pimpinan
            cy.get('#v-list-group--id-0102180602 i').should('be.visible').click(); //Kompi Markas
                cy.get('#v-list-group--id-010218060221 i').should('be.visible').click(); //TONKES
                cy.get('#v-list-group--id-010218060222 i').should('be.visible').click(); //TONKOM
                cy.get('#v-list-group--id-010218060223 i').should('be.visible').click(); //TONANG
                cy.get('#v-list-group--id-010218060224 i').should('be.visible').click(); //TONPIMU
            cy.get('#v-list-group--id-0102180603 i').should('be.visible').click(); //Kompi Senapan A
                cy.get('#v-list-group--id-010218060316 i').should('be.visible').click(); //TONBAN
                cy.get('#v-list-group--id-010218060317 i').should('be.visible').click(); //PLETON I/A
                cy.get('#v-list-group--id-010218060318 i').should('be.visible').click(); //Pleton II/A
                cy.get('#v-list-group--id-010218060319 i').should('be.visible').click(); //Pleton III/A
            cy.get('#v-list-group--id-0102180604 i').should('be.visible').click(); //Kompi Senapan B
                cy.get('#v-list-group--id-010218060416 i').should('be.visible').click(); //TONBAN
                cy.get('#v-list-group--id-010218060417 i').should('be.visible').click(); //Pleton I/B
                cy.get('#v-list-group--id-010218060418 i').should('be.visible').click(); //Pleton II/B
                cy.get('#v-list-group--id-010218060419 i').should('be.visible').click(); //Pleton III/B
            cy.get('#v-list-group--id-0102180605 i').should('be.visible').click(); //Kompi Bantuan
                cy.get('#v-list-group--id-010218060615 i').should('be.visible').click(); //TONMORSE
                cy.get('#v-list-group--id-010218060616 i').should('be.visible').click(); //TONSMS
                cy.get('#v-list-group--id-010218060617 i').should('be.visible').click(); //TONDRONE
        //cy.contains(Jabatan).should('be.visible').click();
        //cy.contains('button','Pilih').should('be.visible').click();
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
        cy.get('.v-col-12 > .v-row > :nth-child(1) > .v-input > .v-input__control > .v-field').should('be.visible').type(TempatLahir);
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
        cy.contains('label', 'Alamat').parent().find('input')
        .should('be.visible')
        .clear()
        .type(Alamat)
    }
    static NoHp(NoHp){
        cy.get(':nth-child(3) > :nth-child(5) > .v-col > .v-input > .v-input__control > .v-field').should('be.visible').type(NoHp);
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
            'div.v-input.v-input--horizontal > div > div.v-field.v-field--appended > div:nth-of-type(4) > i.mdi-calendar.mdi',
            4,
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
    cy.get('label')
      .contains('Nama Lengkap')
      .should('be.visible')
    }
    static AssertDataPokokSuccess(){
        cy.url().should('include', '/admin/personel/dapok');
    }


}

export default DataPokok;